import React, {Component} from 'react';
import {connect}from 'react-redux';


// const ActiveCity = (props)=>{
// if (!props.selectedCity) {
//     return (
//       <div className="active-city">
//         <p>Select a city...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="active-city">
//       <h3>{props.selectedCity.name}</h3>
//       <p>{props.selectedCity.address}</p>
//       {/*<img src={url} width="100%" />*/}
//     </div>
//   );
// };

class ActiveCity extends Component{

  render(){

    const style = {border:"4px solid blue"}
    if (!this.props.selectedCity) {
      return (
        <div className="active-city">
          <p>Select a city...</p>
        </div>
      );
    }
    else{
      return(
        <div className="active-city">
        <h3>{this.props.selectedCity.name}</h3>
        <p>{this.props.selectedCity.address}</p>
        {/*<img src={url} width="100%" />*/}
       </div>
      )
    }
  };
};





function mapStateToProps(state){
  return{
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
