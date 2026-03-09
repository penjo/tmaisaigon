import { useState } from "react";
import { NavLink } from "react-router-dom";

// Component này dùng chung cho tất cả các mục có menu con
export default function NavDropdown({ title, items, isOpen, toggleMenu, closeMenu }) {
  return (
    <div className="nav-item dropdown" onMouseLeave={closeMenu}>
      <span className="dropdown-title" onClick={toggleMenu}>
        {title} <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </span>

      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index}>
              <NavLink 
              to={item.path} 
              onClick={closeMenu}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}