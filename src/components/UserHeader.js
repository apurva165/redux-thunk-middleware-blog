import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userID);
  }

  render() {
    //console.log(this.props.users);
    return <div>header</div>;
  }
}

const mapStateToProps = state => {
  console.log({ state });
  return { users: state.users };
};
export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
