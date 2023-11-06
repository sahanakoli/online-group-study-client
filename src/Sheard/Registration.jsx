import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import Navbar from "./Navbar";
import { ImGoogle } from 'react-icons/im'


const Registration = () => {

    const {createUser} = useContext(AuthContext);
    const {googleSignIn} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        createUser(email, password)
          .then(result =>{
              console.log(result.user)
              event.target.reset();
             
             updateProfile(result.user, {
              displayName: name,
              photoURL:"https://i.ibb.co/D9wWRM6/olivia.jpg"
             })
             .then( () => console.log())
              
  
              Swal.fire(
                'Good job!',
                'Registration successfully ',
                'success'
              )
          })
          .catch(error =>{
              console.error(error)
              Swal.fire({
                    icon: 'error',
                    text: 'Already used'
                  })
          })

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
                    <h2 className=" text-3xl font-bold">Registration Now</h2>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Registration</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 mb-3">
                                <input className="btn bg-[#B68C5A] " type="submit" value="Registration" />
                                <button onClick={handleGoogle}  className="btn font-medium bg-[#B68C5A] mt-4"><ImGoogle className="mr-2 w-4 h-4"></ImGoogle>Google Sign In</button>
                            </div>
                            <div>
                            <p className='ml-16'>Already have an account? <Link to='/login' className=' text-[#B68C5A]'>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;