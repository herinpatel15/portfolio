import hero from '../public/images/main_hero_name.svg'
import hero_illustration from '../public/images/hero_illustration.svg'
import about_img from '../public/images/about-img.svg'
import icon_github from '../public/images/github.svg'
import icon_linkedin from '../public/images/linkedin.svg'
import icon_instagram from '../public/images/instagram.svg'
import icon_figma from '../public/images/figma.svg'
import TinkerersLebGui from "../public/images/gui-with-mac.svg"
import TinkerersLebMobile from "../public/images/mobile-img.svg"
import ForthTechWeb from "../public/images/web-with-mac.svg"
import gujjuScript from "../public/images/gujjuScript.png"
import steganography from "../public/images/steganography.png"
import Robot from "../public/images/3dRobot.png"
import windSpeed from "../public/images/windSpeedLogger.png"
import classFilter from "../public/images/classFilter.png"
import aiAssistant from "../public/images/aiAssistant.png"

export const data = {
    hero: {
        // name_img: '/images/main_hero_name.svg',
        name_img: hero,
        illustration_img: hero_illustration,
    },

    about_me: {
        image: about_img,
        middle_title: "Software Developer based in India 🌏",
        meddle_subtitle: "I'm a passionate Software Developer from India, specializing in web, mobile, GUI development, and more, with a focus on clean design and seamless user experiences.",
        contact_title: ["Connect with me,", "Popular Space"],
        contact_box: [
            {icon: icon_github, title: "GitHub"},
            {icon: icon_linkedin, title: "LinkedIn"},
            {icon: icon_instagram, title: "Instagram"},
            {icon: icon_figma, title: "Figma"}
        ]
    },

    experience: {
        number: "+ Year",
        title: "Experience"
    },

    explore: {
        fields: [
            "Software Development",
            "Full-stack Development",
            "Mobile-App Development",
            "GUI Development",
            "Embedded Development",
            "UI/UX Design"
        ],
        title: "Explorer Fields  🚀",
        description: "I’m an adaptable developer exploring diverse fields, including full-stack development (frontend & backend), GUI design, embedded systems, software development, mobile app creation, and UI/UX design. Passionate about crafting seamless and innovative digital experiences across various platforms."
    },

    work: {
        title: "My Work 🤝",
        workFields: [
            {
                img: TinkerersLebGui,
                title: "Data Visualization Application",
                platform: "For Desktop",
                description: "This GUI application enables users to upload CSV files, analyze data, and create interactive dashboards with customizable charts and geospatial visualizations. It includes a drag-and-drop builder for responsive layouts and mapping tools for heatmaps, data plotting, and location-based filtering, making it highly versatile for data analysis tasks."
            },
            {
                img: TinkerersLebMobile,
                title: "Data Visualization Application",
                platform: "For Mobile",
                description: "Created a mobile application that receives real-time data via Bluetooth and displays it on an interactive dashboard, highlighting key metrics and numbers for quick monitoring and analysis. The app features a responsive, user-friendly interface, making it ideal for real-time data tracking and display in various use cases."
            },
            {
                img: ForthTechWeb,
                title: "Trading Platform",
                platform: "For Web",
                description: "A Trading Platform front-end web app designed to facilitate low-latency, high-frequency algorithmic trade execution and order routing. It offers an intuitive interface for users to monitor and manage trading risks in real-time, providing seamless interaction with risk management tools for exchange-traded derivative instruments."
            }
        ]
    },
     
    project: {
        title: "My Projects ⚙️",
        ProjectFields: [
            {
                img: gujjuScript,
                title: "GujjuScript ✨",
                platform: "Programming Language",
                description: "Created a custom programming language to explore unique syntax and functionality, showcasing creativity, problem-solving, and expertise in language design."
            },
            {
                img: steganography,
                title: "Steganography ✨",
                platform: "Web Application",
                description: "Developed a steganography web application enabling users to securely hide and retrieve messages within images through an intuitive interface."
            },
            {
                img: Robot,
                title: "3D Robotic Arm ✨",
                platform: "Web Application",
                description: "Developed an interactive 3D robotic arm on the web, allowing users to control it through a dynamic interface."
            },
            {
                img: windSpeed,
                title: "Wind Speed Logger ✨",
                platform: "Embedded system ",
                description: "Created a file scheduling system for embedded systems that automates file management on a daily and yearly basis, optimizing data handling."
            },
            {
                img: classFilter,
                title: "Class Filter ✨",
                platform: "NPM Package",
                description: "Created a custom programming language to explore unique syntax and functionality, showcasing creativity, problem-solving, and expertise in language design."
            },
            {
                img: aiAssistant,
                title: "Ai Assistant ✨",
                platform: "Web Application",
                description: "Created an AI assistant web app that lists AI tools and generates prompts for easy use across different platforms."
            }
        ]
    }
}