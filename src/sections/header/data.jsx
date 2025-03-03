import React from 'react';
import { AiFillGithub, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const data = [
    {
        id: 1,
        link: "https://instagram.com",
        icon: <AiOutlineInstagram />
    }, 
    {
        id: 2,
        link: "https://facebook.com",
        icon: <AiOutlineFacebook />
    }, 
    {
        id: 3,
        link: "https://linkedin.com",
        icon: <AiOutlineLinkedin />
    },
    {
        id: 4,
        link: "https://github.com",
        icon: <AiFillGithub />
    }
];

export default data;