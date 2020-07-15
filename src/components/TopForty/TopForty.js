import React, { Component } from "react";

export default class TopTools extends Component {
    getVATPrice = (toolPrice) => {
        return (toolPrice * 1.2).toFixed(2);
    };

    render() {
        if (!this.props.allTools) return null;
        const allTools = this.props.allTools.map((tool, index) => {
            const toolid = index;
            return (
                <li key={toolid}>
                    <a
                        href={`https://www.toolstop.co.uk${tool.custom_url.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={tool.images[0].url_thumbnail} alt="Tool" />
                        <p>{tool.name}</p>
                    </a>
                    <p>
                        <span>£{this.getVATPrice(tool.price)}</span>
                        <span>£{tool.price} ex. VAT</span>
                    </p>
                </li>
            );
        });
        return (
            <div>
                <ol>{allTools}</ol>
            </div>
        );
    }
}
