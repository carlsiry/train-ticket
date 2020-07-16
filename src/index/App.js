import React from 'react'
import './App.css'
import { connect } from 'react-redux'

function App(props) {
  console.log(props)
  return <div className="App">app component works!</div>
}

export default connect(
  function mapStateToProps(state) {
    return state
  },
  function mapDisPatchToProps(dispatch) {
    return { dispatch }
  }
)(App)
