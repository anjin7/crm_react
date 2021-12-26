import React from 'react';

class Customer extends React.Component {
  render(){
    return(
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    )    
  }
}


export default Customer;