import React, { Component , useState} from "react";
import  "./Form.css"

const FormSetup = (props)=>{
  const [firstname , setfirstname] = useState("");
  const [lastname , setlastname] = useState("");
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const firstnamehandler = (event)=>{
    setfirstname(event.target.value);
  }

  const lastnamehandler = (event)=>{
    setlastname(event.target.value);
  }


  const onclickhandler = async () => {
    let newTodo = { Title: firstname, Todo_Description: lastname };
  
    // Make a POST request to your backend to create a new todo
    try {
      const response = await fetch(`${API_BASE_URL}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
  
      const result = await response.json();
  
      // Fetch updated todos from backend and update the state
      const todosResponse = await fetch(`${API_BASE_URL}`);
      const todos = await todosResponse.json();
  
      props.onsubmithandle(todos.data);
      
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return(
    <>
      <div className="mb-3 container my-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Todo Title"
            onChange={firstnamehandler}
            name="FirstName"
          />
        </div>
        <div className="mb-3 container my-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Todo Description
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Todo Description"
            onChange={lastnamehandler}
          />
          
        </div>
        <button type="button" className="btn btn-primary btnmarg my-4" onClick={onclickhandler} >Submit</button>
    </>
  )
}

class Form extends Component {
  render() {
    const {onsubmithandle,characterData } = this.props;
    return (
      <>
        <FormSetup  character = {characterData} onsubmithandle = {onsubmithandle} />
      </>
    );
  }
}

export default Form;
