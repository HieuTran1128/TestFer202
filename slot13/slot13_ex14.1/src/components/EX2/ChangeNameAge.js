import React, { useReducer } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.value };
    case 'SET_AGE':
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: '', age: '' });

  return (
    <div>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              value={state.name}
              onChange={(e) => dispatch({ type: 'SET_NAME', value: e.target.value })}
              placeholder="Input name"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Age:</Form.Label>
            <Form.Control
              type="text"
              value={state.age}
              onChange={(e) => dispatch({ type: 'SET_AGE', value: e.target.value })}
              placeholder="Input age"
            />
          </Form.Group>
        </Col>
      </Row>
      <div>
        <h3>Name: {state.name}</h3>
        <h3>Age: {state.age}</h3>
      </div>
    </div>
  );
}

export default ChangeNameAge;