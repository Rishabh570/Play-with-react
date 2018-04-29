import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      Backcolor: "white",
      currentColor: "",
      radius: "",
      currentBorder: "",
      font: "",
      currentFont: "",
      shadow: "",
      currentShadow: ""
    };
  }

  onInputChange = e => {
    this.setState({currentColor: e.target.value});
  }

  onBorderChange = e => {
    this.setState({currentBorder: e.target.value});
  }

  onFontChange = e => {
    this.setState({currentFont: e.target.value});
  }

  onShadowChange = e => {
    this.setState({currentShadow: e.target.value});
  }

  onClick = () => {
    let colorCopy = this.state.currentColor;
    this.setState({Backcolor: colorCopy, currentColor: ""});
  }

  onBorderClick = () => {
    let br = this.state.currentBorder;
    this.setState({radius: br, currentBorder: ""});
  }

  onFontClick = () => {
    let f = this.state.currentFont;
    this.setState({font: f, currentFont: ""});
  }

  onShadowClick = () => {
    let s = this.state.currentShadow;
    this.setState({shadow: s, currentShadow: ""});
  }


  render() {
    return (
      <div className="row App d-block mx-auto">
        <div className="row" style={{backgroundColor: "whitesmoke"}}>
        
          <div className="px-1 py-1 my-0 mx-auto">
            <input type='text' placeholder='Background Color' value={this.state.currentColor} onChange={this.onInputChange} />
            <button className="ml-1 btn btn-sm btn-outline-info" onClick={this.onClick}>Paint it!</button>
          </div>

          <div className="px-1 py-1 my-0 mx-auto">
            <input type='number' placeholder='Border Radius' value={this.state.currentBorder} onChange={this.onBorderChange} />
            <button className="ml-1 btn btn-sm btn-outline-info" onClick={this.onBorderClick}>Mould it!</button>
          </div>

          <div className="px-1 py-1 my-0 mx-auto">
            <input type='text' placeholder='Font Family ' value={this.state.currentFont} onChange={this.onFontChange} />
            <button className="ml-1 btn btn-sm btn-outline-info" onClick={this.onFontClick}>Type it!</button>
          </div>

          <div className="px-1 py-1 my-0 mx-auto">
            <input type='text' placeholder='Box Shadow' value={this.state.currentShadow} onChange={this.onShadowChange} />
            <button className="ml-1 btn btn-sm btn-outline-info" onClick={this.onShadowClick}>Shadow it!</button>
          </div>

        </div>
        

        <div className="px-5 py-5 mt-5 text-center" style={{backgroundColor: this.state.Backcolor, borderRadius: this.state.radius + 'em', fontFamily: this.state.font, boxShadow: this.state.shadow}}>
          <div>
            <p className="lead">This is some random content that will have to suffer the impacts of our newly gained React Power. Hahaha!!!</p>
          </div>
        </div>

      </div>

    );
  }
}

export default App;


