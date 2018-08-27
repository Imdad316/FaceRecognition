import React from 'react';

const Signin = ({ onRouteChange}) => {
  return (
  	<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
		    <main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
			      </div>
			    </fieldset>
			    <div className="">
			      <input 
			      	onClick = {() =>onRouteChange('home')}
				    className="f6 dib black bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--black-80 bg-transparent pointer" 
				    type="submit" 
			        value="Sign in"/>
			    </div>
			   
			  </div>
		</main>
	</article>
  );
}

export default Signin;