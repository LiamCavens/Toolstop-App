import React, { Component } from "react";
import ToolList from "../ToolList/ToolList";

export default class TopForty extends Component {
    render() {
        return (
            <>
                <ToolList tools={this.props.allTools} />
            </>
        );
    }
}
