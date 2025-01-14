/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Table from './Component/Table';
import "./App.css";
import Form from "./Component/Form";

function App() {
    const [characterData, setData] = useState([]); // Initialize with an empty array
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    // Fetch data when the component mounts
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const todosResponse = await fetch(`${API_BASE_URL}/api/v1`);
                const todos = await todosResponse.json();
                setData(todos.data); // Update state with fetched data
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };

        fetchTodos();
    }, [API_BASE_URL]); // Add API_BASE_URL as a dependency

    const newData = async (row) => {
        try {
            const todotodel = row.id;

            // Make a DELETE request to your backend to delete the todo
            await fetch(`${API_BASE_URL}/api/v1/?id=${todotodel}`, {
                method: "DELETE",
            });

            // Fetch updated todos from backend and update the state
            const todosResponse = await fetch(`${API_BASE_URL}/api/v1/`);
            const todos = await todosResponse.json();

            setData(todos.data);
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    const onsubmithandle = (newEntry) => {
        setData(newEntry);
    };

    return (
        <>
            <p>{API_BASE_URL}</p>
            <Table characterData={characterData} removeCharacter={newData} />
            <Form characterData={characterData} onsubmithandle={onsubmithandle} />
        </>
    );
}

export default App;
