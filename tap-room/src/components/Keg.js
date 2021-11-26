import React from "react";
import PropTypes from "prop-types";

function Keg(){


  return (
    <React.Fragment>
      <h3>{props.names} - {props.brand}</h3>
      <p>{props.flavor} - {props.price}</p>
      <hr/>
    </React.Fragment>
  );
}


Keg.propTypes = {
  names: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  flavor: PropTypes.string
};

export default Keg;