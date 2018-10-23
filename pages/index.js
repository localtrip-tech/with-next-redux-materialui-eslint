import React from 'react'
import {connect} from 'react-redux'
import {startClock, serverRenderClock} from '../actions'
import {initializeStore as reduxStore} from '../store'
import TextButton from '../components/common/TextButton';

class Index extends React.Component {
  static getInitialProps ({ reduxactions, req }) {
    return {}
  }

  render () {
    return (
      <div>
        <TextButton>Primary</TextButton>
      </div>
    )
  }
}

export default connect()(Index)
