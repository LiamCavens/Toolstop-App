import React, { Component } from "react";
import style from "./TopForty.module.css";

export default class TopTools extends Component {
    getVATPrice = (toolPrice) => {
        return (toolPrice * 1.2).toFixed(2);
    };

    render() {
        if (!this.props.allTools) return null;
        const allTools = this.props.allTools.map((tool, index) => {
            const toolid = index;
            return (
                <li key={toolid} className={style.tool_list_item}>
                    <a
                        href={`https://www.toolstop.co.uk${tool.custom_url.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={tool.images[0].url_thumbnail} alt="Tool" />
                        <p className={style.tool_name}>{tool.name}</p>
                    </a>
                    <p className={style.tool_price}>
                        <span className={style.tool_price_VAT}>
                            £{this.getVATPrice(tool.price)}
                        </span>
                        <span className={style.tool_price_noVAT}>
                            £{tool.price.toFixed(2)} ex. VAT
                        </span>
                    </p>
                </li>
            );
        });
        return (
            <div className={style.top_tools}>
                <ul className={style.tool_list}>{allTools}</ul>
            </div>
        );
    }
}
