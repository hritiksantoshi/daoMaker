import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from 'react-bootstrap/InputGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import "./Voting.css";
import { StepContext } from "../../App";

const Input = styled(MuiInput)`
  width: 42px;
`;


const Voting = () => {
  const { data, setData, currentStep , setStep } = useContext(StepContext);
  const [value, setValue] = React.useState(50);

  const handleSliderChange = (event) => {
    let value = !isNaN(parseInt(event.target.value))?parseInt(event.target.value):0;

    setData({...data,votingPercentage:value})
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
      Support is the relative percentage of tokens that are required to vote “Yes” for a proposal to be approved. For example, if “Support” is set to 50%, then more than 50% of the tokens used to vote on a proposal must vote “Yes” for it to pass.
      </Popover.Body>
    </Popover>
  );

  const Votpopover = (
    <Popover id="popover-basic">
      <Popover.Body>
      Vote Duration is the length of time that the vote will be open for participation. For example, if the Vote Duration is set to 24 hours, then token holders have 24 hours to participate in the vote.
      </Popover.Body>
    </Popover>
  );
  return (
    <div className="configTemp col-lg-10">
      <Form>
        <header className="Header">
          <h1 className="Headertxt">Configure template</h1>
          <div className="Headerinnerdiv">
            <span className="VotingScreen">
              Choose your
              <span className="VotingScreenlink">
                <a role="button" tabindex="-1" className="ButtonBaselink">
                  <div className="BadgeBase">
                    <span className="AppBadge"></span>
                    <span className="BadgeBaseV">Voting</span>
                  </div>
                </a>
              </span>
              settings below.
            </span>
          </div>
        </header>
        <div className="Field">
          Support %
          <OverlayTrigger trigger="click" placement="right" overlay={popover}>

        
          <button
            type="button"
            title="What is Support?"
            className="ButtonBase1"
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M11.5 4C9.025 4 7 5.966 7 8.369c-.007.462.425.892.9.892.476 0 .907-.43.9-.892 0-1.458 1.198-2.621 2.7-2.621 1.502 0 2.7 1.163 2.7 2.62.01 1.197-.624 1.81-1.51 2.622-.442.406-.933.83-1.35 1.384-.415.554-.74 1.275-.74 2.111-.007.462.425.892.9.892.476 0 .907-.43.9-.892 0-.431.13-.731.394-1.083.263-.351.673-.724 1.134-1.146.92-.845 2.08-1.753 2.072-3.887C16 5.983 13.97 4 11.5 4zm0 12.67c-.663 0-1.2.521-1.2 1.165 0 .643.537 1.165 1.2 1.165.663 0 1.2-.522 1.2-1.165s-.537-1.165-1.2-1.165z"
              ></path>
            </svg>
          </button>
          </OverlayTrigger>
        </div>
        
        <Box sx={{ width: 600 ,marginBottom:2}}>
      
      <Grid container spacing={2} alignItems="center">
        
        <Grid item xs>
          <Slider
            value={data.votingPercentage}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
        <InputGroup>
        <Form.Control id="per" size="lg" type="text" minLength={1} value={data.votingPercentage} maxLength={2} onChange={handleSliderChange}  />
        <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
          </InputGroup>
        </Grid>
      </Grid>
    </Box>

    <div className="Field">
          VOTE DURATION
          <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <button
            type="button"
            title="What is Support?"
            className="ButtonBase1"
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M11.5 4C9.025 4 7 5.966 7 8.369c-.007.462.425.892.9.892.476 0 .907-.43.9-.892 0-1.458 1.198-2.621 2.7-2.621 1.502 0 2.7 1.163 2.7 2.62.01 1.197-.624 1.81-1.51 2.622-.442.406-.933.83-1.35 1.384-.415.554-.74 1.275-.74 2.111-.007.462.425.892.9.892.476 0 .907-.43.9-.892 0-.431.13-.731.394-1.083.263-.351.673-.724 1.134-1.146.92-.845 2.08-1.753 2.072-3.887C16 5.983 13.97 4 11.5 4zm0 12.67c-.663 0-1.2.521-1.2 1.165 0 .643.537 1.165 1.2 1.165.663 0 1.2-.522 1.2-1.165s-.537-1.165-1.2-1.165z"
              ></path>
            </svg>
          </button>
          </OverlayTrigger>
        </div>
        <Row className="mb-3" style={{marginTop:28}}>
        <Form.Group as={Col} controlId="Days">
        <InputGroup>
          <Form.Control value = {data.votingPeriod.day} onChange={(e)=>setData({...data,votingPeriod: {...data.votingPeriod, day: e.target.value}})}/>
          <InputGroup.Text id="basic-addon2" >Days</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="Hours">
        <InputGroup>
          <Form.Control  value = {data.votingPeriod.hours}  onChange={(e)=>setData({...data,votingPeriod: {...data.votingPeriod, hours: e.target.value}})}/>
          <InputGroup.Text id="basic-addon2">Hours</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="minutes">
        <InputGroup>
          <Form.Control value = {data.votingPeriod.mins} onChange={(e)=>setData({...data,votingPeriod: {...data.votingPeriod, mins: e.target.value}})}/>
          <InputGroup.Text id="basic-addon2" >minutes</InputGroup.Text>
          </InputGroup>
        </Form.Group>
        </Row>    

        <section className="hfuhYh">
        The support and minimum approval thresholds are strict requirements, such that votes will only pass if they achieve approval percentages greater than these thresholds.
          </section>    
          <div className="Navigation">
            <button type="button" className="ButtonBase" onClick={()=>setStep(currentStep-1)}>
              <span className="Buttontxt">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="Navigationsvg"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.2"
                    d="M18.434 11.434H5.566a.566.566 0 000 1.132h12.869a.565.565 0 100-1.132z"
                  ></path>
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.2"
                    d="M6.366 12l4.426-4.426a.565.565 0 10-.8-.8L5.166 11.6a.566.566 0 000 .8l4.826 4.826a.564.564 0 00.8 0 .565.565 0 000-.8L6.366 12z"
                  ></path>
                </svg>
              </span>
              Back
            </button>
            <button  type="button" onClick={()=>setStep(currentStep+1)} disabled = {data.votingPeriod ==''} className="ButtonBase">
              Next: Configure template
            </button>
          </div> 
      </Form>
      
    </div>
  );
};

export default Voting;
