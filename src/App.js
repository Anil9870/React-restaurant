import React from 'react';
import {Navbar , NavbarBrand} from 'reactstrap';


const App = () => {
  return (
    <div className="App">
        <Navbar dark color="primary">
           <div className="container">
                <NavbarBrand href="/">REACT STRAP</NavbarBrand>
                <NavbarBrand href="/">REACT STRAP</NavbarBrand>
           </div> 
        </Navbar>
    </div>
  )
}



export default App
