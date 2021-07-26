/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from 'react';
import {  Mystate } from './directory.interFace';
import DATA_WORD from './directory.interFace'; 
import MenuItem from '../menu-item/menu-item.components';

import '../directory/directory-style.scss';


class Directory extends Component <Mystate,any> {
    constructor(props:any){
        super(props)
    this.state ={
       sections: DATA_WORD
    }}
    render() {
        const {sections}=this.state
        return (
            <div className="directory-menu">
            {sections.map(({id ,...Athersections}:any) => 

             <MenuItem key={id} {...Athersections} />
            
            )}
            </div>
        );
    }
}

export default Directory;


