import React, { Component } from "react";
import "./Table.css"

const Thead = () => {
    return (
        <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Todo Description</th>
                <th scope="col">Created at</th>
            </tr>
        </thead>
    )

}
const Tbody = (props) => {
    console.log(props.character[1]);

    const rows = props.character.map((row, index) => {

        const date = new Date(row.createdAt);

        // Format the date and time
        const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        const formattedTime = date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });

        const createdAt =  `${formattedDate}, Time: ${formattedTime}`
        return (
            <tr key={index}>
                <td>{row.Title}</td>
                <td>{row.Todo_Description}</td>
                <td>{createdAt}</td>
                <td>
                    <button onClick={() => props.removeCharacter(row)}>Delete</button>
                </td>
            </tr>
        );
    })
    return <tbody>{rows}</tbody>

}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;
        return (<table className="table  container customcc">
            <Thead />
            <Tbody character={characterData} removeCharacter={removeCharacter} />
        </table>
        )
    }
}

export default Table;