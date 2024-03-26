import React, { useState } from "react";
import { connect } from "react-redux";
import RedoIcon from "@material-ui/icons/Redo";
import Paper from "@material-ui/core/Paper";
import { setCharacterAngle } from "../redux/character/action";

const TurnClockWise = ({ character, characterAngle, comp_id }) => {
  const [angle, setAngle] = useState(15);

  // handle turn clockwise component
  const handleClick = () => {
    const el = document.getElementById(character.active);
    const character_angle = character.characters.find(
      (x) => x.id === character.active
    );
    if (character_angle) {
      el.style.transform = `rotate(${character_angle.angle + angle}deg)`;
      characterAngle(character_angle.angle + angle);
    }
  };

  return (
    <Paper elevation={3}>
      <div className="flex justify-center items-center text-center rounded bg-blue-500 p-2 my-3">
        <div className="grid grid-cols-2">
          <div className="text-white">Turn</div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div>
            <RedoIcon className="mt-1 text-white " />
          </div>
          <div
            id={comp_id}
            className={`flex justify-center items-center mx-auto gap-2  px-2 py-1 mt-3 mb-1 text-sm cursor-pointer`}
            onClick={() => handleClick()}
          >
            <div className=" rounded-2xl text-black bg-white px-2 py-1 ">
              {angle}
            </div>
            <div className="text-white">{"Degrees"}</div>
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

// mapping function to component
const mapDispatchToProps = (dispatch) => {
  return {
    characterAngle: (angle) => dispatch(setCharacterAngle(angle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnClockWise);
