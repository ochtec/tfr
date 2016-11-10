import React from 'react'
import TFR from '../components/TFR'
import { getSoapResponse } from '../helpers/poll'

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
  }
}

var TFRContainer = React.createClass({

  getInitialState() {
    return {
      activeNotam: '',
      notams: [
        { name: 'TFR1',
          notamText : '<some random bunch of text and xml brackets>',
          notamId : '',
          status: 'pending',
        },
        { name: 'TFR2',
          notamText : '<this one is kewl>',
          notamId : '',
          status: 'pending',
        },
      ],
      isModalOpen: true,
    }
  },
  handleClick(e) {
    e.stopPropagation()
    let newNotamArray = this.state.notams
    newNotamArray.find(x => x.name === e.target.value).status = 'submitted'
    this.setState({
      notams: newNotamArray
    })
  },
  pollNotam() {
    console.log('test')
    getSoapResponse()
  },
  render() {
    //console.log(this.state.notams)
    return (
      <div>
          <h1 style={styles.header}>{'TFR / AIXM Test'}</h1>
        <div style={styles.container}>
          {this.state.notams.map(result => {
            return (
              <TFR
                key={result.name}
                tfr={result}
                notamId={result.notamId}
                handleClick={this.handleClick}
                status={result.status}
                pollNotam={this.pollNotam}
              />
            )
          })}
         </div>
      </div>
    )
  }
})

export default TFRContainer
