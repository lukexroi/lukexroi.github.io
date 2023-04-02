import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import InternIcon from "@material-ui/icons/Laptop";
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
        description1: "Successful Applicant of SUTD's Early Engagement & Development (SEED) Programme ",
        description2: "Conditional Offer to SUTD",
        description3: "Aspiring to enroll in SUTD's Undergraduate Programme of Design and Artificial Intelligence (DAI)",
    },
    {
        date: "2022 April - 2024 March",
        iconBackgroundColor: "#3e497a",
        iconColor: "#fff",
        icon: <SchoolIcon/>,
        title: "Temasek Polytechnic (TP)",
        subtitle: "Diploma in Applied Artificial Intelligence (AAI)",
        description1: "cGPA of AY2022/2023 of 3.94 | cGPA of AY2022/2023 & AY2021/2022 of 3.91",
        description2: "AY2022/2023 April Semester (Main) GPA of 3.90",
        description3: "AY2022/2023 October Semester (Main) GPA of 4.00",
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