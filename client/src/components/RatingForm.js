import React from 'react';
import { connect } from 'react-redux';

import { handleSubmitReport } from '../actions/index';
import EmojiButtonContainer from '../containers/EmojiButtonContainer';
import Button from '../components/Button';
import { StyledGrid, StyledRow, StyledCol } from '../components/styled/StyledGridElements';

import icons from '../shared/data';

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
        <StyledCol xs={3} sm={3} md={3} lg={3}><EmojiButtonContainer reaction={icons.expressionless.name} /></StyledCol>
        <StyledCol xs={2} sm={2} md={2} lg={2}><EmojiButtonContainer reaction={icons.anguished.name} /></StyledCol>
        <StyledCol xs={2} sm={2} md={2} lg={2}><EmojiButtonContainer reaction={icons.angry.name} /></StyledCol>
        <StyledCol xs={2} sm={2} md={2} lg={2}><EmojiButtonContainer reaction={icons.fearful.name} /></StyledCol>
        <StyledCol xs={3} sm={3} md={3} lg={3}><EmojiButtonContainer reaction={icons.scream.name} /></StyledCol>
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
