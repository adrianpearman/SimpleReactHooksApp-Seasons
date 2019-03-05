import React, { Component, useEffect, useState } from 'react';
import Spinner from './Spinner' 
import SeasonDisplay from './SeasonDisplay'
import useLocation from './useLocation'

// class App extends Component {
//   state = {
//     lat: null,
//     errorMessage: ''
//   }

//   componentDidMount(){
//     window.navigator.geolocation.getCurrentPosition(
//       position => this.setState({
//         lat: position.coords.latitude
//       }),
//       err => this.setState({ 
//         errorMessage: err.message
//       })
//     )
//   }

//   renderContent(){
//     if(this.state.errorMessage && !this.state.lat){
//       return <div>Error: {this.state.errorMessage}</div>
//     }
//     if(!this.state.errorMessage && this.state.lat){
//       return <SeasonDisplay lat={this.state.lat} />
//     }
//     return <Spinner message='Please accept location request' />
//   }

//   render() {
//     return (
//       <div className='border red'>
//         {this.renderContent()}
//       </div>
//     )
//   }
// }

const App = () => {
  const [lat, errorMessage] = useLocation()

  let content
  if(errorMessage && !lat){
    content = <div>Error: {errorMessage}</div>
  }else if(!errorMessage && lat){
    content = <SeasonDisplay lat={lat} />
  } else {
    content = <Spinner message='Please accept location request' />
  }

  return (
    <div className='border red'>
      {content}
    </div>
  )
}

export default App
