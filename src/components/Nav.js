import React, { Component } from 'react'
import '../style/Nav.css'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSectionNav: null,
      sectionNav0: '',
      sectionNav1: '',
      sectionNav2: ''
    }

  }

  componentDidMount() {
    // insure state default init
    this.setState({
      sectionNav0: '',
      sectionNav1: '',
      sectionNav2: ''
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data) {

      if (prevProps.data !== this.props.data) {

        var arrSectionNavData = []
        this.props.data.forEach(function(item) {

          if (item.sectionNavEnglish) {

            var arrSectionNavs = [
              item.sectionNavEnglish,
              item.sectionNavSpanish,
              item.sectionNavChinese,
              item.sectionNavFilipino
            ]
            var jsonSectionNavs = JSON.stringify(arrSectionNavs)
            var jsonSectionNavData = JSON.stringify(arrSectionNavData)
            var jsonTestSectionNav = jsonSectionNavData.indexOf(jsonSectionNavs)
            if (jsonTestSectionNav === -1) {
              // push unique section nav lables as arrays of section nav translations
              arrSectionNavData.push(arrSectionNavs)
            }

          }

        })

        if (arrSectionNavData[0] && arrSectionNavData[1] && arrSectionNavData[2]) {
          this.setState({
            sectionNav0: arrSectionNavData[0][0],
            sectionNav1: arrSectionNavData[1][0],
            sectionNav2: arrSectionNavData[2][0],
            dataSectionNav: arrSectionNavData
          })
        }

      }

    }

  }

  componentWillReceiveProps(nextProps) {

    if (this.state.dataSectionNav) {

      switch (nextProps.language) {

        case 0:
          this.setState({
            sectionNav0: this.state.dataSectionNav[0][0],
            sectionNav1: this.state.dataSectionNav[1][0],
            sectionNav2: this.state.dataSectionNav[2][0]
          })
          break
        case 1:
          this.setState({
            sectionNav0: this.state.dataSectionNav[0][1],
            sectionNav1: this.state.dataSectionNav[1][1],
            sectionNav2: this.state.dataSectionNav[2][1]
          })
          break
        case 2:
          this.setState({
            sectionNav0: this.state.dataSectionNav[0][2],
            sectionNav1: this.state.dataSectionNav[1][2],
            sectionNav2: this.state.dataSectionNav[2][2]
          })
          break
        case 3:
          this.setState({
            sectionNav0: this.state.dataSectionNav[0][3],
            sectionNav1: this.state.dataSectionNav[1][3],
            sectionNav2: this.state.dataSectionNav[2][3]
          })
          break
        default:
          break
      }

    }

  }

  render() {

    const rows = []

    var markupNav0 = {__html: this.state.sectionNav0}
    var markupNav1 = {__html: this.state.sectionNav1}
    var markupNav2 = {__html: this.state.sectionNav2}

    var secondButtonClass = ''

    if (this.props.currentSection === 1) {
      secondButtonClass = 'selected'
    } else  if (this.props.currentSection === 0) {
      secondButtonClass = 'pulse'
    }

    rows.push(
      <div id="container-nav-buttons" key="0">
        <button
          onTouchEnd={(e) => this.props.handlerSelectSection(e, 0)}
          onClick={(e) => this.props.handlerSelectSection(e, 0)}
          className={this.props.currentSection === 0 ? 'selected' : ''}
          ><span dangerouslySetInnerHTML={markupNav0} /></button>
        <button
          onTouchEnd={(e) => this.props.handlerSelectSection(e, 1)}
          onClick={(e) => this.props.handlerSelectSection(e, 1)}
          className={secondButtonClass}
          ><span dangerouslySetInnerHTML={markupNav1} /></button>
        <button
          onTouchEnd={(e) => this.props.handlerSelectSection(e, 2)}
          onClick={(e) => this.props.handlerSelectSection(e, 2)}
          className={this.props.currentSection === 2 ? 'selected' : ''}
          ><span dangerouslySetInnerHTML={markupNav2} /></button>
      </div>
    )

    return (
      <div id="nav">
        {rows}
      </div>
    )

  }
}

export default Nav
