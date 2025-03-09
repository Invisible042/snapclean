import littleboy from "./littleboy.jpg"
import google_plus_icon from "./google_plus_icon.svg"
import facebook_icon from "./facebook_icon.svg"
import profile_img_1 from "./profile_img_1.png"
import profile_img_2 from "./profile_img_2.png"
import profile_img_3 from "./profile_img_3.png"
import yellow_background from "./yellow_background.jpg"
import littleboyBgremoved from './littleboyBgremoved.png'
import linkedin from './linkedin.png'
import youtube from './youtube.png'
import logo from './logo.png'


const images = {
    littleboy,
    yellow_background,
    littleboyBgremoved,
    logo,
    social_icons : [
        linkedin,
        youtube,
        google_plus_icon,
        facebook_icon,
    ]

}

const testimonialInfo = [
    {
        name:"Emil Barso Rheinlaender",
        work:"Content & marketing coordinator",
        logo:"./img",
        comment:"“We are impressed by the AI and think it's the best choice on the market.”",
        profile:profile_img_1
    },
     {
        name:"marc colen",
        work:"CEO",
        logo:".img",
        comment:"“remove.bg is leaps and bounds ahead of the competition. A thousand times better. It simplified the whole process.”",
        profile:profile_img_2
    },
    {
        name:"Tailor hatmaker",
        work:"senior technology engineer",
        logo:"./img",
        comment:"'We were impressed by its ability to account for pesky, feathery hair without making an image look jagged and amateurish'",
        profile:profile_img_3
    }
]


export {images, testimonialInfo}