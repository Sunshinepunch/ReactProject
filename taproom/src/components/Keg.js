import React from "react";
import PropTypes from "prop-types";

function Keg(props){


  return (
    <React.Fragment>
      <h3>{props.name} - {props.brand}</h3>
      <p>{props.flavor} - {props.price}</p>
      <hr/>
    </React.Fragment>
  );
}


Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flavor: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
};

export default Keg;