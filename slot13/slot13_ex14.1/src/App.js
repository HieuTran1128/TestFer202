import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars } from 'react-icons/fa';
import Counter from './components/EX1/Counter';
import ChangeNameAge from './components/EX2/ChangeNameAge';
import ItemList from './components/EX3&4/ItemList';
import QuestionBank from './components/EX5&6/QuestionBank';

function App() {
  const [activeKey, setActiveKey] = useState('counter');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activeKey) {
      case 'counter':
        return <Counter />;
      case 'nameAge':
        return <ChangeNameAge />;
      case 'itemList':
        return <ItemList />;
      case 'quiz':
        return <QuestionBank />;
      default:
        return <Counter />;
    }
  };

  return (
    <Container fluid style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', padding: '20px' }}>
      <Row
        className="mb-4 align-items-center"
        style={{
          backgroundColor: '#000000',
          padding: '15px 20px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Col xs="auto">
          <Button
            onClick={toggleSidebar}
            style={{
              backgroundColor: '#01AA85',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '8px',
              transition: 'all 0.3s',
              boxShadow: '0 2px 8px rgba(1, 170, 133, 0.4)',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#018f6b')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#01AA85')}
          >
            <FaBars size={20} />
          </Button>
        </Col>
        <Col>
          <h1
            className="text-center mb-0"
            style={{
              color: '#01AA85',
              fontWeight: 'bold',
              letterSpacing: '1px',
            }}
          >
            React useReducer Exercises
          </h1>
        </Col>
      </Row>

      <Row>
        {isSidebarOpen && (
          <Col
            md={3}
            lg={2}
            className="p-3"
            style={{
              backgroundColor: '#000000',
              minHeight: '80vh',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.7)',
              transition: 'all 0.3s',
            }}
          >
            <Nav
              variant="pills"
              activeKey={activeKey}
              onSelect={(key) => setActiveKey(key)}
              className="flex-column"
            >
              {[
                { key: 'counter', title: 'Exercise 1: Counter' },
                { key: 'nameAge', title: 'Exercise 2: Name & Age Form' },
                { key: 'itemList', title: 'Exercise 3 & 4: Item List' },
                { key: 'quiz', title: 'Exercise 5 & 6: Quiz' },
              ].map((item) => (
                <Nav.Item key={item.key}>
                  <Nav.Link
                    eventKey={item.key}
                    style={{
                      color: activeKey === item.key ? '#fff' : '#b3b3b3',
                      backgroundColor: activeKey === item.key ? '#01AA85' : 'transparent',
                      marginBottom: '15px',
                      padding: '12px 20px',
                      borderRadius: '8px',
                      fontWeight: '500',
                      transition: 'all 0.3s',
                      boxShadow: activeKey === item.key ? '0 2px 8px rgba(1, 170, 133, 0.4)' : 'none',
                    }}
                    onMouseOver={(e) =>
                      activeKey !== item.key && (e.target.style.backgroundColor = '#333333')
                    }
                    onMouseOut={(e) =>
                      activeKey !== item.key && (e.target.style.backgroundColor = 'transparent')
                    }
                  >
                    {item.title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        )}

        <Col
          md={isSidebarOpen ? 9 : 12}
          lg={isSidebarOpen ? 10 : 12}
          style={{ transition: 'all 0.3s' }}
        >
          <Card
            style={{
              backgroundColor: '#262626',
              border: 'none',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
              color: '#e6e6e6',
            }}
          >
            {renderContent()}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;