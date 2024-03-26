import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import '../CatSprite.css'

const Hide = ({ character, comp_id }) => {
  // To handle hide component
  const handleDisplay = () => {
    const el = document.getElementById(character.active);
    el.style.display = "none";
  };
  return (
    <Paper >
      <div
        id={comp_id}
        className="text-center w-20 h-12 rounded flex justify-center items-center bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer "
        onClick={() => handleDisplay()}
      >
        Hide
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

export default connect(mapStateToProps)(Hide);
