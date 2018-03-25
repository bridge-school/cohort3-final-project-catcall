/** Report Page **/
// (1) "Please state how you felt when the incident happened"
// (2) emoji list of five emoji buttons
// (3) none of the emojis are pre-selected**
// (4) when emoji is pressed/clicked, there is some visual indicator that it was selected
// (5) a user can change their selection by pressing another emoji

//**Technical Acceptance Criteria**
// (6) radio buttons hooked up to the redux store


import React, { Component } from 'react';
import { connect } from 'react-redux';

const Map = () => <div>Place the map here!</div>;

class RatingForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      rating: null
    }
  }

  updateRating = (val) => {
    this.setState({
      rating: val
    });
  };

  render() {
    return (
      <form>
        <div className="emoji-buttons">
          <label>
            <input type="radio" value="1" checked={this.state.rating === "1"} onChange={(e) => this.updateRating(e.target.value)}/>
            Option1
          </label>
          <label>
            <input type="radio" value="2" checked={this.state.rating === "2"} onChange={(e) => this.updateRating(e.target.value)}/>
            Option2
          </label>
          <label>
            <input type="radio" value="3" checked={this.state.rating === "3"} onChange={(e) => this.updateRating(e.target.value)}/>
            Option3
          </label>
          <label>
            <input type="radio" value="4" checked={this.state.rating === "4"} onChange={(e) => this.updateRating(e.target.value)}/>
            Option4
          </label>
          <label>
            <input type="radio" value="5" checked={this.state.rating === "5"} onChange={(e) => this.updateRating(e.target.value)}/>
            Option5
          </label>
        </div>
      </form>
    );
  }
};

// const RatingForm = ({selectedRating}) => {
//   return (
//     <form>
//       <div className="emoji-buttons">
//         <label>
//           <input type="radio" value="1" checked={rating === "1"} onChange={(e) => updateRating(e.target.value)}/>
//           Option1
//         </label>
//         <label>
//           <input type="radio" value="2" checked={rating === "2"} onChange={(e) => updateRating(e.target.value)}/>
//           Option2
//         </label>
//         <label>
//           <input type="radio" value="3" checked={rating === "3"} onChange={(e) => updateRating(e.target.value)}/>
//           Option3
//         </label>
//         <label>
//           <input type="radio" value="4" checked={rating === "4"} onChange={(e) => updateRating(e.target.value)}/>
//           Option4
//         </label>
//         <label>
//           <input type="radio" value="5" checked={rating === "5"} onChange={(e) => updateRating(e.target.value)}/>
//           Option5
//         </label>
//       </div>
//     </form>
//   );
// };

const ReportPage = ({ props }) => {
  return (
    <div>
      <Map />
      <RatingForm />
    </div>
  );
};

const mapStateToProps = storeState => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage);
