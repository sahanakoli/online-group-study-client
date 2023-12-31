import { useLoaderData } from "react-router-dom";
import Navbar from "../../Sheard/Navbar";
import Swal from "sweetalert2";


const UpdateAssignment = () => {

    const assignment = useLoaderData();
    const {_id,title,photo,description,marks,date,level} = assignment;

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const date = form.date.value;
        const marks = form.marks.value;
        const level = form.level.value;
        const photo = form.photo.value;

        const updatedAssignment = {title, description, date, marks,level, photo}
        console.log(updatedAssignment);

         // send data to the server
         fetch(`https://online-group-study-server.vercel.app/assignments/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedAssignment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Assignment Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
           <h2 className=" text-2xl font-bold text-center mt-8">Update Assignments</h2>
            <div className="bg-base-200 w-11/12 mx-auto mt-4 mb-4 shadow-lg rounded-lg p-24">
                <form onSubmit={handleUpdate} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" defaultValue={title} placeholder="Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" defaultValue={date} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Marks</span>
                            </label>
                            <input type="text" name="marks" defaultValue={marks} placeholder="Marks" className="input input-bordered" required />
                        </div>
                        <div>
                        <label className="label">
                                <span className="label-text">Level</span>
                            </label>
                            <select type="text" name="level" defaultValue={level}  className="input w-full input-bordered">
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#B68C5A] text-white">Update Assignment</button>
                    </div>
                </form>
            </div> 
        </div>
    );
};

export default UpdateAssignment;