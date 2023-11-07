import { Link } from "react-router-dom";
import Navbar from "../../Sheard/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2';
import { ImGoogle } from 'react-icons/im'
import axios from "axios";


const Login = () => {

    const {signIn} = useContext(AuthContext);
    const {googleSignIn} = useContext(AuthContext);

    const handleLogin = event => {
            event.preventDefault();
    
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            

            signIn(email,password)
            .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = {email};

            // get access token
            axios.post('http://localhost:5000/jwt', user)
            .then(res =>{
                console.log(res.data);
            })
            

            Swal.fire(
                'Good job!',
                'Login successfully ',
                'success'
              )
        })
        .catch(error => console.log(error));
    }

    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero w-11/12 mx-auto min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <h2 className=" text-3xl font-bold">Login Now!</h2>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 mb-3">
                                <input className="btn bg-[#B68C5A] text-white" type="submit" value="Login In" />
                                <button onClick={handleGoogle}  className="btn font-medium bg-[#B68C5A] text-white mt-4"><ImGoogle className="mr-2 w-4 h-4"></ImGoogle>Google Sign In</button>
                            </div>
                            <div>
                            <p className='ml-16'>Do not have an account? <Link to='/registration' className=' text-[#B68C5A]'>Registration</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;