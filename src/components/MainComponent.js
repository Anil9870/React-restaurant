import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import Menu from "./Menu";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishdetailComponent";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  updateSelectedDish(dishId) {
    this.setState({
      selectedDish: dishId,
    });
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">REACT STRAP</NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.updateSelectedDish(dishId)}
        />
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
      </div>
    );
  }
}

export default Main;
