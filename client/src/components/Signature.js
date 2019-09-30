import React, { Component } from 'react'

import SignaturePad from './Signatureprops.js'

import styles from './signature.css'

import * as jsPDF from 'jspdf'

class Signature extends Component {
  state = { trimmedDataURL: null , file2 :null}

  sigPad = {}

  clear = () => {
    this.sigPad.clear()
  }

  trim = () => {
    
    this.setState({ trimmedDataURL: this.sigPad.getTrimmedCanvas()
      .toDataURL('image/png') })
      const img2data = this.state.trimmedDataURL;
      const pdf = new jsPDF();
    pdf.addImage(img2data,'PNG', 10, 10);
    pdf.save("download.pdf");  
  }

  

  render () {
    
    console.log(this.props.setUploadedFile.filePath)
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
          Limpar
        </button>
        <button className='btn btn-primary  center-block mt-0' onClick={this.trim}>
          Assinar
        </button>
      </div>
      {trimmedDataURL
        ? 
          <div>
          <img className="sigImage"
          src={trimmedDataURL} />
          </div>
        : null}
    </div>
    </div>
    )
  }
}

export default Signature