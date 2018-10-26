import React from 'react';
import { connect } from 'react-redux';
import TextButton from '../../components/textbutton';
import buttonClicked from './action';


const Demo = props => (
  <React.Fragment>
    <TextButton onClick={() => props.buttonClicked()}>Primary</TextButton>
    <p>{`You have clicked the button ${props.count} times.`}</p>
  </React.Fragment>
);


const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  buttonClicked: () => dispatch(buttonClicked()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
