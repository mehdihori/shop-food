/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
// import '../directory/'
import './menu-item.component.interface'
import { Myprops } from './menu-item.component.interface';
import './menu-item.components.style.scss'
import { BrowserRouter, Route, Link, RouteComponentProps } from "react-router-dom";      
import { withRouter } from 'react-router-dom';


// import "/my-shop/src/components/menu-item/menu-item.components.style.scss"


const MenuItem:React.FC <Myprops & RouteComponentProps>= ({title,imageUrl,size,history,linkUrl,match}) => 
<div style=
{{
    backgroundImage:`url(${imageUrl})`
    
}} 
className= {`${size} menu-item`} onClick={() =>  

history.push(`${match.url}${linkUrl}`)


} >
    <div className="background-image"
     style=
     {{
         backgroundImage:`url(${imageUrl})`
         
     }}
    />
    <div className="content">
        <h1 className="title"> {title}</h1>
        <span className="subtitle"> EAT NOW PAY LATER </span><br />
        <span  className="Shop"> SHOP NOW </span>
    </div>
</div>

export default withRouter(MenuItem);
