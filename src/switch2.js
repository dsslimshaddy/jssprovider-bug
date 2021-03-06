// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { styleSheet } from './constant.js';
import { Paper } from 'material-ui';
import { Link } from 'react-router-dom';

function Div2(props) {
  const {classes} = props;
  return (
    <Paper className={classes.root}>
       Im blue background white text
       <br />
       <Link className={classes.root} to="/">GOTO /</Link>
    </Paper>
  );
}

export default withStyles(styleSheet)(Div2);
