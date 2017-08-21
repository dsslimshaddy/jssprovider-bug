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

class Div1 extends React.Component{
  constructor(props){
    super(props);
   this.state = {
      show: false
   }
  }
  render(){
   const {classes} = this.props;
   return (
     <Paper className={`${classes.root} ${classes.boot}`} onClick={()=>{
            this.setState({show: true })
        }}>
        {(this.state.show) ? <Div3 /> : null}
        Im red background blue text
        <Div3 />
        <Link to="/red">GOTO /red</Link>
     </Paper>
   );
 } 
}

export default withStyles(styleSheet)(Div1);
