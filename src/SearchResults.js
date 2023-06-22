import moment from "moment";
import React from "react";
import { useState } from "react";
function SearchResults(props) {
  debugger;

  const [selected, setSelected] = useState([]);

  function handleClick(index) {
    if (selected.includes(index)) {
      setSelected((selected) => {
        return selected.filter((item) => item !== index);
      });
    } else {
      setSelected([...selected, index]);
    }
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">titles</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">stay nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result, index) => {
            return (
               <tr
                key={index}
                className={selected.includes(index) ? "selected" : ""}
                onClick={() => handleClick(index)}
              >
                <th scope="row">{result.id}</th>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>
                  {moment(result.checkOutDate).diff(
                    moment(result.checkInDate),
                    "days"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default SearchResults;
