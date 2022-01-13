import './App.css';
import React from 'react';

const quotes = [
  {
    id: 1,
    author: "Malala Yousafzai",
    quote: '"I raise up my voice - not so I can shout but so that those without a voice can by heard."'
  },
  {
    id: 2,
    author: "Frida Kahlo",
    quote: '"At the end of the day, we can endure much more than we think we can."'
  },
  {
    id: 3,
    author: "Serena Williams",
    quote: '"I really think a champion is defined not by their wins but by how they can recover when they fall."'
  },
  {
    id: 4,
    author: "Marie Curie",
    quote: '"Have no fear of perfection; you\'ll never reach it."'
  },
  {
    id: 5,
    author: "Oprah Winfrey",
    quote: '"Think like a queen. A queen if not afraid to fail. Failure is another stepping stone to greatness."'
  },
  {
    id: 6,
    author: "Indira Gandhi",
    quote: '"You cannot shake hands with a clenched fist."'
  },
  {
    id: 7,
    author: "Michelle Obama",
    quote: '"Don\'t ever make decisions based on fear. Make decisions based on hope and possibility. Make decisions based on what should happen, not what shouldn\'t."'
  },
  {
    id: 8,
    author: "Rosa Parks",
    quote: '"I have learned over the years that when one\'s mind is made up, this diminishes fear; knowing what must be done does away with fear."'
  },
  {
    id: 9,
    author: "Michelle Obama",
    quote: '"There\'s power in allowing yourself to be known and heard, in owning your unique story, in using your authentic voice."'
  },
  {
    id: 10,
    author: "Maya Angelou",
    quote: '"If you\'re always trying to be normal, you will never know how amazing you can be."'
  },
  {
    id: 11,
    author: "Ruth Bader Ginsburg",
    quote: '"Fight for the things that you care about, but do it in a way that will lead others to join you."'
  },
  {
    id: 12,
    author: "Yoko Ono",
    quote: '"We\'re all water from different rivers, that\'s why it\'s so easy to meet; we\'re all water in this vast, vast ocean, someday we\'ll evaporate together."'
  }
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      chosenQuote: "",
      chosenAuthor: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log(Math.ceil(Math.random() * (quotes.length)))
    quotes.map(item => (
      item.id === Math.ceil(Math.random() * (quotes.length)) ? this.setState({
        chosenQuote: item.quote,
        chosenAuthor: item.author
      }): null
    ))
  }
  componentDidMount() {
    this.handleClick()
  }
  render() {
    const tweetLink = "http://twitter.com/intent/tweet?text=" + encodeURIComponent(this.state.chosenQuote + ' ~ ' + this.state.chosenAuthor)
    return (
      <div id="quote-box">
        <h2 id="text">
          {this.state.chosenQuote}
        </h2>
        <h3 id="author">
          {this.state.chosenAuthor}
        </h3>
        <button id="new-quote" onClick={this.handleClick}><i className="fas fa-comment"></i> New quote</button>
        <a id="tweet-quote" href={tweetLink} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i> Tweet this</a>
      </div>
    );
  }
}

export default App;
