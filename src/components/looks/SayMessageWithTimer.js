import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const SayMessageWithTimer = ({ character, comp_id }) => {
  const [state, setState] = useState({
    show_msg: false,
    timer_message: "Hello!",
    timer_for_msg: 2,
  });

  /* Display Message with Timer */
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    el2.style.display = "none";
    if (state.show_msg) {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true });

    el.style.display = "block";
    el.style.position = "relative";
    el.classList.add("rounded-2xl");

    el.innerHTML = state.timer_message;
    window.setTimeout(() => {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
    }, state.timer_for_msg * 1000);
  };

  return (
    <Paper >
      <div className="flex gap-4  w-56.1 h-12 justify-center items-center rounded text-center bg-purple-500 p-2 my-3">
        <div className="flex justify-center items-center gap-2 my-2">

          <div
            id={comp_id}
            className="text-center bg-purple-500  text-white px-2 py-1 my-2 text-sm cursor-pointer"
            onClick={() => displayMessage()}
          >
            {`Say`}
          </div>
          <div>
            <input
              className="text-center rounded-2xl w-12 h-6"
              type="text"
              value={state.timer_message}
              onChange={(e) => {
                e.target.value.length > 0 &&
                  setState({ ...state, timer_message: e.target.value });
              }}
            />
          </div>

          <div className="flex justify-center items-center my-2">
            <div className="text-white">for</div>

            <input
              className="mx-2 p-1 py-0 text-center rounded-2xl w-12"
              type="number"
              value={state.timer_for_msg}
              onChange={(e) => {
                parseInt(e.target.value) > 0 &&
                  setState({
                    ...state,
                    timer_for_msg: parseInt(e.target.value),
                  });
              }}
            />
            <div className="text-white">{"seconds"}</div>
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

export default connect(mapStateToProps)(SayMessageWithTimer);
