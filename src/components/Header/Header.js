import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

export default class Header extends Component {
    render() {
        return (
            <header className={style.site_header}>
                <Link to={`/`}>
                    <img src="/toolstopLogo.png" alt="toolstop banner" />
                </Link>
                <input
                    className={style.site_search}
                    data-search-quick=""
                    name="search_query"
                    id="search_query"
                    data-error-message="Search field cannot be empty."
                    placeholder="Search product or brand..."
                    autoComplete="off"
                    maxLength="255"
                ></input>
            </header>
        );
    }
}
