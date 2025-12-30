import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Waiting for button click...");
  const items = [1,2,3,4,5,6,7,8];

  return (
    <>
      <header className="header">
        <h2>React UI Layout</h2>
      </header>

      <div className="container">
        <aside className="sidebar">
          <h3>Sidebar</h3>
          <p>Menu items...</p>
        </aside>

        <main className="content">
          <h2>Main Content</h2>

          <p>{message}</p>
          <button onClick={() => {
            setMessage(prev =>
              prev === "Waiting for button click..."
                ? "Button clicked! 🎉"
                : "Waiting for button click..."
            );
          }}>
            Click Me
          </button>

          <div className="horizontal-scroll">
            {items.map(num => (
              <div className="mini-card" key={num}>{num}</div>
            ))}
          </div>
        </main>
      </div>

      <footer className="footer">
        <p>© React UI</p>
      </footer>
    </>
  );
}

export default App;
