import React from 'react'
import TFRContainer from '../containers/TFRContainer'
// var CityStateContainer = require('../containers/CityStateContainer');

var styles = {
  page: {
    // backgroundSize: 'stretch',
    // backgroundImage: 'url(app/images/pattern.svg)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  para: {
    color: 'black',
    fontSize: '30px'
  }
}
function Home () {
    return (
    <div style={styles.page}>
      <TFRContainer />
    </div>
  )
}

module.exports = Home
