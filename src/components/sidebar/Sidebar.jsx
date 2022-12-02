import React,{useContext} from "react";
import { Progress, ButtonGroup, Button, Row, Col,Steps, Panel } from "rsuite";
import { StepContext } from "../DaoForm";
import "./Sidebar.css";

const Sidebar = () => {
  const {progress,currentStep} = useContext(StepContext);
  const [percent, setPercent] = React.useState(30);
  const [step, setStep] = React.useState(0);
  const decline = () => {
    const value = Math.max(percent - 10, 0);
    setPercent(value);
  };

  const increase = () => {
    const value = Math.min(percent + 10, 100);
    setPercent(value);
  };

  const onChange = nextStep => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);



  const status = percent === 100 ? "success" : null;
  const color = percent === 100 ? "#52c41a" : "#3385ff";

  return (
    <div className="sidemain col-lg-2">
      <div style={{ width: 200, height: 200, marginTop: 10, marginLeft: 55 }}>
        <Progress.Circle
          percent={progress}
          strokeColor={color}
          status={status}
        />
         <Panel style={{paddingLeft:52}} header={`Steps: ${step + 1}/4`}>
      </Panel>
      </div>
      <div className="stepSetup">
      <Steps className="stepPanel" vertical current={currentStep}>
        <Steps.Item title="Claim domain" />
        <Steps.Item title="Configure template" />
        <Steps.Item title="Review information" />
        <Steps.Item title="Launch organization" />
      </Steps>
      <hr />
     
    </div>
    </div>
  );
};

export default Sidebar;
