import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-row">
        <h5 className="col-1 text-center" htmlFor="search">Searchbox:</h5>
        <input
          onChange={props.handleChange}
          value={props.filter}
          name="search"
          type="text"
          className="form-control col-3"
          placeholder="Search for a User"
          id="search"
          style={{width:"20%", margin :"10px"}}
        />
        {/* <button onClick={props.handleChange} className="btn btn-primary mt-3">
          Search
        </button> */}
      </div>
    </form>
  );
}

export default SearchForm;
