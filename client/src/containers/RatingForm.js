/** Report Page **/
// (1) "Please state how you felt when the incident happened"
// (2) emoji list of five emoji buttons
// (3) none of the emojis are pre-selected**
// (4) when emoji is pressed/clicked, there is some visual indicator that it was selected
// (5) a user can change their selection by pressing another emoji

//**Technical Acceptance Criteria**
// (6) radio buttons hooked up to the redux store


import React from 'react';
import { connect } from 'react-redux';
import { updateRating } from '../actions/index';

const RatingForm = ({selectedRating, updateRating}) => {
  return (
    <form>
      <div className="emoji-buttons">
        <label>
          <input type="radio" value="1" checked={selectedRating === "1"} onChange={(e) => updateRating(e.target.value)}/>
          Option1
        </label>
        <label>
          <input type="radio" value="2" checked={selectedRating === "2"} onChange={(e) => updateRating(e.target.value)}/>
          Option2
        </label>
        <label>
          <input type="radio" value="3" checked={selectedRating === "3"} onChange={(e) => updateRating(e.target.value)}/>
          Option3
        </label>
        <label>
          <input type="radio" value="4" checked={selectedRating === "4"} onChange={(e) => updateRating(e.target.value)}/>
          Option4
        </label>
        <label>
          <input type="radio" value="5" checked={selectedRating === "5"} onChange={(e) => updateRating(e.target.value)}/>
          Option5
        </label>
      </div>
    </form>
  );
};

const mapStateToProps = storeState => ({
  selectedRating: storeState.rootReducer.ratingReducer.selectedRating,
});

const mapDispatchToProps = {
  updateRating
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingForm);
