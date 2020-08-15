import React from 'react';
import axios from 'axios';
class People extends React.Component {

  state = {
    data: [],
    displayDetails: false
  }

  componentDidMount = () => {
    axios.get('https://randomuser.me/api?results=25')
    .then(res => {
  this.setState({
    data: res.data.results
  } )
      })
  
    }

  toggleDetails = () =>{
    this.setState({
      displayDetails: !this.state.displayDetails
    })
  }
render(){
  return (
<div>

<p>Name: {this.props.name.first}</p>
            <img src={this.props.picture} alt={this.props.name.first} />
             { this.state.displayDetails ? (
    <div>


    <p>Gender: {this.props.gender}</p>
    <p>Location: {this.props.location}</p>
    <p>Timezone: {this.props.timezone}</p> </div>)
    : (
      <div>
        <button onClick={this.toggleDetails}>Details</button>
        </div>
    )
    }
    
</div>
)
}
}
  


export default People;
