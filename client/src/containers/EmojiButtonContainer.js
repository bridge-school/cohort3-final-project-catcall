import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Image from '../components/Image';
import { updateRating } from '../actions/index';

const EmojiButton = ({ selectedRating, updateRating, reaction }) => {
  const isChecked = selectedRating === reaction;
  return (
    <label>
    <Image src={`/imgs/${reaction}.png`} alt={reaction} role="button" />
    <Input display="none" type="radio" inputValue={reaction} checked={isChecked} handleChange={(e) => updateRating(e.target.value)}/>
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
  updateRating: PropTypes.func.isRequired,
  reaction: PropTypes.string.isRequired
}

const EmojiButtonContainer = connect(mapStateToProps, mapDispatchToProps)(EmojiButton);

export default EmojiButtonContainer;
