import React from "react"
import './App.css';
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Component from "./components/Componente";
import Componente from "./components/Componente";

function App() {
    return (
    <div className="App">
        <Container>
            <Card style={{ width: '60%' }}>
                <Row>
                    <Col md="8" className="input-class">
                        <InputGroup className="mb-3" id="input-city" >
                        <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="type a city..."
                        />
                        </InputGroup>
                    </Col>
                    <Col md="4" className="button-class">
                        <Button as="input" type="submit" value="Search" id="button" />
                    </Col>
                </Row>
                <Card.Body>
                    <Card.Title className="card-title">
                    Sydney NSW, Australia
                    </Card.Title>
                    <p className="day">Wednesday <span id="time">22:00</span></p>
                    <p className="type">Partly Cloudy</p>
                </Card.Body>
                <Row>
                    <Col md="6"className="number-temp">
                    <img id="icon"
                        src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png" alt="" />
                        <span id="numberTemp">19</span> <span className="grades"><a id="celsius" className="active"
                            href="#">°C</a>|<a id="fahrenheit" className="active" href="#">°F</a></span>
                    </Col>
                    <Col md="6" id="data">
                    <p id="humidity">
                        Humidity: 77%
                    </p>
                    <p id="wind">
                        Wind: 8 km/h
                    </p>
                    </Col>
                </Row>
            </Card>
            </Container>

    </div>
    );
}

export default App;
