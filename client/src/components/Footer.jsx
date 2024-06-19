import React from 'react';
import '../css/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="">
                <p>Poson Card</p>
                <small>&copy; Sandeepa Mallawarachchi. All rights reserved.</small>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/sandeepa-mallawarachchi" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/sandeepaMallawarachchi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100082248460209&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;