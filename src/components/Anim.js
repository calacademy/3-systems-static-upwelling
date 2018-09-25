import React, { Component } from 'react'
import '../style/Anim.css'

class Anim extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeAnim: '',

      arrSystems: [
        { // system 0
          arrSections: [
            {
              arrAnims: [
                {
                  name: 'upwelling-play-all',
                  filebase: 'upwelling_v16_playAll_',
                  frames: 792
                }
              ]
            },
            {
              arrAnims: [
                {
                  name: 'upwelling-california-current',
                  filebase: 'upwelling_v16_caCurrent_',
                  frames: 301
                },
                {
                  name: 'upwelling-prevailing-winds',
                  filebase: 'upwelling_v16_prevailingWinds_',
                  frames: 301
                },
                {
                  name: 'upwelling-nutrient-rich-water',
                  filebase: 'upwelling_v16_nutrientUpwelling_',
                  frames: 411
                },
                {
                  name: 'upwelling-plankton-bloom',
                  filebase: 'upwelling_v16_planktonBloom_',
                  frames: 301
                }
              ]
            },
            {
              arrAnims: [
                {
                  name: 'upwelling-sea-of-change',
                  filebase: 'upwelling_v18_seaOfChange_',
                  frames: 301
                },
                {
                  name: 'upwelling-toxic-bloom',
                  filebase: 'upwelling_v16_toxicBloom_',
                  frames: 361
                }
              ]
            }
          ]
        },
        { // system 1
          arrSections: [
            {
              arrAnims: [
                {
                  name: 'carbon-play-all',
                  filebase: 'carbon_v18_playAll_',
                  frames: 1007
                }
              ]
            },
            {
              arrAnims: [
                {},
                {
                  name: 'carbon-san-andreas-fault',
                  filebase: 'carbon_v18_SanAndreasFault_',
                  frames: 301
                },
                {
                  name: 'carbon-volcanoes-spew-carbon',
                  filebase: 'carbon_v18_volcanoesSpewCarbon_',
                  frames: 301
                },
                {
                  name: 'carbon-carbon-returns-to-rock',
                  filebase: 'carbon_v18_carbonReturnsToRock_',
                  frames: 400
                },
                {
                  name: 'carbon-oil-reservoirs',
                  filebase: 'carbon_v18_oilReservoirs_',
                  frames: 302
                }
              ]
            },
            {
              arrAnims: []
            }
          ]
        },
        { // system 2
          arrSections: [
            {
              arrAnims: [
                {
                  name: 'fog-play-all',
                  filebase: 'fog_v18_playAll_',
                  frames: 996
                }
              ]
            },
            {
              arrAnims: [
                {
                  name: 'fog-california-current',
                  filebase: 'fog_v16_caCurrent_',
                  frames: 301
                },
                {
                  name: 'fog-valley-vacuum',
                  filebase: 'fog_v18_valleyVacuum_',
                  frames: 299
                },
                {
                  name: 'fog-fog-blanket',
                  filebase: 'fog_v16_fogBlanket_',
                  frames: 446
                },
                {},
                {
                  name: 'fog-ephemeral-fog',
                  filebase: 'fog_v18_ephemeralFog_',
                  frames: 344
                },
                {
                  name: 'fog-fantastic-fog-flows',
                  filebase: 'fog_v16_fantasticFogFlows_',
                  frames: 301
                },
                {
                  name: 'fog-coastal-contours',
                  filebase: 'fog_v18_coastalContours_',
                  frames: 328
                }
              ]
            },
            {
              arrAnims: [
                {},
                {},
                {
                  name: 'fog-watershed-refill',
                  filebase: 'fog_v16_watershedRefill_',
                  frames: 301
                },
                {},
                {},
                {
                  name: 'fog-navigating-fog',
                  filebase: 'fog_v18_navigatingFog_',
                  frames: 313
                }
              ]
            }
          ]
        }
      ]

    }
  }

  componentDidMount() {

    var anim = this.state.arrSystems[this.props.system].arrSections[this.props.currentSection].arrAnims[0]
    if (anim['name']) {
      this.setState({
        activeAnim: anim['name']
      })
    }

  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillReceiveProps(nextProps) {

    var anim

    if ((nextProps.activeAnim !== this.props.activeAnim) || (nextProps.activeSticker === ''))  {
      this.setState({
        activeAnim: nextProps.activeAnim
      })
    }

    if (nextProps.system !== this.props.system) {
      anim = this.state.arrSystems[nextProps.system].arrSections[this.props.currentSection].arrAnims[0]
      if (anim['name']) {
        this.setState({
          activeAnim: anim['name']
        })
      }
    }

    if (nextProps.currentSection !== this.props.currentSection) {
      // on 1st setcion load make first anim active
      if (nextProps.currentSection === 0) {
        anim = this.state.arrSystems[this.props.system].arrSections[nextProps.currentSection].arrAnims[0]
        if (anim['name']) {
          this.setState({
            activeAnim: anim['name']
          })
        }
      } else {
        this.setState({
          activeAnim: ''
        })
      }

    }

  }

  render() {

    var _this = this
    const rows = []

    var pop = 0
    if (this.props.activePop) {
      pop = this.props.activePop
    }

    var anims =  this.state.arrSystems[this.props.system].arrSections[this.props.currentSection].arrAnims

    anims.forEach(function(anim, i) {
      var images = []
      if (i === pop) {
        for (var j = 0; j < anim['frames']; j++) {
          var fiver = ('0000' + j).slice(-5)
          images.push(
            <img key={j} src={"/animation/" + anim['name']+"/" + anim['filebase'] + "" + fiver + ".png"} alt="" />
          )
        }
      }

      rows.push(
        <div key={i} id="container-images" className={anim['name'] === _this.state.activeAnim ? 'play-' + anim['name'] : ''}>
          {images}
        </div>
      )

    })

    return (
      <div id="anim">
        {rows}
      </div>
    )

  }
}

export default Anim
