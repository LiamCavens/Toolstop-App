import React, { Component } from "react";
import TopTools from "../components/TopTools/TopTools";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
            <Router>
                <header>Header</header>
                <nav>Navbar</nav>
                <Switch>
                    <Route exact path="/" component={TopTools} />
                    {/* <Route path="/roster" component={Roster} />
                    <Route path="/schedule" component={Schedule} /> */}
                </Switch>
            </Router>
        );
    }
}

export default Home;
