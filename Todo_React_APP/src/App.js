/* eslint-disable no-undef */
import React ,{useState , useEffect} from "react";
import Table from './Component/Table';
import "./App.css"
import Form from "./Component/Form";
function App (){
    
    const [characterData, setData] = useState([]); // Initialize with an empty array

    // Fetch data when the component mounts
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const todosResponse = await fetch("http://localhost:8000/api/v1/");
                const todos = await todosResponse.json();
                setData(todos.data); // Update state with fetched data
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };

        fetchTodos();
    }, []); // Empty dependency array ensures this runs only once on mount

    const newData = async (row) => {
        try {
          const todotodel = row.id
      
          // Make a DELETE request to your backend to delete the todo
          await fetch(`http://localhost:8000/api/v1/?id=${todotodel}`, {
            method: "DELETE",
          });
      
          // Fetch updated todos from backend and update the state
          const todosResponse = await fetch("http://localhost:8000/api/v1/");
          const todos = await todosResponse.json();
      
          setData(todos.data);
        } catch (error) {
          console.error("Error deleting todo:", error);
        }
      };
    const onsubmithandle = (newEntry)=>{
        setData(newEntry);
    }

    return (<>
    <h1 className="my-4">React Based Table</h1>
    <Table characterData = {characterData} removeCharacter = {newData}/>
    <Form  characterData = {characterData} onsubmithandle = {onsubmithandle}/>
    </>
    );        
}

export default App;