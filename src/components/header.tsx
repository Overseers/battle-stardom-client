import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// import history from '../history';

interface Props { }

function Header(props: Props) {
    const { } = props;

    const location = useLocation();
    const history = useHistory();

    return (
        <header>
            <button
                style={{
                    border: 'solid black 1px',
                    fontSize: '1.5rem',
                    fontWeight: 'initial',
                    padding: '4px 8px',
                    margin: '2px',
                    background: location.pathname === '/' ? 'white' : 'transparent'
                }}
                onClick={() => {
                    history.push('/');
                }}
            >
                Home
                </button>
            <button
                style={{
                    border: 'solid black 1px',
                    fontSize: '1.5rem',
                    fontWeight: 'initial',
                    padding: '4px 8px',
                    margin: '2px',
                    background: location.pathname === '/battle' ? 'white' : 'transparent'
                }}
                onClick={() => {
                    history.push('/battle');
                }}
            >
                Battle
                </button>
            <button
                style={{
                    border: 'solid black 1px',
                    fontSize: '1.5rem',
                    fontWeight: 'initial',
                    padding: '4px 8px',
                    margin: '2px',
                    background: location.pathname === '/shop' ? 'white' : 'transparent'
                }}
                onClick={() => {
                    history.push('/shop');
                }}
            >
                Shop
                </button>
            <button
                style={{
                    border: 'solid black 1px',
                    fontSize: '1.5rem',
                    fontWeight: 'initial',
                    padding: '4px 8px',
                    margin: '2px',
                    background: location.pathname === '/mtx' ? 'white' : 'transparent'
                }}
                onClick={() => {
                    history.push('/mtx');
                }}
            >
                Microtransaction
                </button>
            <button
                style={{
                    border: 'solid black 1px',
                    fontSize: '1.5rem',
                    fontWeight: 'initial',
                    padding: '4px 8px',
                    margin: '2px',
                    background: (location.pathname === '/login' || location.pathname === '/logout') ? 'white' : 'transparent'
                }}
                onClick={() => {
                    history.push('/login');
                }}
            >
                Logout | Login
                </button>
        </header>
    );
}

export default Header;
