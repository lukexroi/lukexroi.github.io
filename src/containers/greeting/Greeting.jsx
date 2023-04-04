import React from "react";
import Typed from 'react-typed'
import './greeting.css'
import { imgDetails } from "../../portfolio";
import home_pic1 from '../../assets/images/GEPUK_IndividualPic3.jpeg';
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";
import { SocialMedia } from '../../components';

export default function Greeting(props) {
    const theme = props.theme;

    const imgStyles = {
        width: "100%",
        height: "460px",
        objectFit: "cover"
    };

    const tinySliderSettings = {
        lazyload: true,
        nav: false,
        mouseDrag: true,
        loop: true,
        items: 1,
        gutter: 5,
        controls: false, // remove built-in nav buttons
        responsive: {
            420: {
                items: 1
            }
        },
        autoplay: true,
        autoplayButtonOutput: false,
    };

    // const loadingImage =
    //     "data:image/gif;base64,R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

    return (
        <div className="site__greeting">
            <div className="site__greeting-main">
                <div className="site__greeting-main-text-div">
                    <h1 className="greeting-text">Hey👋🏻 My Name's Luke </h1>
                    <h2 className="greeting-text-h2 subTitle">
                        And I'm 
                        <Typed
                            strings={[
                                "... A Junior in Diploma of Applied Artificial Intelligence (AAI)",
                                "... A Temasek Polytechnic (TP) Scholar",
                                "... The Vice President of AAI Student Interest Group (AAISIG)",
                                "... A LEAD EXCEL Student (Top 1% of TP's LEADership Programme)",
                                "... The Co-founder of You'th",
                                "... A Member of Health Promotion Board's Youth Resource Panel"
                            ]}
                            typeSpeed={50}
                            backSpeed={25}
                            loop
                        />
                    </h2>
                    <h2 className="greeting-nickname">Check out those highlights ⇨</h2>
                    <SocialMedia theme={theme} />
                </div>
                <div className="site__greeting-main-image-div">
                    <TinySlider settings={tinySliderSettings}>
                        {
                            imgDetails.map((img_details) => {
                                return (
                                    <div key={img_details.index}>
                                        <img src={require(`../../assets/images/${img_details.imgSrc}`)} alt={img_details.imgAlt} style={imgStyles} />
                                        <h4 className="image-caption">{img_details.imgAlt}</h4>
                                    </div>
                                )
                            })
                        }
                    </TinySlider>
                </div>
            </div>
        </div>
    );
}