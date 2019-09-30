import React from 'react';
import { Container,  Grid } from 'semantic-ui-react';
import { Document, Page} from 'react-pdf';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
import Signature from './Signature';

class Showpdf extends React.Component {
  state = {
    filename:'Choose file',
    file: null,
    numPages: 0,
    pageNumber: 1,
    uploadPercentage: 0,
    message:null,
    uploadedFile : false,
    setUploadedFile :({})
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          const percent = parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
        this.setState({uploadPercentage:percent})
          

          // Clear percentage
          setTimeout(() => this.setState({uploadPercentage:0}), 10000);
        }
      });

      const { fileName, filePath } = res.data

      this.setState({setUploadedFile:{ fileName, filePath }})

      this.setState({uploadedFile:true})
      this.setState({message:'File Uploaded'})
    } catch (err) {
      if (err.response.status === 500) {
        this.setState({message:'There was a problem with the server'})
      } else {
        this.setState({message:err.response.data.msg})
      }
    }
  };

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0]
    });
    
    this.setState({
        filename: event.target.files[0].name
      });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  

  nextPage = () => {
    const currentPageNumber = this.state.pageNumber;
    let nextPageNumber;
    if (currentPageNumber + 1 > this.state.numPages) {
      nextPageNumber = 1;
    } else {
      nextPageNumber = currentPageNumber + 1;
    }
    this.setState({
      pageNumber: nextPageNumber
    });
  }
  render() {

    let mesg = null

    if(this.state.message!=null){
      mesg = <Message msg={this.state.message}/>
    }

    let up = false
    if(this.state.uploadedFile){
      up = ( 
      <div>
        <h1 className='text-center mt-5'>
        PDF Preview
        </h1>

      <div className='row mt-5 '>
         <Grid centered columns={2}>
          <Grid.Column textAlign="center" onClick={this.nextPage}>
            <Document file={this.state.file} 
                      onLoadSuccess={this.onDocumentLoadSuccess} >
              <Page pageNumber={this.state.pageNumber}>
             </Page>
            </Document>
            {this.state.file ? <p>Page {this.state.pageNumber} of {this.state.numPages}</p> : null}
          </Grid.Column>
        </Grid>   
      </div> 
      <Signature setUploadedFile = {this.state.setUploadedFile}></Signature>
      </div>
      )
    }

    return (
      <Container>
        <br />
        {mesg}
        <form onSubmit={this.onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={this.onFileChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {this.state.filename}
          </label>
        </div>

        <Progress percentage={this.state.uploadPercentage} />

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {up}
    </Container>
    );
}
};
export default Showpdf;