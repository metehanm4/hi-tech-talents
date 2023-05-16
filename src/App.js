import "./App.css";
import React, { useRef, useEffect, useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const ref = useRef(null);

  var options = [
    { value: "Apple", innerText: "🍎 Apple" },
    { value: "Apple", innerText: "🍌 Banana" },
    { value: "Apple", innerText: "🫐 Blueberry" },
    { value: "Apple", innerText: "🥭 Mango" },
  ];
  useEffect(() => {
    setFilteredData(options);
    ref.current.focus();
  }, []);

  useEffect(() => {
    let _filteredData = options.filter((option) => {
      if (searchQuery) {
        return option.innerText.toLowerCase().includes(searchQuery);
      }
      return true;
    });
    setFilteredData(_filteredData);
  }, [searchQuery]);

  const handleInputChange = (event) => {
    if (event.key == "Backspace") {
      setSearchQuery(searchQuery.substring(0, searchQuery.length - 1));
    } else {
      setSearchQuery(searchQuery + event.key);
    }
  };

  return (
    <div className="App" ref={ref} tabIndex={-1} onKeyUp={handleInputChange}>
      <select className="mySelect">
        <option selected disabled hidden>
          {searchQuery == "" ? "Choose a Fruit" : searchQuery}
        </option>
        {filteredData.map((data) => {
          return (
            <>
              <option className="myOption" key={data.value} value={data.value}>
                {data.innerText}
              </option>
            </>
          );
        })}
      </select>
    </div>
  );
}

export default App;
