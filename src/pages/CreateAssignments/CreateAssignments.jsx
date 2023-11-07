import Swal from "sweetalert2";
import Navbar from "../../Sheard/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const CreateAssignments = () => {

    const {user} = useContext(AuthContext);

    const handleCreate = e => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const date = form.date.value;
        const email = form.email.value;
        const marks = form.marks.value;
        const level = form.level.value;
        const photo = form.photo.value;

        const newAssignment = {title, description, date,email, marks,level, photo}
        console.log(newAssignment);

        // send data to the server
        fetch('http://localhost:5000/createAssignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAssignment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title:'Success!',
                    text: 'Create Assignment Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className=" text-2xl font-bold text-center mt-8">Create Assignments</h2>
            <div className="bg-base-200 w-11/12 mx-auto mt-4 mb-4 shadow-lg rounded-lg p-24">
                <form onSubmit={handleCreate} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
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
                            <input type="email" name="email" defaultValue={user?.email}  placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Marks</span>
                            </label>
                            <input type="text" name="marks" placeholder="Marks" className="input input-bordered" required />
                        </div>
                        <div>
                        <label className="label">
                                <span className="label-text">Level</span>
                            </label>
                            <select type="text" name="level"  className="input w-full input-bordered">
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#B68C5A] btn-block text-white">Create Assignment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAssignments;