import React from 'react';
import {Navbar , NavbarBrand} from 'reactstrap';

import NavBarMenu from './components/NavBarMenu';
import { DISHES } from './shared/dishes';


class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
         dishes: DISHES
      };
  }
  render(){

  return (
    <div className="App">
        <Navbar dark color="primary">
           <div className="container">
                <NavbarBrand href="/">REACT STRAP</NavbarBrand>
           </div> 
        </Navbar>
        <NavBarMenu dishes= {this.state.dishes}/>
    </div>
  )

  }
};



export default App
