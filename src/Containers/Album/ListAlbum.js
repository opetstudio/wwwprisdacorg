import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import Immutable from 'seamless-immutable'
import _ from 'lodash'
import Footer1 from '../Footer/footer1'
import ContentIframe from '../../Components/ContentIframe'
import AlbumActions, {AlbumSelectors} from './redux'
import AlbumLayout from '../../Components/Album/AlbumLayout'
import AlbumgalleryActions, {AlbumgallerySelectors} from '../Albumgallery/redux'

class TheComponent extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    constructor (props) {
      super(props)
      this.state = {}
    }
    handleOnPageChange (event, data) {
      console.log('event===>', event)
      console.log('data===>', data)
    }
    componentWillMount () {
      const { fetchAll, fetchAllAlbumgallery } = this.props
      fetchAll({})
      fetchAllAlbumgallery({})
    }
    render () {
      const { allDataArr, history } = this.props
      return <AlbumLayout
        footer={(<Footer1 />)}
        allDataArr={allDataArr}
        history={history}
        breadcrumb={[
          { key: 'key-1', link: '/', label: 'Home' },
          { key: 'key-2', link: null, label: 'Gallery' }
        ]}
        handleOnPageChange={this.handleOnPageChange}
        defaultActivePage={1}
        totalPages={10}
      />
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    allDataArr: AlbumSelectors.getAllDataArr(state.album),
    history: ownProps.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAll: (query) => dispatch(AlbumActions.albumRequestAll(query)),
    fetchAllAlbumgallery: (query) => dispatch(AlbumgalleryActions.albumgalleryRequestAll(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheComponent)
