import React, { Component, PropTypes } from 'react'
import { Theme } from 'components'
import { default as Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { setScreenSize } from 'redux/modules/app'

@connect(() => ({}), { screenSize: setScreenSize })

export default class App extends Component {

  static propTypes = {
    children: PropTypes.node,
    screenSize: PropTypes.func.isRequired
  };

  componentDidMount () {
    const { screenSize } = this.props
    window.addEventListener(
      'resize',
      () => screenSize(
        window.innerHeight || $(window).height(),
        window.innerWidth || $(window).width()
      )
    )
    screenSize(
      window.innerHeight || $(window).height(),
      window.innerWidth || $(window).width()
    )
  }

  render () {
    return (
      <div>
        <Helmet
          link={[
            { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/normalize/4.0.0/normalize.min.css' },
            { rel: 'stylesheet', href: '/style.css' },
            { rel: 'shortcut icon', href: '/favicon.png' },
            { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Slabo+27px' }
          ]}
          meta={[
            { name: 'description', content: 'Simple Lorem Ipsum. Placeholder filler text for professional design mock ups.' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' }
          ]}
          script={[
            { src: '//code.jquery.com/jquery-2.1.4.min.js' },
            { src: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.7.0/lodash.min.js' }
          ]}
          title='Ipsum.xyz - Lorem Ipsum'
        />
        <Theme>
          {this.props.children}
        </Theme>
      </div>
    )
  }
}
