import React, { useEffect } from "react";
// import AllPizza from '../pizza-data';   // to get data from pizza-data json
import { useDispatch, useSelector } from "react-redux";
// to send request from frontend using redux useDispatch is used
// to get data from state of a redux useSelector is used
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/pizzaAction";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filters from "../components/Filters";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <Container>
        {loading ? (
          // <h1>Loading...</h1>
          <Loader />
        ) : error ? (
          <Error>Error while fetching pizzas {error}</Error>
        ) : (
          // <h1>Error while fetching pizzas</h1>
          // here data is coming from database
          <Row>
            <Filters />
            {pizzas.map((pizza) => (
              <Col md={4}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
        {/* <Row>
           {AllPizza.map(pizza => (
                <Col md = {4}>
                    <Pizza pizza={pizza} />
                </Col>
           ))} 
        </Row> */}
      </Container>
    </>
  );
};

export default HomeScreen;
