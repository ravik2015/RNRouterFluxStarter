import React from "react";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Signup Container</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  {}
)(Signup);
