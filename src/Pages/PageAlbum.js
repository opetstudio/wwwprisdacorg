import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import Immutable from 'seamless-immutable'
import _ from 'lodash'
import Footer1 from '../Containers/Footer/footer1'
import ContentIframe from '../Components/ContentIframe'
import AlbumActions, {AlbumSelectors} from '../Containers/Album/redux'
import ListAlbum from '../Containers/Album/ListAlbum'
import AlbumLayout from '../Components/Album/AlbumLayout'
import AlbumgalleryActions, {AlbumgallerySelectors} from '../Containers/Albumgallery/redux'

export default class PageAlbum extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render () {
      const { history } = this.props
      return <ListAlbum history={history} />
    }
}
