import React, { Component, Fragment } from "react";
import { CardBody, Card, CardImg, List, CardTitle, CardText } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.dish);
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

  renderComments() {
    const dish = this.props.dish;
    const comments =
      dish.comments !== null
        ? dish.comments.map((comment) => {
            return (
              <li>
                <p>{comment.comment}</p>
                <p>
                  --{comment.author} ,
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            );
          })
        : "";
    return comments;
  }

  render() {
    return (
      <Fragment>
        {(this.props.dish !== null && this.props.dish !== undefined)? (
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5 m-1">{this.renderDish()}</div>
              <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul type="unstyled">{this.renderComments()}</ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

export default DishDetail;
