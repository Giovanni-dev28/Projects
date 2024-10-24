import React, { useState } from "react";
import Banner from "./components/Banner";
import "./css/App.css";
import HouseList from "./components/HouseList";
import House from "./components/House";

function App() {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [addingHouse, setAddingHouse] = useState(false);
  return (
    <>
      <div className="App">
        <Banner
          text="Home sales agency"
          setSelectedHouse={setSelectedHouse}
          setAddingHouse={setAddingHouse}
        />
        {selectedHouse ? (
          <House house={selectedHouse} />
        ) : (
          <HouseList
            selectedHouse={setSelectedHouse}
            setAddingHouse={setAddingHouse}
            addingHouse={addingHouse}
          />
        )}
      </div>
    </>
  );
}

export default App;
