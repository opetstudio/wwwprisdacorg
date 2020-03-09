import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
  Grid,
  Segment,
  Header,
  Image,
  Button,
  Container,
  List,
  Divider,
  Pagination
} from 'semantic-ui-react'
import {Helmet} from 'react-helmet'
import Immutable from 'seamless-immutable'
import _ from 'lodash'

import BreadcrumbCustom from '../BreadcrumbCustom'

class AlbumLayout extends Component {
  render () {
    const {
      handleOnPageChange,
      defaultActivePage,
      totalPages,
      breadcrumb,
      allDataArr,
      history,
      footer
    } = this.props
    return (
      <div>
        <Helmet>
          <title>Album - Prisma SDA Church</title>
        </Helmet>
        <Container style={{minHeight: window.innerHeight - 75}}>
          <Grid container style={{ padding: '1em 0em' }}>
            {breadcrumb && (
              <Grid.Row>
                <Grid.Column>
                  <BreadcrumbCustom breadcrumb={breadcrumb} />
                </Grid.Column>
              </Grid.Row>
            )}
            <Grid.Row>
              <Grid.Column>
                {
                  (allDataArr).map(r => {
                    return (
                      <div key={r._id} onClick={() => history.push('/gallery/' + r._id)}>
                        <Image src={r.data_src} size='tiny' verticalAlign='middle' /> <span>{r.album_title}</span>
                        <Divider />
                      </div>
                    )
                  })
                }
              </Grid.Column>
            </Grid.Row>
            <Grid.Row textAlign='center'>
              <Grid.Column>
                <Pagination
                  defaultActivePage={defaultActivePage}
                  totalPages={10}
                  onPageChange={handleOnPageChange}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        {/* <Segment style={{ padding: '2em 0em' }} vertical>
          <Container text>
            <ImageGallery items={images} showIndex showBullets thumbnailPosition='left' />
          </Container>
        </Segment> */}
        {footer}
      </div>
    )
  }
}

export default AlbumLayout
