import React from 'react';
import { connect } from 'react-redux';
import { updateRating } from '../actions/index';

const EmojiButton = ({ selectedRating, updateRating, reaction }) => {
  const isChecked = selectedRating === reaction;
  const emojiReaction = `:${reaction}:`;
  return (
    <label>
      <input type="radio" value={reaction} checked={isChecked} onChange={(e) => updateRating(e.target.value)}/>
      { emojiReaction }
    </label>
  );
};

const mapStateToProps = storeState => ({
  selectedRating: storeState.rootReducer.ratingReducer.selectedRating,
});

const mapDispatchToProps = {
  updateRating
};

const EmojiButtonContainer = connect(mapStateToProps, mapDispatchToProps)(EmojiButton);

export default EmojiButtonContainer;
