import React from 'react';
import { connect } from 'react-redux';
import { handleSubmitReport } from '../actions/index';
import EmojiButtonContainer from './EmojiButtonContainer';
import Button from '../components/Button';

const RatingForm = ({ handleSubmitReport, push, state }) => {
  
  const doSubmission = e => {
    // e.preventDefault();
    handleSubmitReport();
    push('/data');
  }

  const validForm = state.loc.lat && state.loc.lng && state.selectedRating

  return (
    <form>
      <h2>Please state how you felt when the incident happened</h2>
      <div className="emoji-buttons">
        <EmojiButtonContainer reaction="expressionless" />
        <EmojiButtonContainer reaction="anguished" />
        <EmojiButtonContainer reaction="angry" />
        <EmojiButtonContainer reaction="fearful" />
        <EmojiButtonContainer reaction="scream" />
      </div>
      <Button bsStyle="primary" onClick={doSubmission} disabled={!validForm}>Submit</Button>
    </form>
  )
}

const mapStateToProps = state => ({
  state: {
    loc: state.rootReducer.locationReducer.loc,
    selectedRating: state.rootReducer.ratingReducer.selectedRating
  }
})

const mapDispatchToProps = {
  handleSubmitReport
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingForm);
