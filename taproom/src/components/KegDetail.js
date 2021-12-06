import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;
  return (
    <React.Fragment>
      <h1>Keg Details </h1>
      <h3>{keg.name}</h3>
      <p> Brand: {keg.brand}</p>
      <p> Flavor: {keg.flavor}</p>
      <p> Price: {keg.price}</p>
      <p> {keg.quantity} Pints Remaining</p>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail;