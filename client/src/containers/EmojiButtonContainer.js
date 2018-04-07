import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateRating } from '../actions/index';

const EmojiButton = ({ selectedRating, updateRating, reaction }) => {
  const isChecked = selectedRating === reaction;
  return (
    <span>
      <input
        checked={isChecked}
        className="emoji-button__radio"
        id={`emoji-radio--${reaction}`}
        onChange={(e) => updateRating(e.target.value)}
        type="radio"
        value={reaction}
      />
      <label
        className="emoji-button__label"
        htmlFor={`emoji-radio--${reaction}`}
      >
        <img
         src={`/imgs/${reaction}.png`}
         alt={reaction}
         role="button" />
      </label>
    </span>
  );
};

const mapStateToProps = storeState => ({
  selectedRating: storeState.rootReducer.ratingReducer.selectedRating,
});

const mapDispatchToProps = {
  updateRating
};

EmojiButton.propTypes = {
  updateRating: PropTypes.func.isRequired,
  reaction: PropTypes.string.isRequired
}

const EmojiButtonContainer = connect(mapStateToProps, mapDispatchToProps)(EmojiButton);

export default EmojiButtonContainer;
