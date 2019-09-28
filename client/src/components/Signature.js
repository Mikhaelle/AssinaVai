import React, { Component } from 'react'

import SignaturePad from './Signatureprops.js'

import styles from './signature.css'

class Signature extends Component {
  state = { trimmedDataURL: null }

  sigPad = {}

  clear = () => {
    this.sigPad.clear()
  }

  trim = () => {
    this.setState({ trimmedDataURL: this.sigPad.getTrimmedCanvas()
      .toDataURL('image/png') })
  }

  render () {
    const { trimmedDataURL } = this.state
    return (
    <div  className="row">
    <div className= "container">
      <div className="sigContainer">
      <SignaturePad canvasProps={{ className: "sigPad" }}
          ref={(ref) => { this.sigPad = ref }} />
      </div>
      <div className='text-center mt-1'>
        <button className='btn btn-primary center-block ' onClick={this.clear}>
          Clear
        </button>
        <button className='btn btn-primary  center-block mt-0' onClick={this.trim}>
          Upload signature
        </button>
      </div>
      {trimmedDataURL
        ? <img className={styles.sigImage}
          src={trimmedDataURL} />
        : null}
    </div>
    </div>
    )
  }
}

export default Signature