// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Div3 from './switch3';
import { Paper } from 'material-ui';
import { Link } from 'react-router-dom';


const styleSheet = theme => ({ 
  root: {
    background: 'red'
  },
  boot: {
    color: 'blue',
  }
});

function SwitchButton(props) {
  const {classes} = props;
  return (
    <Paper className={`${classes.root} ${classes.boot}`}>
       Im red background blue text
       <Div3 />
       <Link to="/red">GOTO /red</Link>
    </Paper>
  );
}

SwitchButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(SwitchButton);
