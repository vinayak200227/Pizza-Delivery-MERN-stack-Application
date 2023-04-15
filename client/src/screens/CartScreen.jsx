import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import Checkout from "../components/Checkout";

function CartScreen() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0); // subtotal of items present in cart
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h1>My Cart</h1>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Col md={7}>
                    <h5>
                      {item.name}[{item.varient}]
                    </h5>
                    <p>
                      Sauces : [{item.sauce}] , Cheese : [{item.cheese}]
                    </p>
                    <h6>
                      Price : {item.quantity} X ({item.prices[0][item.varient]}{" "}
                      + {item.sauces_prices[0][item.sauce]} +{" "}
                      {item.chees_prices[0][item.cheese]}) = ₹ {item.price} /-.
                    </h6>
                    <h6>
                      Quantity :&nbsp;
                      <FaMinusCircle
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            // decrement quantity
                            addToCart(
                              item,
                              item.quantity - 1,
                              item.varient,
                              item.sauce,
                              item.cheese
                            )
                          );
                        }}
                      />
                      &nbsp;
                      {item.quantity}&nbsp;
                      <FaPlusCircle
                        className="text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            // increment quantity
                            addToCart(
                              item,
                              item.quantity + 1,
                              item.varient,
                              item.sauce,
                              item.cheese
                            )
                          );
                        }}
                      />
                    </h6>
                  </Col>
                  <Col md={5}>
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ width: "150px", height: "200pxs" }}
                    />
                    <FaTrash
                      className="text-danger"
                      style={{ cursor: "pointer", marginLeft: "20px" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item)); // delete from cart
                      }}
                    />
                  </Col>
                  <hr />
                </>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <h1>Payment Info</h1>
            <h4>Sub Total</h4>
            <h4>₹ {subTotal} /-.</h4>
            {/* <Button>Checkout</Button> */}
            <Checkout subTotal={subTotal} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CartScreen;
