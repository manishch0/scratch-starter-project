import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import '../CatSprite.css'

const ThinkMessage = ({ character, comp_id }) => {
  const [state, setState] = useState({
    show_msg: false,
    message: "Hmm...",
    character_id: "",
  });
  /* Display Think Message */
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    if (state.show_msg && state.character_id === character.active) {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
      el2.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true });
    el.style.display = "block";
    el.style.position = "relative";
    el.classList.add("rounded-2xl");


    el2.style.display = "block";
    el2.style.position = "relative";
    // el.classList.add("rounded-2xl");


    window.clearTimeout();
    el.innerHTML = state.message;
  };

  return (
    <Paper >
      <div className="rounded w-40 h-12 flex justify-center items-center text-center bg-purple-500 p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div
          id={comp_id}
          className="flex text-center w-12 flex-row flex-wrap bg-purple-500 rounded-2xl text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => displayMessage()}
        >
          {`Think`}
        </div>
          <input
            className="p-1 py-0 w-16 -mx-1 h-8 mt-2 text-center rounded-2xl"
            type="text"
            value={state.message}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ ...state, message: e.target.value });
            }}
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

export default connect(mapStateToProps)(ThinkMessage);
