/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-useless-constructor */

import React, { Component } from 'react';

interface mystate{
  // users:[]
  Food:[]
  
}
interface myprops{

}

class MorocoFood extends Component <any,mystate>{
  constructor(props:any ){
    super(props)
    this.state={
      Food:[]
    }
  }
  
// componentDidMount=async()=>{

//             try{
//     const FoodResponse= await fetch('https://api.yelp.com/v3/businesses/WavvLdfdP6g8aZTtbBQHTw')
//     const users = await FoodResponse.json()
//     const MyUser = this.setState({Food:users})
//         }catch(err){
//           console.log('I have error Here')
//     }
        
// }   

  render() {
    const {Food} = this.state
    return (
     
    <div>
     {/* { Food.map((Foods:any)=><div>
  Foods.name
     </div> */}
     {/* )} */}
     <h1>Hello Moroco</h1>
    </div>

    )
  }
}

export default MorocoFood;