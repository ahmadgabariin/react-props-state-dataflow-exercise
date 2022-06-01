import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
                <div id="register">
                  <h3>Register</h3>
                  {this.props.reservations.map (reservtion => <div key={`${reservtion.time}`}>
                    {`${reservtion.day } @ ${reservtion.time}`}
                    </div> )}
                </div>
            )
  }
}

export default Register