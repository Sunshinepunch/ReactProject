import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';


class KegControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      KegList: [],
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({ formVisibleOnPage: false, selectedKeg: null});
    }
    else {
      this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
}


handleNewKegToList = (newKeg) => {
  const newKegList = this.state.KegList.concat(newKeg);
  this.setState({formVisibleOnPage: false, KegList: newKegList});
}

handlePint = (id) => {
  let selectedKeg = this.state.KegList.find(keg => keg.id === id);
  selectedKeg.quantity --;
  const newKegList = this.state.KegList.map((keg) => {return keg.id === id ? selectedKeg : keg});
  this.setState({ KegList: newKegList});
}
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleNewKegToList}/>
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.KegList} />
      buttonText = "Add New Keg";
    }
    return(
      <React.Fragment>
        <h1>The Kombutcha Lounge </h1>
        <hr />
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
    );
  }
}

export default KegControl;