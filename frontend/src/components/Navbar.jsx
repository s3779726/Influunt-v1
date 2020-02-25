import React from "react";

function Navbar(){
    return (
        <nav className = "navbar navbar-expand-lg navbar-dark bg-dark add-padding add-nav">
        <a class = "navbar-brand nav-text" href= "/">Influunt</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul className = "navbar-nav active">
                <li className = "nav-item">
                    <a className = "nav-link" href ="/">Home</a>
                </li>
            </ul>
            <ul className = "navbar-nav">
                <li className = "nav-item"><a className = "nav-link" href ="/">About</a></li>
            </ul>
            <ul className = "navbar-nav">
                <li className = "nav-item"><a className = "nav-link" href ="/">Contact</a></li>
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;