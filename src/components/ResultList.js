import React from "react";

function ResultList(props) {
   return (
<table className="table table-bordered table-md" style={{ width: "80%", margin: "20px" }}>
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">First Name
     <button onClick={e => props.onSort(e, 'fname')} className="m-2">
        <svg className="bi bi-arrow-up-down" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M13 5.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z" clipRule="evenodd"></path>
          <path fillRule="evenodd" d="M12.646 4.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L13 5.707l-2.646 2.647a.5.5 0 01-.708-.708l3-3zm-9 7a.5.5 0 01.708 0L7 14.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clipRule="evenodd"></path>
          <path fillRule="evenodd" d="M7 4.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V5a.5.5 0 01.5-.5z" clipRule="evenodd"></path>
        </svg>
      </button>
    </th>
    <th scope="col">Last Name
    <button onClick={e => props.onSort(e, 'lname')} className="m-2">
        <svg className="bi bi-arrow-up-down" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M13 5.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z" clipRule="evenodd"></path>
          <path fillRule="evenodd" d="M12.646 4.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L13 5.707l-2.646 2.647a.5.5 0 01-.708-.708l3-3zm-9 7a.5.5 0 01.708 0L7 14.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clipRule="evenodd"></path>
          <path fillRule="evenodd" d="M7 4.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V5a.5.5 0 01.5-.5z" clipRule="evenodd"></path>
        </svg>
      </button>
    </th >
    <th scope="col">Email
      <button onClick={e => props.onSort(e, 'email')} className="m-2">
        <svg className="bi bi-arrow-up-down" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M13 5.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z" clipRule="evenodd"></path>
          <path fillRule="evenodd" d="M12.646 4.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L13 5.707l-2.646 2.647a.5.5 0 01-.708-.708l3-3zm-9 7a.5.5 0 01.708 0L7 14.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clipRule="evenodd"></path>
          <path fillRule="evenodd" d="M7 4.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V5a.5.5 0 01.5-.5z" clipRule="evenodd"></path>
        </svg>
      </button>
    </th>
    <th scope="col">Gender
    <button onClick={e => props.onSort(e, 'gender')} className="m-2">
        <svg className="bi bi-arrow-up-down" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M13 5.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z" clipRule="evenodd"></path>
          <path fillRule="evenodd" d="M12.646 4.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L13 5.707l-2.646 2.647a.5.5 0 01-.708-.708l3-3zm-9 7a.5.5 0 01.708 0L7 14.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clipRule="evenodd"></path>
          <path fillRule="evenodd" d="M7 4.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V5a.5.5 0 01.5-.5z" clipRule="evenodd"></path>
        </svg>
      </button>
    </th>
  </tr>
</thead>
<tbody>

{props.results.map((result,index) => (
    <tr key={result.email}>
    <th scope="row">{index+1}</th>
    <td>{result.fname}</td>
    <td>{result.lname}</td>
    <td>{result.email}</td>
    <td>{result.gender}</td>
  </tr>
))}
</tbody>
</table>
   );
 }

export default ResultList;
