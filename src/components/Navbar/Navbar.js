import React, { Component } from "react";
import style from "./Navbar.module.css";

export default class Navbar extends Component {
    render() {
        return (
            <nav className={style.navbar}>
                <ul className={style.navbar_list}>
                    <li>
                        <a href="https://www.toolstop.co.uk/power-tools/">
                            POWER TOOLS
                        </a>
                    </li>
                    <li>
                        <a href="https://www.toolstop.co.uk/hand-tools/">
                            HAND TOOLS
                        </a>
                    </li>
                    <li>
                        <a href="https://www.toolstop.co.uk/accessories/">
                            ACCESSORIES
                        </a>
                    </li>
                    <li>
                        <a href="https://www.toolstop.co.uk/equipment/">
                            EQUIPMENT
                        </a>
                    </li>
                    <li>
                        <a href="https://www.toolstop.co.uk/brands/">BRANDS</a>
                    </li>
                    <li>
                        <a href="https://www.toolstop.co.uk/clearance/">
                            CLEARANCE
                        </a>
                    </li>
                    <li>
                        <a href="https://www.toolstop.co.uk/special-offers/">
                            SPECIAL OFFERS
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}
