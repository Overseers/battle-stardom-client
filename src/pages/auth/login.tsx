import { gql, useQuery, useSubscription } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import LoadScreen from '../../components/load-screen';
import { useAuth } from '../../contexts/auth';
import { useGlobal } from '../../contexts/global';
import Firebase from '../../firebase';

interface Props { }



function Login(props: Props) {
    const { } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [register, setRegister] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const global = useGlobal();
    const auth = useAuth();

    const onFormSubmit = (data: any) => {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(data.email)) {
            console.log('Provided email does not match email structure.');
            return;
        }
        setIsLoading(true);
        Firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(() => setIsLoading(false)).catch(console.error);
        console.log(data);
    };

    // Firebase.auth().signInWithEmailAndPassword('ppertinate@gmail.com', 'passwordd').catch(console.error);
    if (isLoading && !auth.isLoggedIn) {
        return <LoadScreen text='Logging In...' />;
    }

    if (register) {
        return <Redirect to="/register" />;
    }

    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center"
        >
            <div
                className=" max-w-3xl w-full mx-16 bg-gray-300 border p-8 border-gray-300 text-3xl"
            >
                {/* <form
                    className="space-y-6"
                    onSubmit={onFormSubmit}
                > */}
                <div>
                    <label
                        className="text-5xl font-bold text-gray-600 block"
                    >Email</label>
                    <input
                        type='email'
                        className="w-full p-2 border border-gray-900 rounded mt-1"
                        placeholder="Email..."
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label
                        className="text-5xl font-bold text-gray-600 block"
                    >Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border border-gray-900 rounded mt-1"
                        placeholder="Password..."
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div
                    className="flex items-center justify-between"
                >
                    <div
                        className="flex items-center"
                    >
                        <input
                            type="checkbox"
                            className="h-8 w-8 text-blue-300 rounded text-xl"
                        />
                        <label
                            className="ml-2 text-md text-gray-600"
                        >Remember Me</label>
                    </div>
                </div>
                <div>
                    <div>
                        <button
                            onClick={() => setRegister(true)}
                        >
                            Register (New Account)
                            </button>
                    </div>
                    <div>
                        <button
                            onClick={() => onFormSubmit({
                                email,
                                password
                            })}
                        >
                            Login
                        </button>
                    </div>
                </div>
                {/* </form> */}
            </div>
        </div >
    );
}

export default Login;
