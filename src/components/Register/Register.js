import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Button } from 'react-bootstrap';
import './Register.css'

import img from '../../images/logo2.png'
import useAuth from '../../hooks/useAuthContext';
import { useHistory, useLocation } from 'react-router';

const Register = () => {
    const { googleSignIn, emailRegister, updateUserName, facebookSignIn, emailSignIn, error, setError } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || './'

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isExist, setIsExist] = useState(false)


    const handleExist = e => {
        setIsExist(e.target.checked)
    }
    // console.log(isExist)

    const handleNameInput = e => {
        setName(e.target.value)
    }

    const handleEmailInput = e => {
        setEmail(e.target.value)
    }

    const handlePasswordInput = e => {
        setPassword(e.target.value)
    }

    useEffect(() => {
        updateUserName(name);
    }, [emailRegister])

    const emailPasswordRegister = () => {
        emailRegister(email, password)
            .then((result) => {
                // Signed in 
                history.push(redirect_uri)
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const emailPasswordSignIn = () => {
        emailSignIn(email, password)
            .then((result) => {
                // Signed in 
                history.push(redirect_uri)
                // ...
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const handleEmailRegistraion = e => {
        e.preventDefault();

        !isExist ? emailPasswordRegister() : emailPasswordSignIn()

        //reset Form
        document.forms['register-form'].reset()
        //setError
        setError('')
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect_uri)
            }).catch((error) => {
                setError(error.message);
            });
    }

    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then((result) => {
                history.push(redirect_uri)
            })
            .catch((error) => {
                // Handle Errors here.
                setError(error.message)
            });
    }

    return (
        <div className="registration mt-5">
            <Container >
                <Col xs={12} md={10} lg={5} className="mx-auto">
                    <div className="text-center mb-5">
                        <img className="mx-auto w-50 " src={img} alt="" />
                    </div>
                    <div className="text-center">
                        <Button onClick={handleGoogleSignIn} variant="success" size="md" className="my-2 w-100 py-3">Continue With Google</Button>
                        <Button onClick={handleFacebookSignIn} variant="primary" size="md" className="my-2 w-100 py-3 mb-3">Continue With Facebook</Button>
                        <h2>OR</h2>
                    </div>
                    <Form id="register-form" onSubmit={handleEmailRegistraion}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {!isExist &&
                                <Form.Control onBlur={handleNameInput} className="py-3" type="name" placeholder="Enter Your Name" required />}
                            <br />
                            <Form.Control onBlur={handleEmailInput} className="py-3" type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control onBlur={handlePasswordInput} className="py-3" type="password" placeholder="Password" required />
                        </Form.Group>
                        <span className="text-danger py-3">{error}</span>
                        <br />
                        <Button variant="danger" size="lg" className="w-100 py-3" type="submit">
                            {!isExist ? 'Register' : 'Login'}
                        </Button>
                    </Form>
                    <div className=" mt-2">
                        <Form.Group className="mb-3 text-danger" controlId="formBasicCheckbox">
                            <Form.Check onChange={handleExist} type="checkbox" label="Already have an account ?" />
                        </Form.Group>
                    </div>
                </Col>
            </Container>

        </div >
    );
};

export default Register;