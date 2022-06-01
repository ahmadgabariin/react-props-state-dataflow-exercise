import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return this.props.stores.map (store => <Item item = {store} shouldDiscount = {this.props.shouldDiscount} key = {store.price}/> )
    }
}

export default Home