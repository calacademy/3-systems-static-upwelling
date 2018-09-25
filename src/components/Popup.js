import React, { Component } from 'react'
import '../style/Popup.css'

class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = {

      dataSectionPopupText: null,

      dataSectionPopupHeader: null,
      dataSectionPopupDescription: null,

      arrSystems: [
        { // system 0
          arrSections: [
            {
              arrPopups: []
            },
            {
              arrPopups: [
                {
                  xPos: 900,
                  yPos: 560,
                  image: '',
                  sticker: '',
                  anim: 'upwelling-california-current',
                  origin: 'bottom-left' // left, right, top-left, top-right, bottom-left, bottom-right
                },
                {
                  xPos: 550,
                  yPos: 330,
                  image: '',
                  sticker: '',
                  anim: 'upwelling-prevailing-winds',
                  origin: 'bottom-left'
                },
                {
                  xPos: 500,
                  yPos: 450,
                  image: '',
                  sticker: '',
                  anim: 'upwelling-nutrient-rich-water',
                  origin: 'bottom-left'
                },
                {
                  xPos: 740,
                  yPos: 410,
                  image: 'upwelling-plankton-bloom',
                  sticker: '',
                  anim: 'upwelling-plankton-bloom',
                  origin: 'bottom-right'
                },
                {
                  xPos: 500,
                  yPos: 800,
                  image: 'upwelling-kelp-forest',
                  sticker: 'kelp-healthy',
                  anim: '',
                  origin: 'right'
                },
                {
                  xPos: 810,
                  yPos: 400,
                  image: 'upwelling-shelter-kelp',
                  sticker: 'otter',
                  anim: '',
                  origin: 'bottom-left'
                },
                {
                  xPos: 740,
                  yPos: 760,
                  image: 'upwelling-dining-destinations',
                  sticker: 'whale',
                  anim: '',
                  origin: 'bottom-left'
                }
              ]
            },
            {
              arrPopups: [
                {
                  xPos: 510,
                  yPos: 430,
                  image: '',
                  sticker: '',
                  anim: 'upwelling-sea-of-change',
                  origin: 'bottom-left'
                },
                {
                  xPos: 1020,
                  yPos: 500,
                  image: 'upwelling-harmful-algae',
                  sticker: '',
                  anim: 'upwelling-toxic-bloom',
                  origin: 'bottom-left'
                },
                {
                  xPos: 980,
                  yPos: 706,
                  image: 'upwelling-mammal-impact',
                  sticker: '',
                  anim: '',
                  origin: 'top-right'
                },
                {
                  xPos: 600,
                  yPos: 365,
                  image: 'upwelling-toxic-buffet',
                  sticker: 'crab',
                  anim: '',
                  origin: 'bottom-right'
                },
                {
                  xPos: 530,
                  yPos: 780,
                  image: 'upwelling-disappearing-kelp',
                  sticker: 'kelp-unhealthy',
                  anim: '',
                  origin: 'right'
                },
                {
                  xPos: 700,
                  yPos: 670,
                  image: 'upwelling-ocean-research',
                  sticker: 'bouy',
                  anim: '',
                  origin: 'top-left'
                }
              ]
            }
          ]
        },
        { // system 1
          arrSections: [
            {
              arrPopups: []
            },
            {
              arrPopups: [
                {
                  xPos: 550,
                  yPos: 530,
                  image: 'carbon-land-on-the-move',
                  sticker: '',
                  anim: '',
                  origin: 'top-right' // left, right, top-left, top-right, bottom-left, bottom-right
                },
                {
                  xPos: 765,
                  yPos: 730,
                  image: '',
                  sticker: '',
                  anim: 'carbon-san-andreas-fault',
                  origin: 'right'
                },
                {
                  xPos: 1030,
                  yPos: 410,
                  image: '',
                  sticker: '',
                  anim: 'carbon-volcanoes-spew-carbon',
                  origin: 'top-right'
                },
                {
                  xPos: 1120,
                  yPos: 410,
                  image: '',
                  sticker: '',
                  anim: 'carbon-carbon-returns-to-rock',
                  origin: 'top-left'
                },
                {
                  xPos: 970,
                  yPos: 920,
                  image: 'carbon-oil-reservoirs',
                  sticker: '',
                  anim: 'carbon-oil-reservoirs',
                  origin: 'left'
                },
                {
                  xPos: 1240,
                  yPos: 650,
                  image: '',
                  sticker: 'elk',
                  anim: '',
                  origin: 'top-right'
                }
              ]
            },
            {
              arrPopups: [
                {
                  xPos: 1120,
                  yPos: 740,
                  image: '',
                  sticker: 'car',
                  anim: '',
                  origin: 'top-right'
                },
                {
                  xPos: 580,
                  yPos: 870,
                  image: '',
                  sticker: 'oil-rig',
                  anim: '',
                  origin: 'bottom-left'
                },
                {
                  xPos: 750,
                  yPos: 430,
                  image: 'carbon-air-and-ocean-interact',
                  sticker: '',
                  anim: '',
                  origin: 'bottom-left'
                },
                {
                  xPos: 790,
                  yPos: 750,
                  image: 'carbon-seafood-connection',
                  sticker: 'oyster',
                  anim: '',
                  origin: 'top-right'
                },
                {
                  xPos: 570,
                  yPos: 360,
                  image: 'carbon-volcano-remnants',
                  sticker: '',
                  anim: '',
                  origin: 'right'
                },
                {
                  xPos: 1280,
                  yPos: 620,
                  image: '',
                  sticker: 'wind-turbine',
                  anim: '',
                  origin: 'top-right'
                },
                {
                  xPos: 825,
                  yPos: 460,
                  image: 'carbon-forests-store-carbon',
                  sticker: 'redwood',
                  anim: '',
                  origin: 'top-left'
                }
              ]
            }
          ]
        },
        { // system 2
          arrSections: [
            {
              arrPopups: []
            },
            {
              arrPopups: [
                {
                  xPos: 1150,
                  yPos: 780,
                  image: '',
                  sticker: '',
                  anim: 'fog-california-current',
                  origin: 'left'
                },
                {
                  xPos: 800,
                  yPos: 380,
                  image: '',
                  sticker: '',
                  anim: 'fog-valley-vacuum',
                  origin: 'bottom-right'
                },
                {
                  xPos: 540,
                  yPos: 360,
                  image: 'fog-fog-blanket',
                  sticker: '',
                  anim: 'fog-fog-blanket',
                  origin: 'bottom-left'
                },
                {
                  xPos: 700,
                  yPos: 345,
                  image: 'fog-water-in-the-air',
                  sticker: '',
                  anim: '',
                  origin: 'bottom-left'
                },
                {
                  xPos: 730,
                  yPos: 720,
                  image: '',
                  sticker: '',
                  anim: 'fog-ephemeral-fog',
                  origin: 'top-left'
                },
                {
                  xPos: 860,
                  yPos: 700,
                  image: 'fog-coastal-contours',
                  sticker: '',
                  anim: 'fog-fantastic-fog-flows',
                  origin: 'top-right'
                },
                {
                  xPos: 1050,
                  yPos: 390,
                  image: 'fog-fantastic-fog-flows',
                  sticker: '',
                  anim: 'fog-coastal-contours',
                  origin: 'bottom-right'
                }
              ]
            },
            {
              arrPopups: [
                {
                  xPos: 820,
                  yPos: 310,
                  image: 'fog-drink-from-the-sea',
                  sticker: 'redwood-fog',
                  anim: '',
                  origin: 'bottom-left'
                },
                {
                  xPos: 980,
                  yPos: 560,
                  image: 'fog-fog-drip',
                  sticker: '',
                  anim: '',
                  origin: 'top-left'
                },
                {
                  xPos: 1020,
                  yPos: 340,
                  image: 'fog-watershed-refill',
                  sticker: '',
                  anim: 'fog-watershed-refill',
                  origin: 'bottom-right'
                },
                {
                  xPos: 860,
                  yPos: 610,
                  image: 'fog-chardonnay-loves-fog',
                  sticker: 'wine',
                  anim: '',
                  origin: 'top-right'
                },
                {
                  xPos: 950,
                  yPos: 665,
                  image: 'fog-field-of-fog',
                  sticker: '',
                  anim: '',
                  origin: 'top-right'
                },
                {
                  xPos: 680,
                  yPos: 670,
                  image: '',
                  sticker: '',
                  anim: 'fog-navigating-fog',
                  origin: 'top-left'
                }
              ]
            }
          ]
        }
      ]

    }

  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.props.data) {

      // let's get array of section identifiers for later
      // filtering of popups for current section
      var arrSectionHeaderIdentifiers = []

      if ((prevProps.currentSection !== this.props.currentSection) ||
      (prevProps.data !== this.props.data)) {

        this.props.data.forEach(function(item) {

          if (item.sectionHeaderEnglish !== "") {
            var arrSection = item.sectionHeaderEnglish

            var jsonSection = JSON.stringify(arrSection)
            var jsonSectionData = JSON.stringify(arrSectionHeaderIdentifiers)
            var jsonTestSection = jsonSectionData.indexOf(jsonSection)
            if (jsonTestSection === -1) {
              // push unique section identifier (by english header) since
              // there are multiple array members for same sections
              arrSectionHeaderIdentifiers.push(arrSection)
            }

          }

        })

        // now let's get those popup text bits
        var arrSectionPopupHeaders = []
        var arrSectionPopupDescriptions = []
        var _this = this

        this.props.data.forEach(function(item) {

          var id = arrSectionHeaderIdentifiers[_this.props.currentSection]

          if (item.sectionHeaderEnglish === id) {

            if (item.popupHeaderEnglish !== '') {

              var arrPopupHeaders = [
                item.popupHeaderEnglish,
                item.popupHeaderSpanish,
                item.popupHeaderChinese,
                item.popupHeaderFilipino
              ]
              arrSectionPopupHeaders.push(arrPopupHeaders)

              var arrPopupDescriptions = [
                item.popupDescriptionEnglish,
                item.popupDescriptionSpanish,
                item.popupDescriptionChinese,
                item.popupDescriptionFilipino
              ]
              arrSectionPopupDescriptions.push(arrPopupDescriptions)

            }

          }

        })

        var arrJoin = []
        for (var i = 0; i < arrSectionPopupHeaders.length; i++) {
          arrJoin.push([arrSectionPopupHeaders[i], arrSectionPopupDescriptions[i]]);
        }

        this.setState({
          dataSectionPopupText: arrJoin,
          dataSectionPopupHeader: arrSectionPopupHeaders,
          dataSectionPopupDescription: arrSectionPopupDescriptions
        })

      }
    }
  }

  componentWillReceiveProps(nextProps) {}

  render() {

    var _this = this
    const rows = []

    if (this.state.dataSectionPopupHeader) {
      //let i = 0
      this.state.dataSectionPopupText.forEach(function(item, i) {
        var markupHeader = {__html: item[0][_this.props.language]}
        var desc = item[1][_this.props.language]
        desc = desc.replace(/<\/?a[^>]*>/g, "")
        var markupDescription = {__html: desc}
        var cpopx = ''
        var cpopy = ''
        var origin = ''
        var sticker = ''
        var anim = ''
        var image = ''

        if (_this.state.arrSystems[_this.props.system].arrSections[_this.props.currentSection].arrPopups[i]) {
          cpopx = _this.state.arrSystems[_this.props.system].arrSections[_this.props.currentSection].arrPopups[i]['xPos']
          cpopy = _this.state.arrSystems[_this.props.system].arrSections[_this.props.currentSection].arrPopups[i]['yPos']
          origin = _this.state.arrSystems[_this.props.system].arrSections[_this.props.currentSection].arrPopups[i]['origin']
          sticker = _this.state.arrSystems[_this.props.system].arrSections[_this.props.currentSection].arrPopups[i]['sticker']
          anim = _this.state.arrSystems[_this.props.system].arrSections[_this.props.currentSection].arrPopups[i]['anim']
          image = _this.state.arrSystems[_this.props.system].arrSections[_this.props.currentSection].arrPopups[i]['image']
        }

        var containerPopStyle = {
          left: cpopx,
          top: cpopy
        }

        var popStyle = {}
        if ((origin === 'top-left') || (origin === 'top-right')) {
          popStyle = {
            top: 0
          }
        } else if ((origin === 'bottom-left') || (origin === 'bottom-right')) {
          popStyle = {
            bottom: 0
          }
        } else if ((origin === 'left') || (origin === 'right')) {
          popStyle = {
            top: '50%',
            transform: 'translateY(-50%)'
          }
        }

        rows.push(
          <div className="container-popup-pop" key={i} style={containerPopStyle}>
            <div style={popStyle}
              className={(image !== '') ? 'popup-pop wide' : 'popup-pop'}
              >
              <div
                className={_this.props.activePop === i ? 'popup-pop-bubble' : 'popup-pop-bubble mask'}
                >
                <div
                  className={((_this.props.activePop === i) && (image !== '')) ? 'popup-pop-image' : 'popup-pop-image mask'}
                  id={'pop-image-' + image}
                />
                <div
                  className="popup-pop-bubble-btn-close"
                  onTouchEnd={(e) => _this.props.handlerClosePop(e)}
                  onClick={(e) => _this.props.handlerClosePop(e)}
                />
                <div
                  className="popup-pop-bubble-text-container"
                  >
                  <h1 dangerouslySetInnerHTML={markupHeader} />
                  <p dangerouslySetInnerHTML={markupDescription} />
                </div>
              </div>
              <div
                id={"popup-pop-button-top-"+i}
                className={_this.props.activePop === i ? "popup-pop-button-top " + origin + " selected" : "popup-pop-button-top " + origin}
                onTouchEnd={(e) => _this.props.handlerSelectPop(e, i, sticker, anim)}
                onClick={(e) => _this.props.handlerSelectPop(e, i, sticker, anim)}
              />
              <div
                id={"popup-pop-button-bottom"+i}
                className={_this.props.activePop === i ? "popup-pop-button-bottom " + origin + " selected" : "popup-pop-button-bottom " + origin}
              />
              <div
                className={_this.props.activePop === i ? '' : 'hide'}
              >
                <div className={origin === 'top-left' ? 'popup-pop-bubble-tail-top-left' : 'popup-pop-bubble-tail-top-left hide'} />
                <div className={origin === 'top-right' ? 'popup-pop-bubble-tail-top-right' : 'popup-pop-bubble-tail-top-right hide'} />
                <div className={origin === 'right' ? 'popup-pop-bubble-tail-right' : 'popup-pop-bubble-tail-right hide'} />
                <div className={origin === 'bottom-left' ? 'popup-pop-bubble-tail-bottom-left' : 'popup-pop-bubble-tail-bottom-left hide'} />
                <div className={origin === 'bottom-right' ? 'popup-pop-bubble-tail-bottom-right' : 'popup-pop-bubble-tail-bottom-right hide'} />
                <div className={origin === 'left' ? 'popup-pop-bubble-tail-left' : 'popup-pop-bubble-tail-left hide'} />
              </div>
            </div>
          </div>
        )
        //i++
      })
    }

    return (
      <div id="popup">
        {rows}
      </div>
    )

  }
}

export default Popup
