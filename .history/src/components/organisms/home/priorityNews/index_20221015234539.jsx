import React from "react";
import Highlighted from './highlited'
import Regular from "./regular";
const PriorityNews = () => {
  return (
    <div className="homeSection1_2">
      <div class="flex-container">
        <div className="impImage">
          <Highlighted/>
        </div>
        <div className="listitems">
          <Regular/>
        </div>
      </div>
    </div>
  );
};

export default PriorityNews;
