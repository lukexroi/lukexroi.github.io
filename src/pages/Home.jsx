import React, { Component } from "react";
import { Greeting, Pathway } from '../containers';


class Home extends Component {
    render() {
        return (
            <div className="site__home-content section__padding">
                <Greeting />
                <Pathway />
            </div>
        );
    }
}

export default Home