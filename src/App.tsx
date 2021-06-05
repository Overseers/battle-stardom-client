import React, { useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import { useGlobal } from './contexts/global';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Logout from './pages/auth/logout';
import { useAuth } from './contexts/auth';
import LoadScreen from './components/load-screen';
import Battle from './pages/battle';
import BattleContext from './contexts/battle';

function App() {
    const global = useGlobal();
    const auth = useAuth();
    return (
        <div
            className='h-screen w-full bg-gray-800 lg:bg-red-300'
        >
            <Header />
            <main>
                <Switch>
                    <Route
                        path='/'
                        exact
                    >
                        <Home />
                    </Route>
                    <Route
                        path='/login'
                    >
                        <Login />
                    </Route>
                    <Route
                        path='/battle'
                        exact
                    >
                        <BattleContext>
                            <Battle />
                        </BattleContext>
                    </Route>
                    <Route
                        path='/register'
                    >
                        <Register />
                    </Route>
                    <Route
                        path='/logout'
                    >
                        <Logout />
                    </Route>
                    <Route
                        render={() => <Route path="/login" />}
                    />
                </Switch>
            </main>
        </div>
    );
}

export default App;
