import React from 'react'
import {connect} from 'react-redux'
import TextButton from '../containers/demo';

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
