import React, { Component } from "react";
import {
  CardBody,
  Card,
  CardImg,
  List,
  CardTitle,
  CardText,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish() {
    const dish = this.props.dish;
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(){
    const dish = this.props.dish;
    const comments =
      dish.comments !== null
        ? dish.comments.map((comment) => {
            return (
              <li >
                <p>{comment.comment}</p>
                <p>
                  --{comment.date} {comment.author}
                </p>
              </li>
            );
          })
        : "";
    return comments;
  }

  render() {
    return (
      <>
        {this.props.dish !== null ? (
          <div className="row">
            <div className="col-12 col-md-5 m-1">{this.renderDish()}</div>
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <List type="unstyled">
                {this.renderComments()}
                </List>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default DishDetail;
