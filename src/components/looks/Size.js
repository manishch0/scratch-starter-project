import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import '../CatSprite.css'

const Size = ({ character, comp_id }) => {
  const [state, setState] = useState({
    scale: 2,
  });
  // To change Size of Sprint
  const changeSize = () => {
    const el = document.getElementById(character.active);
    el.style.transform = `scale(${state.scale})`;
  };

  return (
    <Paper >
      <div className="text-center rounded bg-purple-500 p-2 my-3  ">
        <div className="grid grid-cols-2 my-2">
          <div
          id={comp_id}
          className="text-center bg-purple-500  text-white   text-sm cursor-pointer"
          onClick={() => changeSize()}
        >
         Change size by 
        </div>
          <input
            className="mx-2 p-1 py-0 text-center rounded-2xl w-14"
            type="number"
            value={state.scale}
            onChange={(e) =>
              setState({ ...state, scale: parseInt(e.target.value) })
            }
          />
        </div>
      
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

export default connect(mapStateToProps)(Size);
