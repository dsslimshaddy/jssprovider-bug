# jssprovider-bug


## Start

`yarn install`

`yarn run start:prod` - production

`yarn run start` - development

Go to `localhost:3030`


1. Goto /red
2. Goto / or press back button

the div `Im blue background white text` becomes red background.


It is happening when all these below conditions are met

- Only in production
- When jss provider is there 
- When chaning routes
- when there is a material-ui element outside of route


It wont happen when

- Try removing jssprovider
- Try in `yarn run start` i.e in dev env
- Try removing the material-ui elements outside routes

i.e replace the class in `App.js` with this
```
class BasicExample extends React.Component{
   render(){
     return(
	 <JssProvider jss={jss}>
		 <main>
		      <Switch>
		      <Route exact path="/" component={Div1}/>
		      <Route path="/red" component={Div2}/>
		      </Switch>
		  </main>
	</JssProvider>       
     );
   }
}

```
