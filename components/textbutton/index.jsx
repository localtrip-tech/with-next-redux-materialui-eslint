import React, {Component} from 'react'
import PropTypes from 'prop-types'
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
  static propTypes = {
    children: PropTypes.any.isRequired,
    color: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.function
  }

  render () {

    const { children, classes, onClick } = this.props;

    return (
      <Button color="primary" className={classes.button} onClick={() => onClick()}>
        { children }
      </Button>
    )
  }
}


export default withStyles(styles)(TextButton);