import React, {Component} from 'react';
import {connect}from 'react-redux';
import {bindActionCreators} from 'redux';


import {selectCity} from '../actions/index'

class City extends Component{

    handleClick=() => {
      // here we call the redux action. For that we'll use the mapDispacthToProps below

      if(this.props.selectCity){
          this.props.selectCity(this.props.city)
      }
    };

    render(){
      // const style=`backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${this.props.city}')
      // `
      const style = {border: "2px solid red"}

    return(
      <div className="card-category" style={style} onClick={this.handleClick}>
        <h2>{this.props.city.name}</h2>
      </div>
    )
  };
};

function mapDispatchToProps(dispatch){
 return bindActionCreators(
    { selectCity: selectCity},
    dispatch
  );
};


function mapStateToProps(state) {
  return {
    selectedCity: state.city
  };
}

export default connect (null, mapDispatchToProps)(City);
