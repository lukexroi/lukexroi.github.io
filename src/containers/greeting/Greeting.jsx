import React from "react";
import Typed from 'react-typed'
import './greeting.css'
import home_pic1 from '../../assets/images/GEPUK_IndividualPic3';
import { SocialMedia } from '../../components';

export default function Greeting(props) {
    const theme = props.theme;

    return (
        <div className="site__greeting">
            <div className="site__greeting-main">
                <div className="site__greeting-main-text-div">
                    <h1 className="greeting-text">Hey, I'm Luke 👋🏻</h1>
                    <h2 className="greeting-nickname">Poh Jie Ren Luke</h2>
                    <h2 className="greeting-text-h2 subTitle">
                        <Typed
                            strings={[
                                "Junior in Diploma of Applied Artificial Intelligence (AAI)",
                                "Temasek Polytechnic (TP) Scholar",
                                "Vice President of AAI Student Interest Group",
                                "LEAD EXCEL Student (Top 1% of TP's LEADership Programme)",
                                "Co-founder of You'th",
                                "Member of Health Promotion Board's Youth Resource Panel"
                            ]}
                            typeSpeed={50}
                            backSpeed={25}
                            loop
                        />
                    </h2>
                    <SocialMedia theme={theme} />
                </div>
                <div className="site__greeting-main-image-div">
                    <img
                        alt="First Picture"
                        src={home_pic1}>
                    </img>
                </div>
            </div>
        </div>
    );
}