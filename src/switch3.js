// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { styleSheet } from './constant.js';
import { Paper } from 'material-ui';
import { Link } from 'react-router-dom';
function SwitchButton(props) {
  const {classes} = props;
  return (
    <Paper className={classes.root}>
       Im blue background white text
    </Paper>
  );
}

SwitchButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(SwitchButton);
