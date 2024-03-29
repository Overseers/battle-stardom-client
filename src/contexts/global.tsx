import React, { createContext, useContext, useEffect, useState } from 'react';
import Firebase from '../firebase';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';
// import history from '../history';

const cookies = new Cookies();

export const fetcher = async (input: RequestInfo, init?: RequestInit | undefined): Promise<Response> => {
    return fetch(input, {
        ...(init || {}),
        headers: {
            ...(init?.headers || {}),
            Authorization: `Bearer ${Firebase && Firebase.auth && Firebase.auth() && Firebase.auth().currentUser && await Firebase?.auth()?.currentUser?.getIdToken() || ''}`
        }
    });
};

interface Context {

}

const context = createContext<Context>({

});

interface Props {
    children: React.ReactNode;
}

function Global(props: Props) {
    const {
        children
    } = props;

    const data = ContextData();

    return (
        <context.Provider
            value={data}
        >
            {
                children
            }
        </context.Provider>
    );
}

const ContextData = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log(cookies.get('willAutoSignIn'));
    const isSignedIn = !!cookies.get('willAutoSignIn');
    const history = useHistory();

    const signOut = () => {
        Firebase.auth().signOut();
        history.push('/login');
    };

    useEffect(() => {
        Firebase.auth().onAuthStateChanged(user => {
            return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
        });
    }, [true]);

    useEffect(() => {
        cookies.set('willAutoSignIn', isLoggedIn);
        if (isLoggedIn) {
            return () => {
                history.push('/');
            };
        }

    }, [isLoggedIn]);

    return {
        user: {
            isLoggedIn,
            isSignedIn,
            signOut
        }
    };
};

export const useGlobal = () => useContext(context);

export default Global;
