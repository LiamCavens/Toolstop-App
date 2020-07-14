import React, { Component } from "react";

const top40url = "https://product-fetch-toolstop.herokuapp.com/top40";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getTop40();
    }

    getTop40 = () => {
        fetch(top40url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    top40: data.data,
                });
            });
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <header>Header</header>
                <nav>Navbar</nav>
            </div>
        );
    }
}

export default Home;
