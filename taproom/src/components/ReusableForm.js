import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <label for="name">Name:</label>
          <input type="text" name="name" placeholder="Kombourgeoisie" className="form-control"/>
          <br />
          <label for="brand">Brand:</label>
          <input type="text" name="brand" placeholder="Oregon's Homegrown" className="form-control"/>
          <br/>
          <label for="price">Price:</label>
          <input type="number" name="price" placeholder="$7.99" className="form-control"/>
          <br/>
          <label for="flavor">Flavor:</label>
          <input type="text" name="flavor" placeholder="Ruby Crystal Orange" className="form-control"/>
          <br/>
          <label for="quantity">Pints Per Keg:</label>
          <input type="number" name="quantity" placeholder="124 pints" className="form-control"/>
          <br />
          <button type="submit" className="btn">Submit</button>
          <br />
        </form>
      </React.Fragment>

  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func
}

export default ReusableForm;