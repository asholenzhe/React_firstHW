import {Link} from "react-router-dom";
import "./index.css"

export default function Navigation() {
    return (<>
            <nav className="navbar">
                <div className="nav_container">
                    <img src="src/assets/Animation%20-%201743615198309.gif" alt="cat logo"/>
                    <Link to="/about" className="nav-link">Обо мне</Link>
                    <Link to="/calculate" className="nav-link">Калькулятор</Link>
                </div>
            </nav>
        </>
    )
}