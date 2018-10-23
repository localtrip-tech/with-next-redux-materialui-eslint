import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Button, withStyles } from '@material-ui/core'


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class TextButton extends Component {

  render () {

    const { children, classes } = this.props;

    return (
      <Button color="primary" className={classes.button}>
        { children }
      </Button>
    )
  }
}


export default withStyles(styles)(TextButton);