import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>
          Simple todo
        </h2>
      </div>
      <div className="Todo-App">
        <form>
          <input type="text" />
        </form>
        <div className="Todo-List">
          <ul>
            <li>
              <input type="checkbox" /> Work out
            </li>
            <li>
              <input type="checkbox" /> Do shopping
            </li>
            <li>
              <input type="checkbox" />Business Meeting
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}

export default App;
