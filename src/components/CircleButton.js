import { default as React, PropTypes } from 'react'
import { Base } from 'rebass'

const CircleButton = ({ children }, { rebass: { colors } }) =>
  <Base
    backgroundColor={colors.blue}
    circle
    m={1}
    p={1}
    style={{
      color: colors.white
    }}
  >
    {children}
  </Base>

CircleButton.contextTypes = {
  rebass: PropTypes.object.isRequired
}

export default CircleButton
