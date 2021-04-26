import './css/Header.css';   // Change this accordingly where CSS is located
import logo from '../img/Logo.png'; // Change this accordingly where logo is located



function Header(props) {

  return (

    <div className="Header flex" id='Header' style={{backgroundColor: '#000033'}} >
        <div className="nav-bar flex">

          <div className="brand">
            <a href="#">
              <img src={logo} alt="logo"/>
            </a>
          </div>

          <div className="nav-list flex">

            <h3 style={{color:'white'}}> Simple Chat Example </h3>

          </div>

        </div>

      </div>

  );
}

export default Header;
