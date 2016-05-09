import './style.scss'
import { Component, PropTypes } from 'react'
import { default as color } from 'color'

const baseColors = {
  black: '#404040',
  white: '#fff',
  lightGray: '#f2f2f2',
  gray: '#ddd',
  midgray: '#888',
  blue: '#3c86c8',
  lightBlue: 'aliceblue',
  red: '#f52',
  orange: '#f70',
  green: '#1c7'
}

export const colors = {
  ...baseColors,
  primary: baseColors.white,
  secondary: baseColors.lightBlue,
  default: baseColors.black,
  info: baseColors.blue,
  success: baseColors.green,
  warning: baseColors.orange,
  error: baseColors.red
}

const scale = [0, 10, 25, 48, 64]
const fontSizes = [64, 32, 25, 19, 18, 14, 12]

const shadows = {
  black: `0 0 18px 4px ${color(colors.black).alpha(0.1).rgbString()}`,
  lightBlue: `0px 0px 14px 3px ${color(colors.lightBlue).alpha(0.9).rgbString()}`
}

export default class Theme extends Component {

  static propTypes = {
    children: PropTypes.node
  };

  static childContextTypes = {
    breakpoints: PropTypes.object,
    rebass: PropTypes.object,
    reflexbox: PropTypes.object
  };

  getChildContext () {
    return {
      breakpoints: {
        small: 425,
        medium: 768,
        large: 1024
      },
      reflexbox: { scale },
      rebass: {
        colors,
        fontSizes,
        scale,
        shadows,
        DropdownMenu: {
          boxShadow: shadows.lightBlue
        },
        Footer: {
          paddingBottom: scale[1],
          paddingTop: scale[1]
        },
        Pre: {
          backgroundColor: colors.black,
          borderLeft: 0,
          color: colors.white,
          overflowX: 'auto',
          paddingLeft: 0
        },
        SectionHeader: {
          borderBottomColor: colors.lightGray,
          borderBottomStyle: 'dashed'
        },
        HeadingLink: {
          textAlign: 'center'
        },
        Badge: {
          fontWeight: 'lighter'
        },
        Button: {
          border: `1px solid ${colors.black}`,
          color: colors.black
        },
        Label: {
          display: 'block',
          marginBottom: 10
        },
        Menu: {
          borderColor: colors.white,
          marginBottom: 'inherit'
        },
        NavItem: {
          fontWeight: 200
        },
        Text: {
          marginBottom: scale[1],
          marginTop: scale[1]
        },
        Toolbar: {
          backgroundColor: 'transparent',
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    }
  }

  render () {
    return this.props.children
  }
}
