import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { TbWorld } from "react-icons/tb";
import { MdContactMail } from "react-icons/md";
import { GiPaintBucket } from "react-icons/gi";

const Nav = () => {
    return (
        <div className="nav-container">
            <Link to={'/portfolio'} className="menu-navlink">
                <TiHome size={25} />
            </Link>
            <Link to={'/projets'} className="menu-navlink">
                <TbWorld size={25} />
            </Link>
            <Link to={'/gallery'} className="menu-navlink">
                <GiPaintBucket size={25} />
            </Link>
            <Link to={'/contact'} className="menu-navlink">
                <MdContactMail size={25} />
            </Link>
        </div>
    )
}

export default Nav;