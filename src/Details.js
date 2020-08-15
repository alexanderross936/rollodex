import React from 'react';
class Details extends React.Component {


render(){
  return (
<div>


            <p>Gender: {this.props.gender}</p>
            <p>Location: {this.props.location}</p>
            <p>Timezone: {this.props.timezone}</p>
 
</div>
  );
}
  
}

export default Details;
