import { useState } from "react";
import data from "./data";
import "./App.css";
import Tours from "./componets/Tours";

function App() {
  const [tours, setTourse] = useState(data);

  const removeTour = (id) => {
    const newTours = tours.filter((tours) => tours.id !== id);
    setTourse(newTours);
    console.log(newTours);
  };
  if (tours.length === 0) {
    return (
      <div className="refersh">
        <h2>Not Tours Left</h2>
        <button onClick={() => setTourse(data)} className="btn-white">Refresh</button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tourseData={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
