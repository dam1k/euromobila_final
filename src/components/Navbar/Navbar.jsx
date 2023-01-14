import {useState, useEffect, useRef} from "react"
import {GiHamburgerMenu} from "react-icons/gi"
import logo from '../../assets/images/euromobila-logo.png' 
import {Link} from "react-router-dom"
import './Navbar.scss'
import '../../App.css'
import {useParams, useNavigate} from "react-router-dom"
import Search from "../Search/Search"
import MobileSearch from "../Search/MobileSearch"
import useUIContext from "../../UIContext"

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const params = useParams()
  const navigate = useNavigate()
  const breakpoint = 600;
  const {activeNavbar, setActiveNavbar} = useUIContext()
  const menuRef = useRef()

  useEffect(() => {
    function resize() {
        setWidth(window.innerWidth)
    }
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize)
  }, []);

  useEffect(() => {
    setActiveNavbar(false)
  }, [navigate]);

  useEffect(() => {
   function closeNav(e) {
    if(!menuRef.current.contains(e.target)) {
      setActiveNavbar(false)
    }
   }
   window.addEventListener('click', closeNav)

   return () => window.removeEventListener('click', closeNav)
  }, []);
  
  return (
    <nav id="main-nav">
  <div className="logo" onClick={() => setActiveNavbar(false)}>
    <Link to="/"><img src={logo} alt="logo"/></Link>
  </div>
  <div className="navigation">
  <ul className={`menu ${activeNavbar ? "active": ''}`}>
  <Link to="/canapele"><li className="link" onClick={() => setActiveNavbar(false)}>Canapele</li></Link>
  <Link to="/coltare"><li className="link" onClick={() => setActiveNavbar(false)}>Coltare</li></Link>
  <Link to="/fotolii-si-tabureti"><li className="link" onClick={() => setActiveNavbar(false)}>Fotolii</li></Link>
  <Link to="/paturi"><li className="link" onClick={() => setActiveNavbar(false)}>Paturi</li></Link>
  <Link to="/despre-noi"><li className="link" onClick={() => setActiveNavbar(false)}>Despre Noi</li></Link>
  </ul>

  <div ref={menuRef} className="burger" onClick={() => {
    setActiveNavbar(prev => !prev)}}>
    <GiHamburgerMenu/>
  </div>

  {width > breakpoint && <Search/>}
  {width < breakpoint && <MobileSearch/>}
    </div>
</nav>
)
}

export default Navbar