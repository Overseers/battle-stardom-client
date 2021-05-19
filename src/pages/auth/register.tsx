import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import LoadScreen from '../../components/load-screen';
import { useAuth } from '../../contexts/auth';
import { useGlobal } from '../../contexts/global';

interface Props { }

const onSubmitForm = (data: any) => {
    console.log(data);
};

function Register(props: Props) {
    const { } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [login, setLogin] = useState(false);

    const global = useGlobal();
    const auth = useAuth();

    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Firebase.auth().signInWithEmailAndPassword('ppertinate@gmail.com', 'passwordd').catch(console.error);
    if (isLoading && auth.isLoggedIn) {
        return <LoadScreen text='Creating account...' />;
    }

    if (login) {
        return <Redirect to="/login" />;
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
                > */}
                <div>
                    <label
                        className="text-5xl font-bold text-gray-600 block"
                    >Email</label>
                    <input
                        type="text"
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
                <div>
                    <div>
                        <button
                            onClick={() => setLogin(true)}
                        >
                            Login (Existing Account)
                            </button>
                    </div>
                    <div>
                        <button
                            onClick={() => onSubmitForm({
                                email,
                                password,
                                confirmEmail,
                                confirmPassword
                            })}
                        >
                            Create Account
                        </button>
                    </div>
                </div>
                {/* </form> */}
            </div>
        </div >
    );
}

export default Register;
