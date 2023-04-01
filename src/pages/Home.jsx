import React, { Component } from "react";
import { Greeting } from '../containers';

class Home extends Component {
    render() {
        return (
            <div>
                <Greeting />
            </div>
        );
    }
}

export default Home