import './Filtros.css';
import { CiFilter } from 'react-icons/ci';
import edit from '../../assets/Images/edit.png'
import inbox from '../../assets/Images/envelope.png'
import logout from '../../assets//Images/log-out.png'
import help from '../../assets/Images/question.png'
import user from '../../assets/Images/user.png'
import settings from '../../assets/Images/settings.png'
import { useState } from 'react';

function Filtros() {

  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <div className='menu-container'>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <CiFilter className='img' />

        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
          <h3>The Kiet<br /><span>Website Designer</span></h3>
          <ul>
            <DropdownItem img={user} text={"My profile"} />
            <DropdownItem img={edit} text={"Edit Profile"} />
            <DropdownItem img={inbox} text={"Inbox"} />
            <DropdownItem img={settings} text={"Settings"} />
            <DropdownItem img={help} text={"Helps"} />
            <DropdownItem img={logout} text={"Logout"} />
          </ul>

        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className='dropdownItem'>
      <img src={props.img}></img>
      <a>{props.text}</a>
    </li>
  );
}

export default Filtros;
