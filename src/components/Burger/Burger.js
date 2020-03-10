import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(k => {
            return [...Array(props.ingredients[k])].map((_,i) => {
                return <BurgerIngredient key={k+i} type={k} />
            });
            // let ret =[]
            // for(let i=0;i<props.ingredients[k];i++){
            //     ret[i]=<BurgerIngredient key = {k+i} type={k} />
            // }
            // return ret;
        });
    
    console.log(transformedIngredients);

    // transformedIngredients.sort((a,b)=>a[0].key-b[0].key);

    console.log(transformedIngredients);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>

    );
}

export default burger;