/* eslint-disable array-callback-return */
import React from 'react';
import { Myprops, Mystate } from './FoodCountry.interface';
import CollectionItem from '../collection-item/collectionItem.component';
import "./FoodCountry.component.style.scss"
const FoodCountry:React.FC <Myprops & Mystate > = ({title ,items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title" >{title}</h1>
            <div className="preview">
             {items
              .filter((item: any,inx: number)=> inx < 4)
              .map(({id,...atheitemprops}:any) => (
                <CollectionItem key={id}{...atheitemprops} />
                ))}
            </div>
        </div>
    );
}

export default FoodCountry;
