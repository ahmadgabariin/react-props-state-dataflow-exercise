import React, { Component } from 'react';


class SubCompany extends Component {
  render() {
    return (
      <h4>{`Company : ${this.props.name} -  Revenue :${this.props.revenue}`}</h4>
    )

  }
}

export default SubCompany