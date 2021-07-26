/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
// import './HomePage.component.style.scss'
import Directory from '../../components/directory/directory.component';
import './HomePage.component.style.scss'
import { BrowserRouter, Route, Link } from "react-router-dom";      
 
// import '../directory/directory.component.style'
// import MenuItem from '../../components/menu-item/menu-item.components';
interface mystate1{
  
}

const HomePage= () => {
    return (
        <div className="homepage">
            <Directory/>
            
      </div>
    );
}

export default HomePage;
