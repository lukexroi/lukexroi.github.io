import React from "react";
import './pathway.css';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { pathwayDetails } from "../../portfolio";
import StarIcon from "@material-ui/icons/Star";
import { hover } from "@testing-library/user-event/dist/hover";

export default function Pathway() {
    return (
        < div className="site__pathway" >
            {
                <h1>My Education Pathway - Institutions, Internships and Major Projects</h1>}{
                <h3>Click on each one to find out more!</h3>
            }{
                <VerticalTimeline lineColor="#5D001E" layout="1-column">{
                    pathwayDetails.map((pathway_details) => {
                        return (
                            <VerticalTimelineElement
                                contentStyle={{ color: '#fff', borderTopColor: pathway_details.iconBackgroundColor, borderTopStyle: "solid", borderTopWidth: 5}}
                                contentArrowStyle={{ borderRight: '7px solid' }}
                                className="vertical-timeline-element"
                                onTimelineElementClick={pathway_details.functionLink}
                                iconStyle={{ background: pathway_details.iconBackgroundColor, color: pathway_details.iconColor }}
                                icon={pathway_details.icon}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {pathway_details.title}
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    {pathway_details.subtitle}
                                </h4>
                                <h4>
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
                        );

                    })}
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>
            }
        </div >
    );
}