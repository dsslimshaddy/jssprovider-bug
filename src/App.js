import Div1 from './switch';
import Div2 from './switch2';
import Div3 from './switch3';
import { withRouter } from 'react-router';

import React from 'react';
import {render} from 'react-dom';

import {
  Switch,
  Route,
} from 'react-router-dom'

import createGenerateClassName from 'material-ui/styles/createGenerateClassName';
import { JssProvider } from 'react-jss';
import jss  from 'jss';
import preset from 'jss-preset-default';
import { Paper } from 'material-ui';

jss.setup(preset())
//jss.options.createGenerateClassName = createGenerateClassName
jss.options.insertionPoint = 'jss'

class BasicExample extends React.Component{
   render(){
     return(
	 <JssProvider jss={jss}>
	    <Paper>
              <Div3 />
		 <main>
		      <Switch>
		      <Route exact path="/" component={Div1}/>
		      <Route path="/red" component={Div2}/>
		      </Switch>
		  </main>
	    </Paper>
	</JssProvider>       
     );
   }
}

export default withRouter(BasicExample);
