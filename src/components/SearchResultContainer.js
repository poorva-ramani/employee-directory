import React, { Component } from "react";
import SearchForm from "./SearchForm";
// import ResultList from "./ResultList";

class SearchResultContainer extends Component {

  state = {
    filter: "",
    data: [
      {
        fname: "Jayne",
        lname: "Washington",
        email: "jaynewashington@exposa.com",
        gender: "female"
      },
      {
        fname: "Peterson",
        lname: "Dalton",
        email: "petersondalton@exposa.com",
        gender: "male"
      },
      {
        fname: "Velazquez",
        lname: "Calderon",
        email: "velazquezcalderon@exposa.com",
        gender: "male"
      },
      {
        fname: "Norman",
        lname: "Reed",
        email: "normanreed@exposa.com",
        gender: "male"
      }
    ]
  };

  onSort = this.onSort.bind(this)

  handleChange = event => {
    const value = event.target.value;
    this.setState({ filter: value });
  };

  onSort(event, sortKey) {
    const data = this.state.data;
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
    this.setState({ data })
  }



  render() {
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(result => {
      return Object.keys(result).some(key =>
        result[key].toLowerCase().includes(lowercasedFilter)
      );
    });
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleChange={this.handleChange}>

        </SearchForm>
        <table className="table table-bordered table-md" style={{ width: "80%", nargin: "20px" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name
               <button onClick={e => this.onSort(e, 'fname')} className="m-2">
                  <svg class="bi bi-arrow-up-down" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M13 5.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z" clip-rule="evenodd"></path>
                    <path fill-rule="evenodd" d="M12.646 4.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L13 5.707l-2.646 2.647a.5.5 0 01-.708-.708l3-3zm-9 7a.5.5 0 01.708 0L7 14.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clip-rule="evenodd"></path>
                    <path fill-rule="evenodd" d="M7 4.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V5a.5.5 0 01.5-.5z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </th>
              <th scope="col">Last Name
              <button onClick={e => this.onSort(e, 'lname')} className="m-2">
                  <svg class="bi bi-arrow-up-down" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M13 5.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z" clip-rule="evenodd"></path>
                    <path fill-rule="evenodd" d="M12.646 4.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L13 5.707l-2.646 2.647a.5.5 0 01-.708-.708l3-3zm-9 7a.5.5 0 01.708 0L7 14.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clip-rule="evenodd"></path>
                    <path fill-rule="evenodd" d="M7 4.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V5a.5.5 0 01.5-.5z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </th >
              <th scope="col">Email
                <button onClick={e => this.onSort(e, 'email')} className="m-2">
                  <svg class="bi bi-arrow-up-down" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M13 5.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z" clip-rule="evenodd"></path>
                    <path fill-rule="evenodd" d="M12.646 4.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L13 5.707l-2.646 2.647a.5.5 0 01-.708-.708l3-3zm-9 7a.5.5 0 01.708 0L7 14.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clip-rule="evenodd"></path>
                    <path fill-rule="evenodd" d="M7 4.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V5a.5.5 0 01.5-.5z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </th>
              <th scope="col">Gender
              <button onClick={e => this.onSort(e, 'gender')} className="m-2">
                  <svg class="bi bi-arrow-up-down" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M13 5.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z" clip-rule="evenodd"></path>
                    <path fill-rule="evenodd" d="M12.646 4.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L13 5.707l-2.646 2.647a.5.5 0 01-.708-.708l3-3zm-9 7a.5.5 0 01.708 0L7 14.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clip-rule="evenodd"></path>
                    <path fill-rule="evenodd" d="M7 4.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V5a.5.5 0 01.5-.5z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(result => (
              <tr key={result.email}>
                <th scope="row">1</th>
                <td>{result.fname}</td>
                <td>{result.lname}</td>
                <td>{result.email}</td>
                <td>{result.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchResultContainer;
