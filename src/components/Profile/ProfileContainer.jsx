import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";
import s from "./Profile.module.css";
import { withRouter } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
    // usersAPI.getProfile(userId).then((response) => {
    //   this.props.setUserProfile(response.data);
    // });
  }
  render() {
    return (
      <div className={s.content}>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
