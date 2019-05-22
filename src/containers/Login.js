import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Login Container</Text>
        <TouchableOpacity
          onPress={() => {
            Actions.main();
          }}
        >
          <Text>Go to Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Actions.signup();
          }}
        >
          <Text>Go to Signup</Text>
        </TouchableOpacity>
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
)(Login);
