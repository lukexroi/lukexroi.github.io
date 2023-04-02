import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import InternProjectIcon from "@material-ui/icons/Laptop";
import ProgressIcon from "@material-ui/icons/Timelapse";

const socialMediaLinks = [
    {
        name: "Gmail",
        link: "mailto:lukexroi@gmail.com",
        fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
        backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
    },

    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/lukepoh/",
        fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
        backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
    },
    {
        name: "Github",
        link: "https://github.com/lukexroi",
        fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
        backgroundColor: "#091c70", // Reference https://simpleicons.org/?q=github
    },
    {
        name: "Medium",
        link: "https://medium.com/@lukexroi",
        fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/google?style=brands
        backgroundColor: "#000000", // Reference https://simpleicons.org/?q=medium
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/lukeroi/",
        fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
        backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
    },
];

const pathwayDetails = [
    {
        date: "2026 September - 2030 April",
        iconBackgroundColor: "#3e497a",
        iconColor: "#fff",
        icon: <ProgressIcon/>,
        title: "Singapore University of Technology and Design (SUTD)",
        subtitle: "Diploma in Applied Artificial Intelligence",
        description1: "Successful Applicant of SUTD's Early Engagement & Development (SEED) Programme, receiving a conditional offer to SUTD",
        description2: "Aspiring to enroll in SUTD's Undergraduate Programme of Design and Artificial Intelligence (DAI)",
        description3: "Exploring the possibility to apply for SUTD's Technology Entrepreneurship Programme (STEP) ",
    },
    {
        date: "2023 September - 2024 February",
        iconBackgroundColor: "#ffdb0e",
        iconColor: "#fff",
        icon: <InternProjectIcon/>,
        title: "Student Internship Programme (Associated with TP)",
        subtitle: <em>Company To Be Confirmed</em>,
        description1: "This structured programme is designed to link my learning with the real work environment.",
        description2: "Placed in organisation(s) with opportunities to apply the concepts and skills required in the course of my study.",
        description3: "Besides reinforcing technical concepts and mastering of skills in areas trained, the practical training will enable me to build important skills such as problem-solving, communication, teamwork, and to cultivate good atitude and a strong work ethic.",
    },
    {
        date: "2023 June - 2023 September",
        iconBackgroundColor: "#ffdb0e",
        iconColor: "#fff",
        icon: <InternProjectIcon/>,
        title: "Major Project (Associated with TP)",
        subtitle: <em>Project/Company To Be Confirmed</em>,
        description1: "This subject involves the intergration of knowledge and skills acquired from the various subjects in the course.",
        description2: "It helps me to develop a practical understanding of the products, methodologies, processes, systems, project management and presentation skills needed for AI related application projects.",
        description3: "I will develop, present and demonstrate solutions to a problem.",
    },
    {
        date: "2021 April - 2022 March",
        iconBackgroundColor: "#3e497a",
        iconColor: "#fff",
        icon: <SchoolIcon/>,
        title: "Temasek Polytechnic (TP)",
        subtitle: "Common Information and Communications Technology Programme (CICT)",
        description1: "cGPA of AY2021/2022 of 3.88",
        description2: "AY2021/2022 April Semester (Main) GPA of 4.00",
        description3: "AY2021/2022 October Semester (Main) GPA of 3.76",
    },
    {
        date: "2017 - 2020",
        iconBackgroundColor: "#3e497a",
        iconColor: "#fff",
        icon: <SchoolIcon/>,
        title: "Anglo Chinese School Independent (ACSI)",
        subtitle: "The Singapore-Cambridge General Certificate of Education Ordinary Level (GCE O-Level)",
        description1: "L1R5 Raw Score of 13, Nett Score of 11",
        description2: "L1R4/EL2BR2 Raw Score of 10, Nett Score of 8 ",
        description3: ""
    }
];

export {
    socialMediaLinks,
    pathwayDetails
}