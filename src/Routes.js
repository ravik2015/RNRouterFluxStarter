import React from "react";
import { Scene, Router, Stack, Drawer, Tabs } from "react-native-router-flux";
import { connect } from "react-redux";
import Login from "../src/containers/Login";
import Signup from "../src/containers/Signup";
import Dashboard from "../src/containers/Dashboard";
import SideDrawer from "../src/components/SideDrawer";
class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}

  render() {
    return (
      <Router>
        <Scene key="root" swipeEnabled={false} panHandlers={null} hideNavBar>
          <Stack key="auth" swipeEnabled={false}>
            <Scene key="login" component={Login} panHandlers={null} />
            <Scene key="signup" component={Signup} panHandlers={null} />
          </Stack>

          <Stack key="main">
            <Drawer
              key="drawer"
              hideNavBar
              contentComponent={SideDrawer}
              drawerPosition={"left"}
            >
              <Scene key="dashboard" component={Dashboard} panHandlers={null} />
            </Drawer>
          </Stack>
        </Scene>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  {}
)(Routes);
