import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slideshow from '../../Components/Slideshow'

class index extends Component {
  render () {
    const { isHome } = this.props
    if (!isHome) return null
    return (
      <Slideshow />
    )
  }
}

export default connect((state) => ({
  isHome: state.app.isHome
}), (dispatch) => ({}))(index)
