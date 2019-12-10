import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import {
  Grid,
  Icon,
  Header,
  Image,
  List,
  Button,
  Container,
  Card,
  Item,
  Divider
} from 'semantic-ui-react'
import {Helmet} from 'react-helmet'
import Immutable from 'seamless-immutable'
import _ from 'lodash'
import BreadcrumbCustom from '../BreadcrumbCustom'
import Moment from 'moment'

class PageEventDetailLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeItemBottomMenu: '1',
      breadcrumb: Immutable.asMutable(this.props.breadcrumb, { deep: true })
    }
  }
  componentWillMount () {
    console.log('componentWillMounts')
    this.setState({
      username: this.props.username
    })
  }
  componentDidUpdate (prevProps, prevState) {
    if (!_.isEqual(prevProps.breadcrumb, this.props.breadcrumb)) {
      this.setState({
        breadcrumb: Immutable.asMutable(this.props.breadcrumb, { deep: true })
      })
    }
  }
  componentDidMount () {
  }
  render () {
    const upcomingEvent = this.props.dataDetail
    return (
      <div>
        <Helmet>
          <title>Events - Prisma SDA Church</title>
        </Helmet>
        <Container style={{minHeight: window.innerHeight - 75}}>
          <Grid container style={{ padding: '1em 0em' }} stackable>
            {this.state.breadcrumb && (
              <Grid.Row>
                <Grid.Column>
                  <BreadcrumbCustom breadcrumb={this.state.breadcrumb} />
                </Grid.Column>
              </Grid.Row>
            )}
            <Grid.Row>
              <Grid.Column>
                <Header as='h3' style={{ fontSize: '2em' }}>Prisdac Event</Header>
                {/* <Image bordered rounded style={{width: '100%'}} src='https://react.semantic-ui.com/images/wireframe/white-image.png' /> */}
                {upcomingEvent && <Card
                  onClick={() => this.props.history.push(`/event/${upcomingEvent.event_slug}`)}
                  style={{width: '100%'}}
                  image={upcomingEvent.event_img}
                  header={upcomingEvent.event_title}
                  description={upcomingEvent.event_desc}
                  extra={(<List>
                    <List.Item icon='calendar alternate' content={Moment(parseInt(upcomingEvent.event_date || '0')).format('LLL').toString()} />
                    <List.Item icon='marker' content={upcomingEvent.event_address} />
                    <List.Item icon='building' content={upcomingEvent.event_vanue} />
                  </List>)}
                />}
              </Grid.Column>
            </Grid.Row>
            {/* <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Check Them Out</Button>
              </Grid.Column>
            </Grid.Row> */}
          </Grid>
        </Container>
        {/* <Segment style={{ padding: '2em 0em' }} vertical>
            <Container text>
              <ImageGallery items={images} showIndex showBullets thumbnailPosition='left' />
            </Container>
          </Segment> */}
        {this.props.footer}
      </div>
    )
  }
}

export default PageEventDetailLayout
