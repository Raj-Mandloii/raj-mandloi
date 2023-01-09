import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "0px",color:"wheat"  }}>
      <h1 className="project-heading" style={{ paddingBottom: "10px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
      className="project-heading"
       style={{width:"100%"}}
        username="Raj-Mandloii"
        
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={11} 
      />
    </Row>
  );
}

export default Github;