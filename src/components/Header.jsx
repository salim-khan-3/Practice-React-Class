import "./header.css"
export const Header = () =>{
    return(
        <section className="section_container">
            <div className="container">
                <h1>Jitter</h1>

                <ul>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Customers</a></li>
                    <li><a href="#">Templetes</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
            </div>

            <div className="login">
                <button className="login">Login</button>
                <button className="try_free">Try for free</button>
            </div>
        </section>
    )
}