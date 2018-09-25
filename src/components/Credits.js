import React, {Component} from 'react'
import '../style/Credits.css'

class Credits extends Component {
  constructor(props) {
    super(props)
    this.state = {
      credits: null
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.credits !== this.state.credits) {
      var credits = nextProps.dataCredits
      this.setState({
        credits: credits
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.props.display === 'credits') && (prevProps.display !== 'credits')) {
      var scroll = document.getElementById('credits-scroll-container')
      scroll.scrollTop = 0
    }
  }

  render() {

    var language = this.props.language
    var lang = ''
    switch (language) {
      case 0:
        lang = 'en'
        break
      case 1:
        lang = 'es'
        break
      case 2:
        lang = 'cn'
        break
      case 3:
        lang = 'tl'
        break
      default:
        lang = 'en'
        break
    }

    const rows = []

    if (this.state.credits) {
      var credits = this.state.credits
      if (credits) {
        credits.forEach(function(cred, i) {

          var header = ''
          var desc = ''
          var markupDesc = ''

          if (cred['header_'+lang]) {
            header = cred['header_'+lang]
          }
          if (cred[lang]) {
            desc = cred[lang]
            desc = desc.replace(/<\/?a[^>]*>/g, "")
            markupDesc = {__html: desc}
          }

          rows.push(
            <li
              key={i}
              >
                <h2>{header}</h2>
                <p dangerouslySetInnerHTML={markupDesc} />
              </li>
          )
        })
      }

    }

    return(
      <div id="credits">
        <button
          onTouchEnd={(e) => this.props.handlerCloseCredits(e)}
          onClick={(e) => this.props.handlerCloseCredits(e)}
        />
        <div id="credits-scroll-container">
          <h1>Credits</h1>
          <ul>
            {rows}
          </ul>
          <div id="credits-mask" />
        </div>
      </div>
    )
  }
}

export default Credits
