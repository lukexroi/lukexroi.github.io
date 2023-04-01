import React, { Component } from "react";
import { Greeting } from '../containers';


class Home extends Component {
    render() {
        return (
            <div className="site__home-content section__padding">
                <Greeting />
            </div>
        );
    }
}

export default Home