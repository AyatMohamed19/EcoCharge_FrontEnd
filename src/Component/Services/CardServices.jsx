import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useNavigate } from 'react-router';
import Modal from 'react-bootstrap/Modal';

import "./style.css";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Nearest Station',
    imgPath:
      '/ServiceImages/map.jpeg',
  },
  {
    label: 'Charging Car',
    imgPath:
      '/ServiceImages/charge.jpg',
  },
  {
    label: 'Pay Online',
    imgPath:
      '/ServiceImages/pay1.jpg',
  }
];

function SwipeableTextMobileStepper() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    // setTimeout(()=>{
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // },3000);
  };

  const handleBack = () => {
    // setTimeout(()=>{
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // },3000);
  };

  const handleStepChange = (step) => {
    
    // setTimeout(()=>{
        setActiveStep(step);
    // },3000);
  };
  let navigate = useNavigate();

  const handleNearestStation=()=>{
    navigate("/nearestStation");
  }

  return (
    <div style={{textAlign:"center",margin:"auto"}}>
    <Box sx={{ maxWidth: 800, flexGrow: 1 }} style={{margin:"auto",backgroundColor:"rgb(234, 231, 177)",marginTop:"4vh",marginBottom:"6vh"}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <h5 style={{color:"rgb(45, 159, 124)",fontFamily:"Lucida Calligraphy",fontWeight:"bolder"}}>{images[activeStep].label}</h5>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
         <div className="card-container">
          <div key={step.label} className="float-layout" >
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "300px",
                  display: 'inline',
                  maxWidth: "400px",
                  overflow: 'hidden',
                  backgroundColor:"black",
                  float:"right",
                  width: '60%',
                  marginRight:"0px"
                }}
                src={step.imgPath}
                alt={step.label}
                className="card-image"
              />
            ) : null}
            
           { images[activeStep].label==="Nearest Station"?
            <div className='card-desc' style={{display:"block",width:"50%"}}>
                <p className='ServiceDescription' >
                EcoCharge Provides a service to find the nearest station for you but you must log in first               
                 </p>
                <button onClick={handleNearestStation} className='btnTag btn btn-primary btn-lg sendBtn '>Find Nearest Station</button>

            </div>
:""}
{
  images[activeStep].label==="Charging Car"?
  <div style={{display:"inline"}}>
                <p className='ServiceDescription'>
                If your car's battery runs out, EcoCharge offers the service of charging it at your location.
                </p>
                <Button onClick={handleShow}  className='btnTag btn btn-primary btn-lg sendBtn text-white py-1 px-4' style={{fontFamily:"Lucida Calligraphy"}}>Call Now</Button>
        

            </div>:""
}

{ images[activeStep].label==="Pay Online"?
            <div style={{display:"inline"}}>
                <p className='ServiceDescription'>
                Payments can be conveniently made online using your Visa card but you must log in first and choose the station you want to charge from it
                </p>

            </div>
:""}
          </div>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            style={{color: "rgb(45, 159, 124)"}}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} style={{color: "rgb(45, 159, 124)"}}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Call Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>You Can Call Our In (617) 557-0089</Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary' onClick={handleClose}>
            Close
          </button>
     
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SwipeableTextMobileStepper;