import React, { Component } from 'react'
import '../style/Section.css'
import Sticker from './Sticker'
import Anim from './Anim'
import Popup from './Popup'

class Section extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSectionHeader: null,
      dataSectionDescription: null,
      dataSectionPopups: null,
      sectionHeader: '',
      sectionDescription: '',
      sectionNav: '',
      activePop: null,
      activeSticker: '',
      activeAnim: null
    }

    // app prop handler
    this.handlerInitSecondSection = this.props.handlerInitSecondSection.bind(this)

    // popup handlers
    this.handlerSelectPop = this._selectPop.bind(this)
    this.handlerClosePop = this._closePop.bind(this)

  }

  _selectPop(e, p, s, a) {
    e.preventDefault()
    if (this.state.activePop === p) {
      this.setState({
        activePop: null,
        activeAnim: '',
        activeSticker: ''
      })
    } else {
      this.setState({
        activePop: p,
        activeSticker: s,
        activeAnim: a
      })
      var pops = document.getElementsByClassName("container-popup-pop")
      for(var i =0; i < pops.length; i++) {
        pops[i].style.zIndex = "999"
      }
      var el = e.target.id
      document.getElementById(el).closest(".container-popup-pop").style.zIndex = "1000"
    }

    this.props.handlerReceivePopupTouch(p)

  }

  _closePop(e) {
    e.preventDefault()
    this.setState({
      activePop: null,
      activeAnim: '',
      activeSticker: ''
    })
    this.props.handlerReceivePopupTouch()
  }

  componentDidMount() {
    // insure state default init
    this.setState({
      sectionHeader: '',
      sectionDescription: ''
    })
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.currentSection !== this.props.currentSection) {
      this.setState({
        activePop: null
      })
    }

    if (this.state.dataSectionHeader && this.state.dataSectionDescription) {

      if (this.state.dataSectionHeader[nextProps.currentSection] && this.state.dataSectionDescription[nextProps.currentSection]) {

        switch (nextProps.language) {
          case 0:
            this.setState({
              sectionHeader: this.state.dataSectionHeader[nextProps.currentSection][0],
              sectionDescription: this.state.dataSectionDescription[nextProps.currentSection][0]
            })
            break
          case 1:
            this.setState({
              sectionHeader: this.state.dataSectionHeader[nextProps.currentSection][1],
              sectionDescription: this.state.dataSectionDescription[nextProps.currentSection][1]
            })
            break
          case 2:
            this.setState({
              sectionHeader: this.state.dataSectionHeader[nextProps.currentSection][2],
              sectionDescription: this.state.dataSectionDescription[nextProps.currentSection][2]
            })
            break
          case 3:
            this.setState({
              sectionHeader: this.state.dataSectionHeader[nextProps.currentSection][3],
              sectionDescription: this.state.dataSectionDescription[nextProps.currentSection][3]
            })
            break
          default:
            break
        }

      }

    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data) {

      if (prevProps.data !== this.props.data) {

        var arrSectionHeaderData = []
        var arrSectionDescriptionData = []
        this.props.data.forEach(function(item) {

          var arrSectionHeaders = [
            item.sectionHeaderEnglish,
            item.sectionHeaderSpanish,
            item.sectionHeaderChinese,
            item.sectionHeaderFilipino
          ]
          var jsonSectionHeaders = JSON.stringify(arrSectionHeaders)
          var jsonSectionHeaderData = JSON.stringify(arrSectionHeaderData)
          var jsonTestSectionHeader = jsonSectionHeaderData.indexOf(jsonSectionHeaders)
          if (jsonTestSectionHeader === -1) {
            // push unique section headers as arrays of section header translations
            arrSectionHeaderData.push(arrSectionHeaders)
          }

          var arrSectionDescriptions = [
            item.sectionDescriptionEnglish,
            item.sectionDescriptionSpanish,
            item.sectionDescriptionChinese,
            item.sectionDescriptionFilipino
          ]
          var jsonSectionDescriptions = JSON.stringify(arrSectionDescriptions)
          var jsonSectionDescriptionData = JSON.stringify(arrSectionDescriptionData)
          var jsonTestSectionDescription = jsonSectionDescriptionData.indexOf(jsonSectionDescriptions)
          if (jsonTestSectionDescription === -1) {
            // push unique section descriptions as arrays of section description translations
            arrSectionDescriptionData.push(arrSectionDescriptions)
          }

        })

        if (arrSectionHeaderData[this.props.currentSection]) {
          this.setState({
            sectionHeader: arrSectionHeaderData[this.props.currentSection][0],
            sectionDescription: arrSectionDescriptionData[this.props.currentSection][0],
            dataSectionHeader: arrSectionHeaderData,
            dataSectionDescription: arrSectionDescriptionData
          })
        }

      }

    }

  }

  render() {

    const rows = []

    var markupHeader = {__html: this.state.sectionHeader}
    var desc = this.state.sectionDescription
    desc = desc.replace(/<\/?a[^>]*>/g, "")
    var markupDescription = {__html: desc}


    rows.push(
      <div key="0">
        <div className="section-infobar">
          <div className="section-text">
            <h1 dangerouslySetInnerHTML={markupHeader} />
            <p dangerouslySetInnerHTML={markupDescription} />
          </div>
        </div>

        <div
          id="section-attract-initiator"
          className={this.props.currentSection === 0 ? '' : 'hide'}
          onTouchEnd={(e) => this.handlerInitSecondSection(e)}
          onClick={(e) => this.handlerInitSecondSection(e)}
        />

        <div id="container-popup">
          <Popup
            data={this.props.data}
            system={this.props.system}
            currentSection={this.props.currentSection}
            language={this.props.language}
            activePop={this.state.activePop}
            handlerSelectPop={this.handlerSelectPop}
            handlerClosePop={this.handlerClosePop}
          />
        </div>
        <div id="container-sticker">
          <Sticker
            system={this.props.system}
            currentSection={this.props.currentSection}
            activeSticker={this.state.activeSticker}
            activePop={this.state.activePop}
          />
        </div>
        <div id="container-anim">
          <Anim
            system={this.props.system}
            currentSection={this.props.currentSection}
            activePop={this.state.activePop}
            activeAnim={this.state.activeAnim}
          />
        </div>
      </div>
    )

    return (
      <div id="section">
        {rows}
      </div>
    )

  }
}

export default Section
