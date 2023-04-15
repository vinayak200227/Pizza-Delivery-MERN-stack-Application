import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { FaPhoneAlt, FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col md={6}>
            <h1>Vinayak Pizza Shop</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium cupiditate ab ullam in. Explicabo omnis iusto nihil at
              architecto porro! Voluptatum pariatur nobis reiciendis, repellat
              enim nemo, maxime, dolor temporibus aliquam delectus nam. Aut, ut
              blanditiis! Nisi nostrum, incidunt neque quos placeat nobis unde
              sint! Iusto laudantium vel obcaecati optio officia ab praesentium
              autem unde placeat sit libero distinctio delectus natus aut,
              recusandae ut ratione porro aliquid dolore in assumenda
              exercitationem architecto nostrum. Nulla minima, officia possimus,
              doloribus quo molestias repellat temporibus maxime libero illo sed
              odit animi architecto repellendus alias. Qui sapiente alias est
              magni, nesciunt architecto consectetur quae neque. Officia,
              accusantium, accusamus, ex pariatur ducimus nam inventore commodi
              nostrum numquam possimus corporis asperiores dicta! Dolore quo
              accusamus mollitia ducimus a ipsam? Veniam labore repellendus
              maxime minima, tempore perspiciatis voluptatibus dolorem similique
              consequuntur nostrum, reprehenderit porro beatae corrupti velit
              iste reiciendis, quia illo neque ex possimus. Adipisci reiciendis,
              quisquam, in laboriosam impedit accusantium, officia ad quam enim
              facere suscipit exercitationem necessitatibus optio ipsum error
              repellat animi debitis repudiandae quibusdam nostrum iste
              recusandae beatae blanditiis? Ipsum inventore aliquam ad optio
              officiis quas dicta ratione veritatis esse ea, itaque deserunt
              asperiores, quis quasi libero molestias debitis! Molestias,
              officia! Veniam, sed quibusdam!
            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FaPhoneAlt />
                  </td>
                  <td>Phone</td>
                  <td>0123-456789</td>
                </tr>
                <tr>
                  <td>
                    <FaMobileAlt />
                  </td>
                  <td>Call</td>
                  <td>0139545789</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>Pizza@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
