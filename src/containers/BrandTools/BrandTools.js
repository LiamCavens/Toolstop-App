import React, { Component } from "react";
import ToolList from "../../components/ToolList/ToolList";
import style from "./BrandTools.module.css";

const url = "https://product-fetch-toolstop.herokuapp.com/top40";

class BrandTools extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getBrandTools(this.props.match.params.brand);
    }

    getBrandTools = (brand) => {
        console.log("getbrandTools");
        const brandUrl = `${url}/${brand}`;
        fetch(brandUrl)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    brand,
                    brandTools: data.data,
                });
            });
    };

    render() {
        console.log(this.state);
        return (
            <div className={style.top_tools}>
                <h2 className={style.brand_title}>{this.state.brand}</h2>
                <ToolList tools={this.state.brandTools} />
            </div>
        );
    }
}

export default BrandTools;
