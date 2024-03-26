import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

// change Component for Sidebar
const ChangeByY = ({ character, comp_id }) => {
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
        className={`flex gap-10 text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
        onClick={() => handleClick()}
      >
        Change by Y
        <input
          type="number"
          className="text-black text-center w-12 mx-1 py-1 rounded-2xl bg-white"
          value={steps}
          onChange={(e) => setSteps(parseInt(e.target.value))}
        />
       
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

export default connect(mapStateToProps)(ChangeByY);
