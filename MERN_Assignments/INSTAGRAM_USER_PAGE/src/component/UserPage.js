import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';


function UserPage() {
    const [signUp, setsignUp] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleToggleSignUp = () => {
        setsignUp((prevsignUp) => !prevsignUp);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (signUp) {
        
            alert(`Signup submitted:\nName: ${name}\nEmail: ${email}\nUsername: ${username}\nPassword: ${password}`);
        } else {
        
            alert(`Login submitted:\nUsername: ${username}\nPassword: ${password}`);
        }

   

    };

    return (
        <div className="App mt-5 col-sm-10 col-md-6 border border-3 rounded-5 border-danger-subtle p-3 bg-dark text-white " style={{margin:"0 auto"}} >

            <h1 className='text-center mb-5 text-danger fw-bolder    '>Instagram</h1>

            {/* Toggle between sign-up and login views */}
            <div className='d-flex justify-content-center '>

            <button onClick={handleToggleSignUp} className='btn btn-danger w-50  d-block flaot-end'>
                {signUp ? 'Switch to Login' : 'Switch to Sign Up'}
            </button>
            </div>
             <br />

            {/* Form for sign-up or login based on the user's choice */}
            <form onSubmit={handleSubmit} >

                  {/* Additional fields for sign-up view */}
                  {signUp && (
                    <>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name"value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>


                    </>
                )}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Uername</Form.Label>
                    <Form.Control type="text" placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" value={password}

                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>


              

                {/* Submit button */}
                <button type="submit"className='btn w-100 btn-danger mb-5' >{signUp ? 'Sign Up' : 'Login'}</button>


            </form>
        </div>
    );
}

export default UserPage;
