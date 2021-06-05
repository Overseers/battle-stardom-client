import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import test, { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCodeBranch, faDumbbell, faArchway } from '@fortawesome/free-solid-svg-icons';
// import history from '../history';

interface Props { }

function Header(props: Props) {
    const { } = props;

    const [current, setCurrent] = useState(0);

    const location = useLocation();
    const history = useHistory();

    return (
        <nav
            className='navbar'
        >
            <ul
                className="navbar-nav"
            >
                <li
                    className="logo"
                >
                    <Link
                        to="/"
                        className="nav-link primary-text"
                        onClick={() => setCurrent(0)}
                    >
                        <span
                            className="link-text"
                        >Battle Stardom</span>

                        <FontAwesomeIcon icon={faDumbbell} />
                    </Link>
                </li>
                <li
                    className="nav-item"
                >
                    <Link
                        to='/'
                        className={`nav-link${current === 0 ? ' primary-text' : ''}`}
                        onClick={() => setCurrent(0)}
                    >
                        <FontAwesomeIcon icon={faHome} />
                        <span className="link-text">Home</span>
                    </Link>
                </li>
                <li
                    className="nav-item"
                >
                    <Link
                        to='/battle'
                        className={`nav-link${current === 1 ? ' primary-text' : ''}`}
                        onClick={() => setCurrent(1)}
                    >
                        <FontAwesomeIcon icon={faArchway} />
                        <span className="link-text">Battle</span>
                    </Link>
                </li>
            </ul>
        </nav>
        // <header>
        //     <button
        //         style={{
        //             border: 'solid black 1px',
        //             fontSize: '1.5rem',
        //             fontWeight: 'initial',
        //             padding: '4px 8px',
        //             margin: '2px',
        //             background: location.pathname === '/' ? 'white' : 'transparent'
        //         }}
        //         onClick={() => {
        //             history.push('/');
        //         }}
        //     >
        //         Home
        //         </button>
        //     <button
        //         style={{
        //             border: 'solid black 1px',
        //             fontSize: '1.5rem',
        //             fontWeight: 'initial',
        //             padding: '4px 8px',
        //             margin: '2px',
        //             background: location.pathname === '/battle' ? 'white' : 'transparent'
        //         }}
        //         onClick={() => {
        //             history.push('/battle');
        //         }}
        //     >
        //         Battle
        //         </button>
        //     <button
        //         style={{
        //             border: 'solid black 1px',
        //             fontSize: '1.5rem',
        //             fontWeight: 'initial',
        //             padding: '4px 8px',
        //             margin: '2px',
        //             background: location.pathname === '/shop' ? 'white' : 'transparent'
        //         }}
        //         onClick={() => {
        //             history.push('/shop');
        //         }}
        //     >
        //         Shop
        //         </button>
        //     <button
        //         style={{
        //             border: 'solid black 1px',
        //             fontSize: '1.5rem',
        //             fontWeight: 'initial',
        //             padding: '4px 8px',
        //             margin: '2px',
        //             background: location.pathname === '/mtx' ? 'white' : 'transparent'
        //         }}
        //         onClick={() => {
        //             history.push('/mtx');
        //         }}
        //     >
        //         Microtransaction
        //         </button>
        //     <button
        //         style={{
        //             border: 'solid black 1px',
        //             fontSize: '1.5rem',
        //             fontWeight: 'initial',
        //             padding: '4px 8px',
        //             margin: '2px',
        //             background: (location.pathname === '/login' || location.pathname === '/logout') ? 'white' : 'transparent'
        //         }}
        //         onClick={() => {
        //             history.push('/login');
        //         }}
        //     >
        //         Logout | Login
        //         </button>
        // </header>
    );
}

export default Header;
