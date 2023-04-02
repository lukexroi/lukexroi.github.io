import React from "react";
import './pathway.css';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { pathwayDetails } from "../../portfolio";

export default function Pathway() {
    return (
        < div className="site__pathway" >
            {
                <h1>My Education Pathway</h1>}{
                <h3>Click to find out more about each institution! 🏫 </h3>
                }{
                pathwayDetails.map((pathway_details) => {
                    return (
                        <VerticalTimeline lineColor="#3e497a" layout="1-column">
                            <VerticalTimelineElement
                                contentStyle={{ color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid' }}
                                className="vertical-timeline-element--school"
                                iconStyle={{ background: pathway_details.iconBackgroundColor, color: pathway_details.iconColor }}
                                icon={pathway_details.icon}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {pathway_details.title}
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    {pathway_details.subtitle}
                                </h4>
                                <h4 >
                                    {pathway_details.date}
                                </h4>
                                <p>
                                    {pathway_details.description1}
                                </p>
                                <p>
                                    {pathway_details.description2}
                                </p>
                                <p>
                                    {pathway_details.description3}
                                </p>
                            </VerticalTimelineElement>

                        </VerticalTimeline>
                    );
                })
            }
        </div >
    );
}