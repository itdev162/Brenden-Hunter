import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

<<<<<<< HEAD
=======

>>>>>>> 1f27f06582abe9bd5e4cfe77af508031ba40714b
class App extends React.Component {
  state = {
    values: []
  }

<<<<<<< HEAD
  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
    .then((response) => {
=======
  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
    .then((response) =>{
>>>>>>> 1f27f06582abe9bd5e4cfe77af508031ba40714b
      this.setState({
        values: response.data
      })
    })
<<<<<<< HEAD
    .catch((error) =>{
=======
    .catch((error) => {
>>>>>>> 1f27f06582abe9bd5e4cfe77af508031ba40714b
      console.error(`Error fetching data: ${error}`);
    })
  }
  render(){
<<<<<<< HEAD
    return (
      <div className="App">
      <header className="App-header">
        BlogBox
      </header>
      {this.state.values.map((value: any) => <div key={value}>{value}</div>)}
      </div>
  );
}
}
=======
  return (
    <div className="App">
      <header className="App-header">
        BlogBox
        </header>
        {this.state.values.map((value: any) => <div key={value}>{value}</div>)}
        </div>
  );
  }
}

>>>>>>> 1f27f06582abe9bd5e4cfe77af508031ba40714b
export default App;
