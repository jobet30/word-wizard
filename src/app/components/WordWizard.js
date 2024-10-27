import React from "react";
import PropTypes from "prop-types";

/**
 * WordWizard component that displays the game title and a start button.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onStart - Callback function to start the game.
 * @returns {JSX.Element} The rendered component.
 *
 * @author Jobet P. Casquejo
 * @version 1.0.0
 * @since 1.0.0
 */
const WordWizard = ({ onStart }) => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">Word Wizard</h1>
      <button
        onClick={onStart}
        className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Start Game
      </button>
    </div>
  );
};
WordWizard.propTypes = {
  onStart: PropTypes.func.isRequired,
};

export default WordWizard;
