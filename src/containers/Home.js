import React, { Component } from "react";
import TopTools from "../components/TopTools/TopTools";
import TopForty from "../components/TopForty/TopForty";
import BrandTools from "./BrandTools/BrandTools";
import Header from "../components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
                <Header tools={this.state.top40} />
                <nav>Navbar</nav>
                <Switch>
                    <Route exact path="/" component={TopTools} />
                    <Route
                        exact
                        path="/top40"
                        render={() => <TopForty allTools={this.state.top40} />}
                    />
                    <Route exact path="/tools/:brand" component={BrandTools} />
                </Switch>
            </Router>
        );
    }
}

export default Home;
