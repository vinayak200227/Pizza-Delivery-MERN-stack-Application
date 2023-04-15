import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
// Redux
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [sauce, setSauce] = useState("None");
  const [cheese, setCheese] = useState("None");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient, sauce, cheese));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card
        style={{ width: "24rem", height: "24rem", margin: "30px 10px 20px" }}
      >
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ cursor: "pointer" }}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={3}>
                <h6>Varients</h6>
                <select
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {pizza.varients.map((varient) => (
                    <option>{varient}</option>
                  ))}
                </select>
              </Col>
              <Col md={3}>
                <h6>Sauces</h6>
                <select
                  value={sauce}
                  onChange={(e) => setSauce(e.target.value)}
                >
                  {pizza.sauces.map((sauce) => (
                    <option>{sauce}</option>
                  ))}
                </select>
              </Col>
              <Col md={3}>
                <h6>Cheese</h6>
                <select
                  value={cheese}
                  onChange={(e) => setCheese(e.target.value)}
                >
                  {pizza.cheeses.map((cheese) => (
                    <option>{cheese}</option>
                  ))}
                </select>
              </Col>
              <Col md={3}>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>
              Price : ₹{" "}
              {(pizza.prices[0][varient] +
                pizza.sauces_prices[0][sauce] +
                pizza.chees_prices[0][cheese]) *
                quantity}
              /-.
            </Col>
            <Col md={6}>
              <Button onClick={addToCartHandler} variant="primary">
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* modal */}
      {/* for displaying pop up on clicking on image */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img variant="top" src={pizza.image} />
          <h5>Description : </h5>
          <h6>{pizza.description}</h6>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pizza;
