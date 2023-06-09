import {Navbar, NavbarBrand} from 'reactstrap';
import React from 'react';
import Menu from './Components/menuComponents';
import { DISHES } from './shared/dishes';



class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
    return(
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    )
  }
    
}

export default App;
