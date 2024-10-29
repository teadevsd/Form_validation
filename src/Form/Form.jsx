import '../Form/Form.css';
import { MdLock } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { useState } from 'react'; 

const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Handle input changes
    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload on form submission

        // Basic validation
        if (username.trim() === '' || password.trim() === '') {
            setError('Both fields are required!');
        } else {
            setError(''); // Clear any previous errors
            setIsLoggedIn(true); // Simulate successful login
        }
    };

    return (
        <div className='wrapper'>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>

                    <div className='inputcontainer'>
                        <label htmlFor="username">Username: </label>
                        <input 
                            type="text" 
                            name="username" 
                            onChange={handleUsername} 
                            value={username} 
                        />
                        <FaUserCheck className='iconsss' />
                    </div>

                    <div className='inputcontainer'>
                        <label htmlFor="password">Password: </label>
                        <input 
                            type="password" 
                            name="password" 
                            onChange={handlePassword} 
                            value={password} 
                        />
                        <MdLock className='iconsss' />
                    </div>

                    {error && <p className='error'>{error}</p>} {/* Display error message */}

                    <div className='rememberpas'>
                        <label>
                            <input type='checkbox' /> Remember me
                        </label>
                        <a href="/">Forgot password</a>
                    </div>

                    <button type='submit'>Login</button>
                </form>

                {isLoggedIn && (
                    <div className='success'>
                        <h2>Welcome, {username}!</h2>
                    </div>
                )}

                <h2>Form Values</h2>
                <p>Username: {username}</p>
                <p>Password: {password}</p>
            </div>
        </div>
    );
};

export default Form;
