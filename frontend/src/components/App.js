import React,{useState, useEffect} from 'react';
import Navbar from "./Navbar/Navbar";
import List from "./List components/List";
import axios from "axios";

function App() {

  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios.get('/lists')
      .then(function (response) {
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

  function deleteList(id){
    setLists((prevValue) => {
      return prevValue.filter((list) =>{
        return list._id !== id;
      });
    });
  }

  return (
      <div>
        <Navbar addList={addList} />
        <h1 className="display-4 list-title">Project Task Lists</h1>
        <div className="container-fluid">

          {lists.map((list) => {
            return (<List key={list._id} id = {list._id} listTitle={list.listTitle} deleteList = {deleteList}/>)
          })}
        </div>
        
      </div>
     
  );
}

export default App;
