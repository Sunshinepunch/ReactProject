import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <h3>{props.name} - {props.brand}</h3>
      <p>{props.flavor} - ${props.price} USD</p>
      <p>{props.quantity} pints remaining</p>
      <br/>
      <button onClick={() => props.whenKegClicked(props.id)}> View Keg Details </button>
    </React.Fragment>
  );
}


Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flavor: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  whenKegClicked: PropTypes.func,
  id: PropTypes.string,
};

export default Keg;