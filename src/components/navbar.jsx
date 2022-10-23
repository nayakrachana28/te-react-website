import React from "react";
import { Link } from 'react-router-dom';
import { createUseStyles } from "react-jss";
import '../styles/nav.css'

const navStyle=createUseStyles({
logo:{
    backgroundColor:"orange"
}
})

export default function NavBar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg fixed-top navbar-scroll shadow-0" style={{backgroundColor:'#434f53',height:80}}>
                <div className="container">
                <a className="navbar-brand">
                    <div className="logo">
                        <div>
                        <h3>Haber</h3>
                        <h6>INVESTMENT COMPANY</h6>
                        </div>
                        
                    </div>
                </a>
                    <button className="navbar-toggler ps-0" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
                        aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="d-flex justify-content-start align-items-center">
                            <i className="fas fa-bars"></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarExample01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link px-3 navcon" to="">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3 navcon" to="" style={{color:'white'}}>new collection</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3 navcon" to="" style={{color:'white'}}>about us</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link px-3 navcon" to="" style={{color:'white'}}>collaboration</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link px-3 navcon" to="" style={{color:'white'}}>contact us</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav flex-row">
                            <li className="nav-item">
                                <Link className="nav-link icon" to="">
                                    <i className="fab fa-youtube"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link icon" to="">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link icon" to="">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link icon" to="">
                                <i class="fa-brands fa-google-plus"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link icon" to="">
                                <i class="fa-brands fa-twitter"></i>
                                </Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
{/*  */}

        //     <nav className="navbar navbar-expand-sm navbar-light fixed-top navbar-scroll shadow-0" >
        //     <ul className="navbar-nav">
        //         <li className="nav-item">
                  
        //             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmWnt91Uzp8Ci1UIRzQCef5ZDdJ0GN5ZIVw&usqp=CAU" style={{ height: 50, width: 50, padding: 10 }}></img>
        //         </li>
        //         <li className="nav-item">
        //             <Link className="nav-link" to="">Home</Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link className="nav-link" to="funcom">Functional Component</Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link className="nav-link" to="classcom">Class Component</Link>
        //         </li>
        //         <li>
        //             <form className="d-flex input-group w-auto">
        //                 <input
        //                     type="search"
        //                     className="form-control rounded"
        //                     placeholder="Search"
        //                     aria-label="Search"
        //                     aria-describedby="search-addon"
        //                 />
        //                 <span className="input-group-text border-0" id="search-addon">
        //                     <i className="fas fa-search"></i>
        //                 </span>
        //             </form>
        //         </li>

        //     </ul>
        // </nav> 