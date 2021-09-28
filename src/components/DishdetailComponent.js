import React, { Fragment } from "react";
import { CardBody, Card, CardImg, List, CardTitle, CardText } from "reactstrap";

  const RenderDish = ({dish}) => {
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

  const RenderComments = ({dish}) => {
    const comments =
      dish.comments !== null
        ? dish.comments.map((comment) => {
            return (
              <li>
                <p>{comment.comment}</p>
                <p>
                  --{comment.author} ,
                  {new Intl.DateTimeFormat("en-IN", {
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

  const DishDetail = ({dish}) => {
    return (
      <Fragment>
        {dish !== null && dish !== undefined ? (
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                 <RenderDish dish={dish}/>
              </div>
              <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul type="unstyled">
                   <RenderComments dish={dish}/>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </Fragment>
    );
  }

export default DishDetail;
