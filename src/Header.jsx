import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <section className='mainContainer'>
        <aside className='logoBlock'>
          <h1>LOGO</h1>
        </aside>
        <aside className='listitems'>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/create">ADD EMPLOYEE</NavLink>
            </li>
            <li>
              <NavLink to="/view">VIEW EMPLOYEE</NavLink>
            </li>
          </ul>
        </aside>
      </section>
    </>
  );
}
export default Header