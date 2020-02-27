import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";

class SearchResultContainer extends Component {

  constructor (props) {
    super(props);
    this.onSort = this.onSort.bind(this)

    this.state = {
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
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({ filter: value });
  };

  onSort = (event, sortKey) => {
    console.log("Sorting stuff")
    const data = this.state.data;
    // data.sort((a, b) => {return a - b})
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
       <ResultList 
       onSort = {this.onSort}
       results={filteredData}
       ></ResultList>
      </div>
    );
  }
}

export default SearchResultContainer;
