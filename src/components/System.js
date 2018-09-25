import React, { Component } from 'react'
import '../style/System.css'
import Nav from './Nav'
import Section from './Section'

class System extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: null
    }

    // Section handler
    this.handlerSelectSection = this._selectSection.bind(this)

  }

  // Nav method
  _selectSection(e, sec) {
    this.props.handlerSelectSection(sec)
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {

    return (
      <div id="system" className={'system-' + this.props.system}>
        <div id="container-nav">
          <Nav
            data={this.props.data}
            system={this.props.system}
            currentSection={this.props.currentSection}
            language={this.props.language}
            handlerSelectSection = {this.handlerSelectSection}
          />
        </div>
        <div id="container-section">
          <Section
            data={this.props.data}
            system={this.props.system}
            currentSection={this.props.currentSection}
            language={this.props.language}
            handlerReceivePopupTouch={this.props.handlerReceivePopupTouch}
            handlerInitSecondSection={this.props.handlerInitSecondSection}
          />
        </div>
      </div>
    )

  }
}

export default System
