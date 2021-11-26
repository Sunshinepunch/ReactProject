import React from "react";
import PropTypes from "prop-types";

function Keg(props){


  return (
    <React.Fragment>
      <h3>{props.names} - {props.brand}</h3>
      <p>{props.flavor} - {props.price}</p>
      <hr/>
    </React.Fragment>
  );
}


Keg.propTypes = {
  names: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flavor: PropTypes.string.isRequired
};

export default Keg;