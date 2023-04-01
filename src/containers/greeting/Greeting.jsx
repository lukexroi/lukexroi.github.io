import React from "react";
import './greeting.css'

import { SocialMedia } from '../../components';

export default function Greeting(props) {
    const theme = props.theme;

    return (
        <div className="site__greeting">
            <SocialMedia theme={theme} />
        </div>
    );

}