import React from 'react';
import Navbar from "./Navbar/Navbar";
import List from "./List";

function App() {

  const [lists, setLists] = useState([]);


  return (
      <div>
        <Navbar/>
        <h1 className="display-4 list-title">Project Task Lists</h1>
        <div className="container-fluid">
          <List listTitle="ListTitle"/>
        </div>
        
      </div>
     
  );
}

export default App;
