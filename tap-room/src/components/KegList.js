import React from "react";
import Keg from "./Keg";

const mainKegList = [
  {
    names: 'Kombucha Plus Ultra',
    brand: 'Kombust',
    flavor: 'Mango Ginger',
    price: 6.99
  },
  {
    names: 'Kombuchaya My Lord',
    brand: 'Insensitive Corp',
    flavor: 'Blueberry Tangerine',
    price: 7.99
  }
];

function KegList(){
  return(
    <React.Fragment>
      <hr/>
      {mainKegList.map((keg, index) =>
      <Keg names={keg.names}
      brand={keg.brand}
      flavor={keg.flavor}
      price={keg.price}
      key={index}/>
      )}
    </React.Fragment>
  );
}

export default KegList;