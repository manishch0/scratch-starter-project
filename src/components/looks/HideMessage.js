import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import '../CatSprite.css'

const HideMessage = ({ character, comp_id }) => {
  /* Hide Message */
  const displayMessage = () => {
    window.clearTimeout();
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    el.style.display = "none";
    el2.style.display = "none";
  };

  return (
    <Paper>
      <div
        id={comp_id}
        onClick={() => displayMessage()}
        className="rounded bg-purple-500 text-center text-white max-w-content p-1 my-3 w-28 h-12 flex justify-center items-center"
      >
       {" Hide Message"}
      </div>
    </Paper>
  );
};

// mapping state to props
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(HideMessage);
