import React from 'react';
import { connect } from 'react-redux';
import { handleSubmitReport } from '../actions/index';
import EmojiButtonContainer from './EmojiButtonContainer';

const RatingForm = ({ handleSubmitReport, push }) => {
  const doSubmission = (e) => {
    e.preventDefault();
    handleSubmitReport();
    push('/data');
  }

  return (
    <form onSubmit={(e) => doSubmission(e)}>
      <h2>Please state how you felt when the incident happened</h2>
      <div className="emoji-buttons">
        <EmojiButtonContainer reaction="expressionless" />
        <EmojiButtonContainer reaction="anguished" />
        <EmojiButtonContainer reaction="angry" />
        <EmojiButtonContainer reaction="fearful" />
        <EmojiButtonContainer reaction="scream" />
      </div>
      <input type="submit" value="Submit Incident" />
    </form>
  )
}

const mapDispatchToProps = {
  handleSubmitReport
};

export default connect(null, mapDispatchToProps)(RatingForm);
