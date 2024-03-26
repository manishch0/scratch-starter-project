import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import '../CatSprite.css'


const Show = ({ character, comp_id }) => {
  // To handle show component
  const handleDisplay = () => {
    const el = document.getElementById(character.active);
    el.style.display = "inline-block";
  };

  return (
    <Paper>
      <div
        id={comp_id}
        className="rounded w-20 h-12 text-center bg-purple-500 flex justify-center items-center text-white px-2 py-1 my-2 text-sm cursor-pointer "
        onClick={() => handleDisplay()}
      >
        Show
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

export default connect(mapStateToProps)(Show);
