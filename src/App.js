import "./App.css";

function App() {
  const users = [
    { name: "Sahil", isDeveloper: true },
    { name: "John", isDeveloper: false },
    { name: "Smith", isDeveloper: true },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn React.js</h1>
      </header>
      <div>
        <ul>
          {users
            .filter((user) => user.isDeveloper)
            .map((user) => (
              <li>{user.name}</li>
            ))}
          {users
            .filter((user) => user.isDeveloper)
            .map((user) => {
              return <li>{user.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
