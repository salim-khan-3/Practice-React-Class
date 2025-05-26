import "./header.css"
import "./responsive.css";
export const Header = () =>{
    return(
        <section className="section_container">
            <div className="nav_links_logo">
                <h1>Jitter</h1>
                <div className="nav_link">
                    <ul>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Templetes</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </div>
            </div>

            <div className="buttons">
                <button className="btn1">Login</button>
                <button className="btn2">Try for free</button>
            </div>
        </section>
    )
}