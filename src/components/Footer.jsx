import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdCall, MdEmail, MdFacebook, MdHome } from "react-icons/md";
import "./header.css";
export const Footer = () =>{
    return(
        <section className="footer_container">
            <section className="tnc_footer">
                <h2 style={{color:"#b33939"}}>TNC FOOTER</h2>
                <p>Get some Amazing and unique <br /> premade layout and use it.</p>
                <div className="home">
                    <p> <span>
                        <MdHome />
                    </span> HORINARAYONPUR HAZIPARA,THAKURGAON</p>
                    <p><span><MdCall /></span> +880 1581033650</p>
                    <p><span><MdEmail /> salimislam0036@gmail.com</span></p>
                </div>
            </section>

            <section className="company">
                <h2>Company</h2>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </section>

            <section className="product_section">
                <h2>Products</h2>
                <ul>
                    <li><a href="#">What New</a></li>
                    <li><a href="#">Pricing Plan</a></li>
                    <li><a href="#">Integration</a></li>
                    <li><a href="#">Popular Items</a></li>
                    <li><a href="#">Help Center</a></li>
                </ul>
            </section>

            <section className="subscribe_newslatter">
                <h2>Subscribe Newsletter</h2>
                <p>Join our mailing list to get the latest <br /> web devlopments and also some quick <br /> tips and tricks.</p>

                <form className="sub_email">
                    <input type="email" name="email" placeholder="Email" />
                    <button className="Arrow_button">
                        <FaArrowRight/>
                    </button>
                </form>

                <div className="social_media">
                    <a href="#"><MdFacebook /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaGithub /></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaYoutube /></a>
                </div>

            </section>
        </section>
    )
}