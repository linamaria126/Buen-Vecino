import React from 'react'
import NavbarHome from '../component/NavbarHome.jsx';
import Content from '../component/content.jsx';
import Signupbutton from '../component/signupbutton.jsx';


const Home = () => {
	return (
		<div>
			<NavbarHome />
			<Signupbutton />
			<Content />
		</div>



	)
}

export default Home;
