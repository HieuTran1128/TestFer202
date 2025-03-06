import React, { useState } from 'react';

const SnapshotDemo = () => {
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);
  const [lastSnapshotMessage, setLastSnapshotMessage] = useState(null);
  const [restoreMessage, setRestoreMessage] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleSnapshot = () => {
    const newSnapshot = count;
    setSnapshot(newSnapshot);
    setLastSnapshotMessage(`Snapshot: ${newSnapshot}`);
  };

  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot);
      setRestoreMessage(`Restored to Snapshot: ${snapshot}`);
      setTimeout(() => setRestoreMessage(null), 2000);
    }
  };

  return (
    <div
      className="card p-4"
      style={{ backgroundColor: '#2a2a2a', color: '#ffffff', border: '1px solid #333' }}
    >
      <h1 style={{ color: '#01AA85' }}>State as a Snapshot Demo</h1>
      <p>Count: {count}</p>
      <div className="d-flex gap-2">
        <button
          className="btn"
          onClick={handleIncrement}
          style={{
            backgroundColor: '#01AA85',
            color: '#ffffff',
            border: 'none',
            padding: '10px 20px',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#019670')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#01AA85')}
        >
          Increment
        </button>
        <button
          className="btn"
          onClick={handleSnapshot}
          style={{
            backgroundColor: '#333',
            color: '#ffffff',
            border: '1px solid #01AA85',
            padding: '10px 20px',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#444')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#333')}
        >
          Take Snapshot
        </button>
        <button
          className="btn"
          onClick={handleRestore}
          style={{
            backgroundColor: '#333',
            color: '#01AA85',
            border: '1px solid #01AA85',
            padding: '10px 20px',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#444')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#333')}
        >
          Restore Snapshot
        </button>
      </div>
      {lastSnapshotMessage && (
        <div style={{ marginTop: '20px', color: '#01AA85' }}>
          <p>{lastSnapshotMessage}</p>
        </div>
      )}
      {restoreMessage && (
        <div style={{ marginTop: '10px', color: '#01AA85' }}>
          <p>{restoreMessage}</p>
        </div>
      )}
    </div>
  );
};

export default SnapshotDemo;