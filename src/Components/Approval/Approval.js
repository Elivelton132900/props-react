import React from "react";
import "./approval.css";

const Approval = (props) => {
  return (
    <div className="containerApproval">
        <div className="prop">
            {props.children}
        </div>
        <div className="botoes">
            <button className="aprovar">Aprovar</button>
            <button className="rejeitar">Rejeitar</button>
        </div>
    </div>
  );
};

export default Approval;
