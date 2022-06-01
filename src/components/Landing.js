import React, { Component } from 'react';

class Landing extends Component {
    /* your code here */


    render() {
        let hottest = this.props.stores.find(store => store.hottest) 
        return (
            <div>{`Welcome ${this.props.user}, The hottest item is ${hottest.item} for $${hottest.price}`}</div>
        )

    }
}

export default Landing