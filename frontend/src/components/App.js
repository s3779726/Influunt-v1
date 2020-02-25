import React,{useState, useEffect} from 'react';
import Navbar from "./Navbar/Navbar";
import List from "./List";
import axios from "axios";

function App() {

  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios.get('/lists')
      .then(function (response) {
        console.log(response.data);
        setLists(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function addList(list){
    setLists((prevValue) =>{
      return [...prevValue, list];
    });
  }


  return (
      <div>
        <Navbar addList={addList} />
        <h1 className="display-4 list-title">Project Task Lists</h1>
        <div className="container-fluid">

          {lists.map((list) => {
            return (<List key={list._id} id = {list._id} listTitle={list.listTitle}/>)
          })}
        </div>
        
      </div>
     
  );
}

export default App;
