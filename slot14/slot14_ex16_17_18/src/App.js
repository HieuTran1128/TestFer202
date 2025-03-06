import 'bootstrap/dist/css/bootstrap.min.css';
import EventHandlingDemo from './components/Ex16/EventHandlingDemo';
import RenderAndCommitDemo from './components/Ex17/RenderAndCommitDemo';
import SnapshotDemo from './components/Ex18/SnapshotDemo';
import React, { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('event-handling');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const renderActiveDemo = () => {
    switch (activeSection) {
      case 'event-handling':
        return <EventHandlingDemo />;
      case 'render-commit':
        return <RenderAndCommitDemo />;
      case 'snapshot':
        return <SnapshotDemo />;
      default:
        return <EventHandlingDemo />;
    }
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
      <div className="row">
        <nav
          className="col-md-3 col-lg-2 d-md-block sidebar"
          style={{
            backgroundColor: '#000000',
            color: '#ffffff',
            minHeight: '100vh',
            borderRight: '1px solid #333',
          }}
        >
          <div className="position-sticky pt-3">
            <h4 className="sidebar-heading px-3" style={{ color: '#01AA85' }}>
              React Demos
            </h4>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === 'event-handling' ? 'active' : ''}`}
                  href="#event-handling"
                  onClick={() => handleNavClick('event-handling')}
                  style={{
                    color: activeSection === 'event-handling' ? '#01AA85' : '#ffffff',
                    backgroundColor: activeSection === 'event-handling' ? '#333' : 'transparent',
                    borderRadius: '5px',
                    margin: '5px 10px',
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#333')}
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor =
                      activeSection === 'event-handling' ? '#333' : 'transparent')
                  }
                >
                  Event Handling
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === 'render-commit' ? 'active' : ''}`}
                  href="#render-commit"
                  onClick={() => handleNavClick('render-commit')}
                  style={{
                    color: activeSection === 'render-commit' ? '#01AA85' : '#ffffff',
                    backgroundColor: activeSection === 'render-commit' ? '#333' : 'transparent',
                    borderRadius: '5px',
                    margin: '5px 10px',
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#333')}
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor =
                      activeSection === 'render-commit' ? '#333' : 'transparent')
                  }
                >
                  Render & Commit
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === 'snapshot' ? 'active' : ''}`}
                  href="#snapshot"
                  onClick={() => handleNavClick('snapshot')}
                  style={{
                    color: activeSection === 'snapshot' ? '#01AA85' : '#ffffff',
                    backgroundColor: activeSection === 'snapshot' ? '#333' : 'transparent',
                    borderRadius: '5px',
                    margin: '5px 10px',
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#333')}
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor =
                      activeSection === 'snapshot' ? '#333' : 'transparent')
                  }
                >
                  State Snapshot
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main
          className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4"
          style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}
        >
          <div className="mb-5">{renderActiveDemo()}</div>
        </main>
      </div>
    </div>
  );
}

export default App;