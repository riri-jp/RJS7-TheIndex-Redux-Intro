import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src="theindex.svg" className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <button>AUTHORS</button>
          </h4>
          <h4 className="menu-item">
            <button onClick={this.props.addAuthor}>+ ADD AUTHOR</button>
          </h4>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addAuthor: () => dispatch(actionCreators.addAuthor())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Sidebar);
