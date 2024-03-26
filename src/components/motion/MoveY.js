import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

// set Component for Sidebar
const MoveY = ({ character, comp_id }) => {
  const [steps, setSteps] = useState(10);

  // Function used for moiving Sprint in Y direction
  const handleClick = () => {
    const el = document.getElementById(`${character.active}-div`);

    var top = el.offsetTop;
    el.style.position = "relative";
    el.style.top = top + steps + "px";
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        className={`flex gap-10 justify-center items-center text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
        onClick={() => handleClick()}
      >
        Set Y{" "}
        <div
          type="number"
          value={steps}
          className="rounded-2xl bg-white text-black px-2 py-1 mt-3 mb-1"

          onChange={(e) => setSteps(parseInt(e.target.value))}
        >
          10 
        </div>
        steps
      </div>
    </Paper>
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(MoveY);
