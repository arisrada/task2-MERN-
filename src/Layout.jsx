import {Link, Outlet} from "react-router-dom"
import "./index.css"
import "./footer.css"
export default function Layout() {
  return (
    <div>
        <nav className="flex justify-between p-3 pr-10 items-center h-32">
          <img className="w-32" src="../src/assets/srada-high-resolution-logo-transparent (1).png" alt="" />
            <ul className="flex justify-evenly gap-10 p-6 text-3xl items-center">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/skills">Skills</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <button className="button">CONTACT NOW</button>
        </nav>
        <Outlet/>
    </div>
  )
}
