import React, { Component } from "react";
import ToolList from "../ToolList/ToolList";

export default class TopForty extends Component {
    render() {
        return (
            <>
                <h2>Top 40 Tools</h2>
                <ToolList tools={this.props.allTools} />
            </>
        );
    }
}
