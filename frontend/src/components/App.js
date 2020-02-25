import React from 'react';
import Navbar from "./Navbar";
import List from "./List";

function App() {
  return (
      <div>
        <Navbar/>
        <h1 className="display-4 list-title">Project title</h1>
        <div className="container-fluid">
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        </div>
        
      </div>
     
  );
}

export default App;
