import React from "react";
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    {/* PROPERTY BINDING */}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmWnt91Uzp8Ci1UIRzQCef5ZDdJ0GN5ZIVw&usqp=CAU" style={{ height: 50, width: 50, padding: 10 }}></img>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="funcom">Functional Component</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="classcom">Class Component</Link>
                </li>
                <li>
                    <form className="d-flex input-group w-auto">
                        <input
                            type="search"
                            className="form-control rounded"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                        />
                        <span className="input-group-text border-0" id="search-addon">
                            <i className="fas fa-search"></i>
                        </span>
                    </form>
                </li>

            </ul>
        </nav>
        </>
    )
}