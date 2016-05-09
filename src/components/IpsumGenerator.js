import { default as React, Component } from 'react'
import { Slider } from 'rebass'
import { default as loremIpsum } from 'lorem-ipsum'

export default class IpsumGenerator extends Component {

  constructor (props) {
    super(props)
    this.state = {
      count: 4,
      size: 21
    }
    this.state.text = loremIpsum({
      count: this.state.count,
      units: 'paragraphs',
      paragraphLowerBound: 3,
      paragraphUpperBound: this.state.size,
      format: 'html'
    })
  }

  handleSlide ({ target: { name, value } }) {
    if (name === 'size') {
      return this.setState({
        size: value,
        text: loremIpsum({
          count: this.state.count,
          units: 'paragraphs',
          paragraphLowerBound: 3,
          paragraphUpperBound: value,
          format: 'html'
        })
      })
    }
    if (name === 'count') {
      return this.setState({
        count: value,
        text: loremIpsum({
          count: value,
          units: 'paragraphs',
          paragraphLowerBound: 3,
          paragraphUpperBound: this.state.size,
          format: 'html'
        })
      })
    }
  }

  render () {
    return (
      <div>
        <div>
          <Slider
            defaultValue={this.state.count}
            label='Paragraphs'
            name='count'
            onChange={::this.handleSlide}
            thumbSize={15}
          />
          <Slider
            defaultValue={this.state.size}
            label='Paragraph Size'
            name='size'
            onChange={::this.handleSlide}
            thumbSize={15}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: this.state.text }} />
      </div>
    )
  }
}
