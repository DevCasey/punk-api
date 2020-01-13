import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      beers: []
    }
  }

  componentDidMount() {
    this.fetchBeer();
  }

  fetchBeer() {
    fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON.results))
    .catch(error => console.log('parsing failed', error))
  }

  render() {
    return (  
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.fetchBeer}>Fetch Beer</button>
        </header>
      </div>
    )
  };
}

export default App;
