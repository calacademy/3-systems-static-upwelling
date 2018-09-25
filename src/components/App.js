import React, { Component } from 'react'
import '../style/App.css'
import Translator from './Translator'
import Credits from './Credits'
import System from './System'

class App extends Component {
  constructor() {
    super()
    this.state = {
      system: 0, // 0:upwelling || 1:carbon || 2:fog
      display: 'system', // system || credits
      data: null,
      dataSystem0: null,
      dataSystem1: null,
      dataSystem2: null,
      dataCredits: null,
      dataCredits0: null,
      dataCredits1: null,
      dataCredits2: null,
      currentLanguage: 0, // 0:english || 1:spanish || 2:chinese || 3:filipino
      currentSection: 0,
      preview: false,
      actionTranslate: null,
      inactivityInt: 90000,
      dateLastTouch: null
    }

    // handler to track touch events by way of System > Section > Popup
    this.handlerReceivePopupTouch = this._receivePopupTouch.bind(this)

    // Translator handlers
    this.handlerSelectLanguage = this._selectLanguage.bind(this)
    this.handlerSelectCredits = this._selectCredits.bind(this)
    // Credits handlers
    this.handlerCloseCredits = this._closeCredits.bind(this)
    // System handler by way of Nav handler
    this.handlerSelectSection = this._selectSection.bind(this)
    // Section handler by way of System
    this.handlerInitSecondSection = this._initSecondSection.bind(this)

  }

  _getLanguageName(l) {
    var lang = ''
    switch (l) {
      case 0:
        lang = 'english'
        break
      case 1:
        lang = 'spanish'
        break
      case 2:
        lang = 'chinese'
        break
      case 3:
        lang = 'filipino'
        break
      default:
        break
    }
    return lang
  }

  _inactivityCheck() {
    var now = new Date()
    var check = new Date(now.getTime() - this.state.inactivityInt)
    if (this.state.dateLastTouch !== null) {
      if (this.state.dateLastTouch < check) {
        this.setState({
          currentSection: 0,
          currentLanguage: 0,
          display: 'system',
          dateLastTouch: null
        })
      }
    }
  }

  _getData() {
    var _this = this
    fetch('/data/systems-system-text.json')
    .then(function (response) {
      return response.json()
    }).then(function(data) {
      _this.setState ({
        data: data
      })
      _this._setDataSystem()
    }).catch(function (ex) {
      console.log('JSON fetch failed: fetching again in 30 seconds', ex)
      // try again in 30 sec
      setTimeout(function () {
       _this._getData()
     }, 30000)
    })
  }

  _getDataCredits() {
    var _this = this
    fetch('/data/systems-systems-credits.json')
    .then(function (response) {
      return response.json()
    }).then(function(data) {
      _this.setState ({
        dataCredits: data
      })
      _this._setDataCreditsSystem()
    }).catch(function (ex) {
      console.log('JSON fetch failed: fetching again in 30 seconds', ex)
      // try again in 30 sec
      setTimeout(function () {
       _this._getDataCredits()
     }, 30000)
    })
  }

  _setDataSystem() {
    if (this.state.data) {
      var arrUpwelling = []
      var arrCarbon = []
      var arrFog = []
      this.state.data.forEach(function(data, i) {
        if (data.system === 'upwelling') {
          arrUpwelling.push(data)
        } else if (data.system === 'carbon') {
          arrCarbon.push(data)
        } else if (data.system === 'fog') {
          arrFog.push(data)
        }
      })
      this.setState ({
        dataSystem0: arrUpwelling,
        dataSystem1: arrCarbon,
        dataSystem2: arrFog
      })
      this._getDataCredits()
    }
  }

  _setDataCreditsSystem() {
    if (this.state.dataCredits) {
      var arrUpwelling = []
      var arrCarbon = []
      var arrFog = []
      this.state.dataCredits.forEach(function(data, i) {
        if (data.title === 'upwelling credits') {
          arrUpwelling.push(data)
        } else if (data.title === 'carbon credits') {
          arrCarbon.push(data)
        } else if (data.title === 'fog credits') {
          arrFog.push(data)
        }
      })
      this.setState ({
        dataCredits0: arrUpwelling,
        dataCredits1: arrCarbon,
        dataCredits2: arrFog
      })
    }
  }

  // Translator methods
  _selectLanguage(e, lang) {
    e.preventDefault()
    this.setState({
      currentLanguage: lang,
      actionTranslate: true,
      dateLastTouch: new Date()
    })
  }

  _selectCredits(e) {
    e.preventDefault()
    if (this.state.display !== 'credits') {
      this.setState({
        display: 'credits',
        dateLastTouch: new Date()
      })
    }
  }
  _closeCredits(e) {
    e.preventDefault()
    if (this.state.display === 'credits') {
      this.setState({
        display: 'system',
        dateLastTouch: new Date()
      })
    }
  }

  // System + Nav method
  _selectSection(sec) {
    this.setState({
      currentSection: sec,
      dateLastTouch: new Date()
    })
  }

  _receivePopupTouch(p) {
    this.setState({
      dateLastTouch: new Date()
    })
  }

  // Section method
  _initSecondSection(e) {
    e.preventDefault()
    this.setState({
      currentSection: 1,
      dateLastTouch: new Date()
    })
  }

  componentDidMount() {
    this._getData()
    this.setState({
      dateLastTouch: new Date()
    })
    setInterval(() => this._inactivityCheck(), 5000)
  }

  render() {

    var dataSystem = this.state.dataSystem0
    var dataCredits = this.state.dataCredits0

    return (
      <div id="app" className={this.state.preview ? 'preview system-' + this.state.system : 'system-' + this.state.system} >


        <div id="sky" />
        <div id="sky-trans" />
        <div id="container-translator"
          >
          <Translator
            language={this.state.currentLanguage}
            handlerSelectLanguage={this.handlerSelectLanguage}
            handlerSelectCredits={this.handlerSelectCredits}
            display={this.state.display}
           />
        </div>
        <div id="container-credits"
          className={this.state.display !== 'credits' ? 'hide-anim' : ''}>
          <Credits
            display={this.state.display}
            dataCredits={dataCredits}
            handlerCloseCredits={this.handlerCloseCredits}
            language={this.state.currentLanguage}
           />
        </div>
        <div id="container-system"
          className={this.state.display !== 'system' ? 'hide' : ''}>
          <System
            // just pass data for system instance
            data={dataSystem}
            system={this.state.system}
            currentSection={this.state.currentSection}
            language={this.state.currentLanguage}
            handlerSelectSection={this.handlerSelectSection}
            handlerReceivePopupTouch={this.handlerReceivePopupTouch}
            handlerInitSecondSection={this.handlerInitSecondSection}
          />
        </div>
      </div>
    )
  }
}

export default App
