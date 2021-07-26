/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component } from 'react';
import SHOP_DATA, { props } from './ShopPage.interface';
import FoodCountry from '../../components/collection-country/FoodCountry.component';


class ShopPage extends Component <props , any>{
    constructor(props:any) {
        super(props)
    
        this.state = {
        collections :SHOP_DATA
        }
    }
    
    render() {
        const {collections} = this.state
        return (
           
            <div>
                {collections.map(({id ,...athecollectionprops} :any) =>
                
                <FoodCountry key={id} {...athecollectionprops}/>
                
                )}
            </div>
        );
    }
}

export default ShopPage;
