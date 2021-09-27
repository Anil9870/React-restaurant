import React, { Component } from "react";
import {
  CardBody,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardHeader,
  CardText,
} from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
       selectedDish: null
    }
  }

  updateSelectedDish(dish){
    this.setState({
        selectedDish: dish
    });
  }

  renderSelectedDish(dish){
    if(dish != null){
       return (
       <div>
          <Card>
             <CardImg width="100%" src={dish.image} alt={dish.name}/>
             <CardBody>
                 <CardTitle>{dish.name}</CardTitle>
                 <CardText>{dish.description}</CardText>
             </CardBody>
          </Card>
       </div>);
    } else{
      return (
        <div>

        </div>
      );
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick = { () => this.updateSelectedDish(dish) }>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">{this.renderSelectedDish(this.state.selectedDish)}</div>
      </div>
    );
  }
}

export default Menu;
