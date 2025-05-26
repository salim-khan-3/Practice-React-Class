import "./header.css";
import "./responsive.css";
import p1Image from "../assets/p1.png";
import { MdFacebook } from "react-icons/md";
import { FaTwitter,FaLinkedin } from "react-icons/fa";


export const MainContent = (props) =>{
    return(
        <section className="card_container">
            <img src={p1Image} alt="" height={"200px"} />
            <h1>{props.name}</h1>
            <p>{props.job}</p>
            <div className="id">
                <p><span className="id">ID:</span> {props.id}</p>
            </div>
            <div className="phone">
                <p><span className="id">Phone:</span> {props.phone}</p>
            </div>
            <div className="email">
                <p><span className="id">Email:</span> {props.email}</p>
            </div>

            <div className="social_icons">
                <a href="#"><MdFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedin /></a>
            </div>
        </section>
    )
}