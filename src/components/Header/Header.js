import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import style from "./Header.module.css";

export default class Header extends Component {
    render() {
        if (!this.props.tools) return null;
        const toolNames = this.props.tools.map((tool) => {
            return tool.name;
        });
        const autoStyle = {
            width: 400,
        };
        return (
            <header className={style.site_header}>
                <Link to={`/`}>
                    <img src="/toolstopLogo.png" alt="toolstop banner" />
                </Link>
                <Autocomplete
                    freeSolo
                    id="autocomplete-search"
                    disableClearable
                    options={toolNames}
                    style={autoStyle}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search product or brand"
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                                ...params.InputProps,
                                type: "search",
                            }}
                        />
                    )}
                />
            </header>
        );
    }
}
