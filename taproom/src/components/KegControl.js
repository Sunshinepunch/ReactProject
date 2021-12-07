import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import EditKegForm from './EditKegForm';
import KegDetail from './KegDetail';


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
      this.setState({ formVisibleOnPage: false, selectedKeg: null, editing: false});
    }
    else {
      this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
}

handleEditClick = () => {
  this.setState({editing: true});
}

handleNewKegToList = (newKeg) => {
  const newKegList = this.state.KegList.concat(newKeg);
  this.setState({formVisibleOnPage: false, KegList: newKegList});
}

handleChangingKeg = (id) => {
  const selectedKeg = this.state.KegList.filter(keg => keg.id === id)[0];
  this.setState({selectedKeg: selectedKeg});
}

handleEditKeg = (kegToEdit) => {
  const editKegList = this.state.KegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
  this.setState({
    KegList: editKegList,
    editing: false,
    selectedKeg: null
  });
}

handleDeleteKeg = (id) => {
  const newKegList = this.state.KegList.filter(keg => keg.id !== id);
  this.setState({KegList: newKegList, selectedKeg: null});
}

handlePint = () => {
  let refillKeg = this.state.KegList.filter(keg => keg.id === this.state.selectedKeg.id)[0];
  if (refillKeg.quantity >= 124) {
    alert("This keg is full of delicious savory Kombutcha. Maybe drink some first?")
  } else {
    refillKeg = refillKeg.quantity++;

    this.setState({
      refillKeg: refillKeg
    });
  }
}

handleRefillPint = () => {
  let refillPint = this.state.KegList.filter(keg => keg.id === this.state.selectedKeg.id)[0];

  if(refillPint.quantity <= 0) {
    alert("Sorry this keg is empty. Refill or try another delicious flavor.");
  } else {
    refillPint = refillPint.quantity--;
    this.setState({ refillPint: refillPint});
  }
}




  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg={this.state.selectedKeg} onEditKeg = {this.handleEditKeg}/>
      buttonText = "Return to Kegs";
    } else if(this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} onClickDelete = {this.handleDeleteKeg} onClickEdit = {this.handleEditClick} onClickingPourPint = {this.handleRefillPint} onClickingRefillKeg={this.handlePint}/>
      buttonText = "Return to Kegs";
    } else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleNewKegToList}/>
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.KegList} onKegSelection={this.handleChangingKeg} />
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