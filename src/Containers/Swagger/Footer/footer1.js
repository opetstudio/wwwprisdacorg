import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import Immutable from 'seamless-immutable'
import _ from 'lodash'

import Footer1Layout from '../../../Components/Swagger/Footer/footer1'

class TheComponent extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    constructor (props) {
      super(props)
      this.state = {}
    }
    render () {
      return <Footer1Layout />
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheComponent)
