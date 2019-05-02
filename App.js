import React, {Component} from 'react';
import './App.css';


class App extends Component {

 

   constructor() {
    super();
    this.state = {
      text: '',
      mood: ''
    };
  }


   userClick = (e) => {
    e.preventDefault();


    fetch(
      "https://gateway-lon.watsonplatform.net/tone-analyzer/api/v3/tone?version=2019-05-01&text=" + this.state.text,
      {
        method: "GET",
        headers: {

          "Authorization":"Basic " + btoa("apikey:zp1wfmKgo5ljavROfz6lbV2637G0L1dmCWgUl1-FnPCc")
        },
        
      }
    )
      .then(response => response.json())
      .then(json => this.setState({mood: json.document_tone.tones[0].tone_name}));
   }
  
  updateText = (event) => {

    this.setState({
      text: event.target.value
    });
  }

  
  render(){
  return (
    <div className="App">
    <h1>Welcome to text emoption App</h1>
    <h2>You can enter a text and determine your emotion level</h2>
    <form className = "form">
    <textarea onChange = {this.updateText} rows = "10" cols = "100"></textarea>
    <br/>
    <button  onClick = {this.userClick}>My Emotion is</button>
    <input  type = "input" placeholder = "Text Mood" value = {this.state.mood} readOnly></input>
    </form>

    </div>
  );
  }
}

export default App;
