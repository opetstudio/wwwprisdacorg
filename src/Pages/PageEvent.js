import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import Immutable from 'seamless-immutable'
import _ from 'lodash'
import Event from '../Containers/Event/Event'
export default class PageEvent extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render () {
      const { history } = this.props
      return <Event history={history} />
    }
}
