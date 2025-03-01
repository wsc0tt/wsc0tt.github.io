import SocialButton from "../components/socialButton.tsx";
import {FaDiscord} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa6";
import {FaEnvelope} from "react-icons/fa6";
import React, {useState, useEffect} from "react";
import emailjs from "@emailjs/browser"

const Contact = () => {

    useEffect(() => {
        if (!import.meta.env.VITE_EJS_PUBLIC_KEY) {
            console.error('EJS_PUBLIC_KEY is missing!');
            return;
        }
        emailjs.init(import.meta.env.VITE_EJS_PUBLIC_KEY);
    }, []);

    const [messageData, set_messageData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        set_messageData({
            ...messageData,
            [e.target.name]: e.target.value
        });
    }

    const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isValidEmail(messageData.email)) {
            alert("Please enter a valid email address!");
            return;
        }

        console.log('Form submitted:', messageData)

        emailjs.send(import.meta.env.VITE_EJS_SERVICE_ID, import.meta.env.VITE_EJS_TEMPLATE_ID, messageData)
            .then((result) => {
                console.log('Email sent:', result.text);
            })
            .catch((error) => {
                console.error('Email error:', error.text);
                alert("An error occurred while sending the message...");
            });

        // clear the form
        set_messageData({
            name: "",
            email: "",
            message: ""
        })
    }

    return (
        <div className="w-screen max-w-screen-lg px-1">
            <div className="flex flex-col pt-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-800">
                <div className="flex items-center space-x-4 mb-4 justify-center">
                    <span className="font-medium font-serif text-white text-3xl">contact me</span>
                    <div className="flex items-center">
                        <FaEnvelope className="text-2xl lg:text-4xl text-spring"/>
                    </div>
                </div>

                <span
                    className="py-4 px-4 mb-6 lg:mb-8 bg-blue-800 shadow-md font-sans
                                text-white text-lg lg: text-xl text-center">
                    To get in touch, please send me a
                    message on linkedin, discord, or using the
                    form below!
                </span>
                <div className="flex flex-row space-x-6 mb-4 lg:mb-4 justify-center">
                    <SocialButton link="https://www.linkedin.com/in/wscottdev/" Icon={FaLinkedin} text="linkedin"/>
                    <SocialButton link="https://discordapp.com/users/wsc0tt" Icon={FaDiscord} text="discord"/>
                </div>
                <form onSubmit={handleSubmit}>

                    <label>full name:</label>
                    <input
                        className="form"
                        type="text"
                        name="name"
                        value={messageData.name}
                        onChange={handleChange}
                        placeholder="enter full name..."
                        required
                    />

                    <label>email address:</label>
                    <input
                        className="form"
                        type="email"
                        name="email"
                        value={messageData.email}
                        onChange={handleChange}
                        placeholder="enter email address..."
                        required
                    />

                    <label>message:</label>
                    <textarea
                        className="form"
                        name="message"
                        value={messageData.message}
                        onChange={handleChange}
                        placeholder="leave me a message..."
                        required
                    />

                    <button className="w-full py-4 rounded-b-2xl font-medium flex
                        items-center justify-center bg-blue-900 shadow-2xl
                        mt-2 text-xl lg:text-2xl font-sans text-white hover:bg-blue-700
                        transition-colors ease-in duration-200 mx-auto"
                            type="submit"
                    >
                        send message
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Contact