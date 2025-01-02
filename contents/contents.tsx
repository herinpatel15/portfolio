import hero from '../public/images/main_hero_name.svg'
import hero_illustration from '../public/images/hero_illustration.svg'
import about_img from '../public/images/about-image.png'
import icon_github from '../public/images/github.svg'
import icon_linkedin from '../public/images/linkedin.svg'
import icon_instagram from '../public/images/instagram.svg'
import icon_figma from '../public/images/figma.svg'

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
        number: "1.5+ Year",
        title: "Experience"
    }
}