import React, { useState } from "react";
import { Card, Dropdown, DropdownButton } from "react-bootstrap";

function Example3() {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleSelect = (eventKey, event) => {
    setSelectedItem(event.target.innerText);
  };

  return (
    <div>
      <h3>Dropdown Example</h3>
      <Card>
        <Card.Body>
          <DropdownButton
            id="dropdown-basic-button"
            title={selectedItem || "Select an item"}
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="1">Item 1</Dropdown.Item>
            <Dropdown.Item eventKey="2">Item 2</Dropdown.Item>
            <Dropdown.Item eventKey="3">Item 3</Dropdown.Item>
          </DropdownButton>
          {selectedItem && (
            <div className="mt-2">
              <p>You selected: {selectedItem}</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Example3;