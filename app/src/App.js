import React, { Component } from "react";
import "./App.css";
import Upload from "./componentes/Upload";
import Showpdf from "./componentes/Showpdf";

class App extends Component {
  constructor(props){
    super();
    this.state = {
        setPage : 0
    }
  }

  changePage = (numberPage)=>{
    this.setState({setPage: numberPage})
  }

  render() {
    let display = ( <Upload changePage = {this.changePage.bind(this, 1)}  />)

    if(this.state.setPage==1){
      display = ( <Showpdf />)
    }

    return (
      <div className="App">
        <div className="Card">
         {display}
        </div>
      </div>
    );
  }
}

export default App;