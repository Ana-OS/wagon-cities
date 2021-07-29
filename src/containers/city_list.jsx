import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {setCities} from '../actions';
import {connect}from 'react-redux';

import City from './city';


class CityList extends Component {

  componentWillMount(){
    //after calling the action setCities in the mapDispatchToProps I wil pass the array of cities given to me in the payloa as props when the component mounts
    this.props.settingCities();
  }

  render(){
    return (
      <div className="col-sm-7">
        {this.props.cities.map((city) =>
          <City city={city} key={city.address} />
        )}
      </div>
    )
  };
};

function mapDispatchToProps(dispatch) {
   // dispatch an action to update the redux state. This is what connects the action to the component
  return bindActionCreators(
    { settingCities: setCities},

    dispatch
    );
};

function mapStateToProps(state) {
  return {
    cities: state.cities
  }
};



export default connect (mapStateToProps, mapDispatchToProps)(CityList);
