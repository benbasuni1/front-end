import React from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';

const Keys = props => (
    <Grid className="calculator">
      <Row>
        <Col md={2}> <Button onClick={e => props.clickHandler(e)} className="button">C</Button> </Col>
        <Col md={10}> <input className="search" type="text" value={props.total}/> </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Button onClick={e => props.clickHandler(e)} className="button">7</Button>
          <Button onClick={e => props.clickHandler(e)} className="button">8</Button>
          <Button onClick={e => props.clickHandler(e)} className="button">9</Button>
          <Button onClick={e => props.clickHandler(e)} className="button operation">+</Button>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Button onClick={e => props.clickHandler(e)} className="button">4</Button>
          <Button onClick={e => props.clickHandler(e)} className="button">5</Button>
          <Button onClick={e => props.clickHandler(e)} className="button">6</Button>
          <Button onClick={e => props.clickHandler(e)} className="button operation">-</Button>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Button onClick={e => props.clickHandler(e)} className="button">1</Button>
          <Button onClick={e => props.clickHandler(e)} className="button">2</Button>
          <Button onClick={e => props.clickHandler(e)} className="button">3</Button>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Button onClick={e => props.clickHandler(e)} className="button">0</Button>
          <Button onClick={e => props.clickHandler(e)} className="button">.</Button>
          <Button onClick={e => props.clickHandler(e)} className="button equals">=</Button>
        </Col>
      </Row>
  </Grid>
);

export default Keys;


