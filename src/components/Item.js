import React, { Component } from 'react';

class Item extends Component {
    render() {
        let price = this.props.item.price
        let priceAfter = this.props.shouldDiscount ? price * (1 - this.props.item.discount) : price
        return (
            <div>{` ${this.props.item.item} : $${priceAfter} `}</div>
        )

    }
}

export default Item