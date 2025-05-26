import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdCall, MdEmail, MdFacebook, MdHome } from "react-icons/md";
import "./header.css";
import "./responsive.css";
export const Footer = () =>{
    return(
        <section className="footer_container">
            <section className="tnc_footer">
                <h2 style={{color:"#b33939"}}>TNC FOOTER</h2>
                <p>Get some Amazing and unique <br /> premade layout and use it.</p>
                <div className="home">
                    <p className="icon_container"> <span>
                        <MdHome />
                    </span> HORINARAYONPUR HAZIPARA,THAKURGAON</p>
                    <p className="icon_container"><span>  <MdCall /></span> +880 1581033650</p>
                    <p className="icon_container"><span><MdEmail /></span> salimislam0036@gmail.com</p>
                </div>
            </section>

            <div className="two-section-container">
                <section className="company">
                <h2>Company</h2>
                <ul>
                    <li><a href="#" class="hover-underline">About us</a></li>
                    <li><a href="#" class="hover-underline">Services</a></li>
                    <li><a href="#" class="hover-underline">Blog</a></li>
                    <li><a href="#" class="hover-underline">Career</a></li>
                    <li><a href="#" class="hover-underline">Contact us</a></li>
                </ul>
            </section>

            <section className="product_section">
                <h2>Products</h2>
                <ul>
                    <li><a href="#" class="hover-underline">What New</a></li>
                    <li><a href="#" class="hover-underline">Pricing Plan</a></li>
                    <li><a href="#" class="hover-underline">Integration</a></li>
                    <li><a href="#" class="hover-underline">Popular Items</a></li>
                    <li><a href="#" class="hover-underline">Help Center</a></li>
                </ul>
            </section>
            </div>

            <section className="subscribe_newslatter">
                <h2 className="subscribe">Subscribe Newsletter</h2>
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