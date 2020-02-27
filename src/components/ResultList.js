import React from "react";

function ResultList(props) {
  return (
    <table className="table table-bordered">
     <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>DoB</th>
    </tr>
    </thead> 
    <tbody>
    {props.results.map(result => (
        <tr key={result.email}>
          <td>1</td>
          <td>{result.fname}</td>
          <td>{result.lname}</td>
          <td>{result.gender}</td>
          <td>{result.email}</td>
        </tr>
      ))}
      </tbody>
</table>
  );
}

export default ResultList;
