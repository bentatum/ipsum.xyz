import ApiClient from '../../apiClient'
import { AWAIT_MARKER } from 'redux-await'
import { EventTypes } from 'redux-segment'

const SCREEN_DIMENSIONS = 'benjamintatum.com/SCREEN_DIMENSIONS_CHANGE'
export const SUBMIT_LEAD = 'benjamintatum.com/SUBMIT_LEAD'

const client = new ApiClient()

export function setScreenSize (height, width) {
  return {
    type: SCREEN_DIMENSIONS,
    payload: {
      height,
      width
    }
  }
}

export function createLead ({ name, email, phone, issue }) {
  return {
    type: SUBMIT_LEAD,
    AWAIT_MARKER,
    payload: {
      [SUBMIT_LEAD]: client.post({
        data: `
          mutation {
            createLead(
              name: \"${name}\",
              email: \"${email}\",
              phone: \"${phone}\",
              issue: \"${issue}"\
            ) { id, name }
          }
        `
      })
    },
    meta: {
      analytics: {
        eventType: EventTypes.track,
        eventPayload: {
          datetime: new Date(),
          isMobile:
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
                .test(navigator.userAgent)
        }
      }
    }
  }
}

const intitialState = {
  errors: null,
  height: 0,
  width: 0
}

export function reducer (state = intitialState, action) {
  switch (action.type) {
    case SUBMIT_LEAD:
      return {
        ...state,
        errors: action.payload[SUBMIT_LEAD].errors
      }
    case SCREEN_DIMENSIONS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
