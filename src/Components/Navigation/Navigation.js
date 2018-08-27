import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) =>{
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='f6 dib black bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--black-50 pointer'>Sign Out</p>
        </nav>
      );
    } else {
      return (
       		<nav className="flex justify-between bb b--white-10">
				<p className="link white-70 hover-white no-underline flex items-center pa3"></p>
				<div className="flex-grow pa3 flex items-center">
					<p onClick={() => onRouteChange('signin')} className="f6 dib black bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--black-50 pointer">Sign In</p>
					<p onClick={() => onRouteChange('register')} className="f6 dib black bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--black-50 pointer">Register</p>
  				</div>
			</nav>
      );
    }
}

export default Navigation;