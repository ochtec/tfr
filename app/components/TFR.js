import React, { PropTypes } from 'react'

TFR.propTypes = {
  tfr: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default function TFR (props) {
  // console.log(tfr)
  return (
    <div>
      {props.tfr.status === 'pending' ?
      <button onClick={props.handleClick} value={props.tfr.name}>{props.tfr.name}{'-----id: '}{props.tfr.notamId}</button>
      : <p onClick={props.pollNotam} value={props.tfr.name}>{props.tfr.name}{' is '}{props.tfr.status}{' with a NOTAM ID of '}{props.tfr.notamId}</p>}
    </div>
  )
}
