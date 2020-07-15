import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./TopTools.module.css";

const brands = [
    "makita",
    "hikoki",
    "bosch",
    "dewalt",
    "bahco",
    "metabo",
    "stanley",
    "evolution",
];

export default class TopTools extends Component {
    render() {
        const top20brands = brands.map((brand, index) => {
            const keyid = `${brand}-${index}`;
            return (
                <span key={keyid} className={style.top_tools_brand}>
                    <Link to={`/tools/${brand}`}>
                        <img
                            src={`https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-${brand}-1.png`}
                            alt={`Top 20 ${brand}`}
                        />
                    </Link>
                </span>
            );
        });
        return (
            <div className={style.top_tools}>
                <Link to={`/top40/`}>
                    <img
                        className={style.top_tools_top40}
                        src="https://cdn11.bigcommerce.com/s-7holhynnib/product_images/
uploaded_images/top-40-banner.png"
                        alt="Top 40 Tools"
                    />
                </Link>
                <div className={style.top_tools_brands}>{top20brands}</div>
            </div>
        );
    }
}
