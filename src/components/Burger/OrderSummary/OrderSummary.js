import React, { Component } from 'react';

import Auxi from '../../../hoc/Auxi/Auxi'
import Button from '../../UI/Button/Button'
class OrderSummary extends Component {

    componentWillUpdate () {
        console.log('Order Summary Will Update');
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(k => {
            return (
                <li key={k}>
                    <span style={{textTransform: "capitalize"}}>{k}</span>: {this.props.ingredients[k]}
                </li>
            )
        });
        return (
            <Auxi>
                <h3>Your Order</h3>
                <p>A Delicious Burger With the Following Ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price:</strong>{this.props.price.toFixed(2)}</p>
                <p>Contunue to Checkout</p>
                <Button btnType = "Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button bthType = "Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Auxi>
        )
    }

}

export default OrderSummary;