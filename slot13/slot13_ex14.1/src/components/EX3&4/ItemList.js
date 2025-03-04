import React, { useReducer, useState } from 'react';
import { Form, Button, ListGroup, Row, Col } from 'react-bootstrap';

function listReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.item] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item.id !== action.id) };
    case 'EDIT_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.id ? { ...item, name: action.name } : item
        )
      };
    case 'SORT_ALPHA':
      return {
        ...state,
        items: [...state.items].sort((a, b) => a.name.localeCompare(b.name))
      };
    case 'SORT_TIME':
      return {
        ...state,
        items: [...state.items].sort((a, b) => a.id - b.id)
      };
    default:
      return state;
  }
}

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, { items: [] });
  const [newItemName, setNewItemName] = useState('');
  const [filter, setFilter] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  const handleAddItem = () => {
    if (newItemName) {
      dispatch({ type: 'ADD_ITEM', item: { id: Date.now(), name: newItemName } });
      setNewItemName('');
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setEditName(item.name);
  };

  const saveEdit = (id) => {
    dispatch({ type: 'EDIT_ITEM', id, name: editName });
    setEditingId(null);
  };

  const filteredItems = state.items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Control
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder="Enter item name"
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Button onClick={handleAddItem} variant="primary">Add Item</Button>
        </Col>
        <Col md={3}>
          <Form.Control
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter items"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Button onClick={() => dispatch({ type: 'SORT_ALPHA' })} variant="info" className="me-2">
            Sort Alphabetically
          </Button>
          <Button onClick={() => dispatch({ type: 'SORT_TIME' })} variant="info">
            Sort by Time
          </Button>
        </Col>
      </Row>
      <ListGroup>
        {filteredItems.map(item => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            {editingId === item.id ? (
              <>
                <Form.Control
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <Button onClick={() => saveEdit(item.id)} variant="success" className="ms-2">Save</Button>
              </>
            ) : (
              <>
                {item.name}
                <div>
                  <Button onClick={() => handleEdit(item)} variant="warning" className="me-2">Edit</Button>
                  <Button onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })} variant="danger">Remove</Button>
                </div>
              </>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default ItemList;