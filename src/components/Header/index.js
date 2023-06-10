import './style.scss'
import githublogo from './github-mark.png';
import githublogomirror from './github-mark-mirror.png'



function Header() {

    return (
        <header className="header" role="banner">
            <img className="header__img" src={githublogomirror} alt="" srcset="" />
            <h1 className="header__title">Moteur de recherche Github</h1>
            <img className="header__img" src={githublogo} alt="" srcset="" />
        </header>
    )
}

export default Header;