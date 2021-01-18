import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";
import s from "./Profile.module.css";
import { Redirect, withRouter } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    return (
      <div className={s.content}>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let AuthRedirectComponent = (props) => {
  if (!props.isAuth) return <Redirect to="/login" />;
  return <ProfileContainer {...props} />;
};
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
