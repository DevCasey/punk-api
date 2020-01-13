import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => { return response.json()} )
      .then(json =>       { this.setState({beers: json})} )
      .then(console.log(this.state.beers))
      .catch(error => console.log('parsing failed', error))
  }



  // fetchBeer() {
  //   fetch('https://api.punkapi.com/v2/beers')
  //     .then((response) => { return response.json() })
  //     .then((response) => { console.log(response) })
  //     .catch(error => console.log('parsing failed', error))
  // }

  render() {
    return (  
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <button onClick={this.displayBeer}>Fetch Beer</button> 
          {/* <button onClick={this.}>Fetch Beer</button> */}
        </header>
      </div>
    )
  };
}

export default App;
