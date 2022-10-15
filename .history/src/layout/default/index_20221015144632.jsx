import React from "react";
import ProthomAlo from "../../components/atoms/icons/prothomAlo";
import "../../assets/styles/style.scss";

const DefaultLayout = (props) => {
  return (
    <>
      <div className="header">
        <div className="topNav">
        <div className="icon">
          <ProthomAlo />
        </div>
        </div>
        
      </div>
      <div>{props.children}</div>
    </>
  );
};

export default DefaultLayout;
