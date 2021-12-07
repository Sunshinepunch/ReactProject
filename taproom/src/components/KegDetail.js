import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingPourPint, onClickingRefillKeg } = props;


  let emptyKeg = "";
  let fullKeg = "";

  if (keg.quantity === 0) {
    emptyKeg = <button disabled> Empty! Refill Please! </button>
  } else {
    emptyKeg = <button onClick={onClickingPourPint}>Pour 1 Pint</button>
  }



  if (keg.quantity === 124) {
    fullKeg = <button disabled> Keg Full </button>
  } else {
    fullKeg = <button onClick={onClickingRefillKeg}> Put 1 pint in the keg! </button>
  }




  return (
    <React.Fragment>
      <h1>Keg Details </h1>
      <h3>{keg.name}</h3>
      <p> Brand: {keg.brand}</p>
      <p> Flavor: {keg.flavor}</p>
      <p> Price: {keg.price}</p>
      <p> {keg.quantity} Pints Remaining</p>
      {emptyKeg}
      {fullKeg}
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickEditKeg: PropTypes.func,
  onClickingPourPint: PropTypes.func, 
  onClickingRefillKeg: PropTypes.func
}

export default KegDetail;