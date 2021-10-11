import React, { Fragment, Component } from "react";
import {
  CardBody,
  Card,
  CardImg,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Row,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

const RenderDish = ({ dish }) => {
  return (
    <Card>
      <CardImg top src={baseUrl + dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
};

const RenderComments = ({ comments, addComment, dishId }) => {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
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
          })}
        </ul>
        <CommentForm dishId={dishId} addComment={addComment} />
      </div>
    );
  } else {
    <div>
      <CommentForm dishId={dishId} addComment={addComment} />
    </div>;
  }
};

const DishDetail = ({ dish, comments, addComment, isLoading, errMess }) => {
  return (
    <Fragment>
      {isLoading ? (
        <LoadingWrapper />
      ) : errMess ? (
        <LoadingError errMess={errMess} />
      ) : (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Menu</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish={dish} />
            </div>
            <RenderComments
              comments={comments}
              addComment={addComment}
              dishId={dish.id}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

const LoadingWrapper = () => {
  return (
    <div className="container">
      <div className="row">
        <Loading />
      </div>
    </div>
  );
};

const LoadingError = ({ errMess }) => {
  return (
    <div className="container">
      <div className="row">
        <h4>{errMess}</h4>
      </div>
    </div>
  );
};

const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const required = (val) => val && val.length;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleSubmit(values) {
    //  console.log("Current State is: " + JSON.stringify(values));
    // alert("Current State is: " + JSON.stringify(values));
    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );

    // event.preventDefault();
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.toggleModal()}>
          <i class="fa fa-edit fa-lg"></i> Submit Comment
        </Button>
        <Modal isOpen={this.state.modal} toggle={() => this.toggleModal()}>
          <ModalHeader toggle={() => this.toggleModal()}>
            Submit Comment
          </ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating">Rating</Label>
              </Row>
              <Row className="form-group">
                <Control.select
                  model=".rating"
                  name="rating"
                  className="form-control"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author">Your Name</Label>
              </Row>
              <Row className="form-group">
                <Control.text
                  model=".author"
                  id="author"
                  author="author"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment">Comment</Label>
              </Row>
              <Row className="form-group">
                <Control.textarea
                  model=".comment"
                  id="comment"
                  name="comment"
                  className="form-control"
                />
              </Row>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default DishDetail;
