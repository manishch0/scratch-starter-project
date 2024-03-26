import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import { setCharacterAngle } from "../redux/character/action";

const PointInDirection = ({ character, characterAngle, comp_id }) => {
  const [angle, setAngle] = useState(90);

  // handle anti-clockwise rotation
  const handleClick = () => {
    let anti_angle = -1 * angle;
    const el = document.getElementById(character.active);
    const character_angle = character.characters.find(
      (x) => x.id === character.active
    );
    if (character_angle) {
      el.style.transform = `rotate(${character_angle.angle + anti_angle}deg)`;
      characterAngle(character_angle.angle + anti_angle);
    }
  };

  return (
    <Paper elevation={3}>
      <div className="flex gap-6 justify-center items-center text-center rounded bg-blue-300 p-2 ">
        <div className="">
          <div className="text-white text-sm">Point in direction</div>
        </div>
        <div
          id={comp_id}
          className={`flex bg-blue-700 px-2 py-1 mt-3 mb-1 text-sm cursor-pointer rounded-2xl bg-white `}
          onClick={() => handleClick()}
        >
          <div className="flex mx-auto rounded-2xl text-black">
            {angle} 
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

export default connect(mapStateToProps, mapDispatchToProps)(PointInDirection);
