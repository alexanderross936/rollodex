import React from 'react';
import axios from 'axios';
import People from './People';
class App extends React.Component {

  state = {
    data: []
  }


  componentDidMount = () => {
    axios.get('https://randomuser.me/api?results=25')
    .then(res => {
  this.setState({
    data: res.data.results
  } )
  console.log(this.state);
      })
  
    }
render(){
  return (

<div>
{this.state.data.map((person) => {

   return <People name={person.name} picture={person.picture.thumbnail} gender={person.gender} location={person.location.country}
   timezone={person.location.timezone.description}
    />
  

   
  
}
)
}
    
  </div>
  )
}}

export default App;
