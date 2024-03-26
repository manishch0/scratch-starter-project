import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import '../CatSprite.css'

const SayMessage = ({ character, comp_id }) => {
  const [state, setState] = useState({
    show_msg: false,
    message: "Hello!",
    character_id: "",
  });
  /* Display Message */
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);

    if (state.show_msg && state.character_id === character.active) {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true });
    el.style.display = "block";
    el.style.position = "relative";
    el.classList.add("rounded-2xl");
    el2.style.display = "none";

    window.clearTimeout();
    el.innerHTML = state.message;
  };

  return (
    <Paper>
      <div className="w-40 h-12 flex justify-center items-center rounded text-center bg-purple-500 p-1 ">
        <div className="grid grid-cols-2 my-2 m-auto">
          <div
          id={comp_id}
          className="flex text-center w-12 rounded-2xl flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => displayMessage()}
        >
          {`Say`}
        </div>
        <div>

          <input
            className="mx-2 p-1 py-0 mt-1 text-center rounded-2xl w-12 h-8"
            type="text"
            value={state.message}
            onChange={(e) => {
              e.target.value.length > 0 &&
              setState({ ...state, message: e.target.value });
            }}
            />
            </div>
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

export default connect(mapStateToProps)(SayMessage);
