import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

// Set Component for Sidebar
const Move = ({ character, comp_id }) => {
  const [steps, setSteps] = useState(10);

  // Function used for moiving Sprint
  const handleClick = () => {
    const el = document.getElementById(`${character.active}-div`);

    var left = el.offsetLeft;
    el.style.position = "relative";
    el.style.left = left + steps + "px";
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        className={`flex gap-6 text-center rounded items-center justify-center bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
        onClick={() => handleClick()}
      >
        Move
        <div
          type="number"
          value={steps}
          onChange={(e) => setSteps(parseInt(e.target.value))}
          className="rounded-2xl bg-white text-black px-2 py-1 mt-3 mb-1"
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

export default connect(mapStateToProps)(Move);
