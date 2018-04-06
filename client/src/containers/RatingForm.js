import React from 'react';
import { connect } from 'react-redux';
import { handleSubmitReport } from '../actions/index';
import EmojiButtonContainer from './EmojiButtonContainer';
import Button from '../components/Button';
import { StyledGrid, StyledRow, StyledCol } from '../components/styled/StyledGridElements';

const RatingForm = ({ handleSubmitReport, push, state }) => {
  
  const doSubmission = e => {
    handleSubmitReport();
    push('/data');
  }

  const validForm = state.loc.lat && state.loc.lng && state.selectedRating

  return (
    <StyledGrid>
      <StyledRow>
      <h2>Please state how you felt when the incident happened</h2>
      </StyledRow>
      <StyledRow>
        <StyledCol xs={3} sm={3} md={3} lg={3}><EmojiButtonContainer reaction="expressionless" /></StyledCol>
        <StyledCol xs={2} sm={2} md={2} lg={2}><EmojiButtonContainer reaction="anguished" /></StyledCol>
        <StyledCol xs={2} sm={2} md={2} lg={2}><EmojiButtonContainer reaction="angry" /></StyledCol>
        <StyledCol xs={2} sm={2} md={2} lg={2}><EmojiButtonContainer reaction="fearful" /></StyledCol>
        <StyledCol xs={3} sm={3} md={3} lg={3}><EmojiButtonContainer reaction="screaming" /></StyledCol>
      </StyledRow>
      <Button bsStyle="primary" onClick={doSubmission} disabled={!validForm}>Submit</Button>
    </StyledGrid>
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
