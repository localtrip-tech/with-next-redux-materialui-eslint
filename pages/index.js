import React from 'react'
import TextButton from '../containers/demo';

class Index extends React.Component {
  static getInitialProps ({ reduxactions, req }) {
    return {}
  }

  render () {
    return (
      <div className="demo-page">
        <TextButton>Primary</TextButton>
        <style jsx>{`
          .demo-page {
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}

export default Index
