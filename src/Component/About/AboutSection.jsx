import React from "react";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../About/charge.png";
import "../About/about-section.css";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

import "./style.css"

const AboutSection = ({ aboutClass }) => {
  return (
		<section
			className='about__section'
			style={
				aboutClass === 'aboutPage'
					? { marginTop: '0px' }
					: { marginTop: '280px' }
			}
		>
			<Container>
				<Row>
					<Col lg='6' md='6'>
	
							<h2 className='section__title'>Our Mission Is To Charge Your Electric Vehicle Properly.</h2>
							<p className='section__description'>
								&#9734; 	Access control put an electric vehicle charge.
							</p>
							<div>&#9734; 	Selecting a Type of Charger.</div>
							<div>&#9734; 	
							Find a 240-volt charger for a quicker way to charge a car.</div>
							<div>&#9734; 	
							Plug your car into a 480-volt station for the fastest charging. </div>
							<Link to='/'>
								<div style={{textAlign:"center",marginTop:"3rem"}}>

        {/* <Button variant="contained" className="btnTagg" style={{borderRaduis:"30px"}}>Back to home</Button> */}
		{/* <button className="btnTagg">Bac</button> */}
								</div>
      </Link>
					</Col>

					<Col lg='6' md='6'>
						<div className='about__img'>
							<img src={aboutImg} alt='about' className='w-100' />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default AboutSection;
