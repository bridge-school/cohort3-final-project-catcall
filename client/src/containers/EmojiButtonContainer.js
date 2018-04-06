import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateRating } from '../actions/index';

const EmojiButton = ({ selectedRating, updateRating, reaction }) => {
  const isChecked = selectedRating === reaction;
  return (
    <label className="emoji-button">
      <img src={`/imgs/${reaction}.png`} alt={reaction} role="button" />
      <input type="radio" value={reaction} checked={isChecked} onChange={(e) => updateRating(e.target.value)}/>
    </label>
  );
};

const mapStateToProps = storeState => ({
  selectedRating: storeState.rootReducer.ratingReducer.selectedRating,
});

const mapDispatchToProps = {
  updateRating
};

EmojiButton.propTypes = {
  updateRating: PropTypes.function.isRequired,
  reaction: PropTypes.string.isRequired
}

const EmojiButtonContainer = connect(mapStateToProps, mapDispatchToProps)(EmojiButton);

export default EmojiButtonContainer;
