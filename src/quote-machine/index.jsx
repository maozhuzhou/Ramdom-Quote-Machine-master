import React from "react";
import "./style.css";
class RandomMachine extends React.Component {
  state = {
    text: "",
    author: ""
  }
  // constructor(props){
  //   super(props)
  //   this.state={
  //     text:"",
  //     author:""
  //   }
  //   this.handleClick=this.handleClick.bind(this)
  // }
  fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data =>
        this.setState({
          text: data.content,
          author: data.author
        })
      );
  };

  componentDidMount() {
    this.fetchQuote();
  }


  handleClick = () => {
    this.fetchQuote();
  };

  render() {
    let author = this.state.author;
    let text = this.state.text;
    return (
      <div id="quote-box">
        <p id="text">"{text}"</p>
        <h3 id="author">{author}</h3>
        <button onClick={this.handleClick} id="new-quote">New Quote</button>
        <a href={`https://www.twitter.com/intent/tweet?text="${text}" ${author}`} id="tweet-quote">Tweet Quote</a>
      </div>
    )
  }
}

export default RandomMachine;