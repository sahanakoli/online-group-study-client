/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AssignmentCard = ({ assignment,assignments,setAssignments }) => {
    const { _id,photo, title, marks, date,level } = assignment;

    const handleDelete = id => {
        Swal.fire({
            title: 'Do you want to delete assignment?',
            showDenyButton: true,
            confirmButtonText: 'delete',
            denyButtonText: `cancel`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://online-group-study-server.vercel.app/assignments/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted Successfully ',
                        'success'
                      )
                      const remaining = assignments.filter(assign => assign._id !== id);
                      setAssignments(remaining);
                }

            })
              
            } else if (result.isDenied) {
              Swal.fire('Assignment not deleted')
            }
          })
        
    }
    return (
        <div className="mt-8 w-9/12 mx-auto">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-[200px]" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title text-xl font-bold">Title: {title}</h2>
                <p className="text-xl font-semibold">Marks: {marks}</p>
                <p className="text-lg font-medium">Due Date: {date}</p>
                <p className="text-lg font-medium">Level: {level}</p>
                <div className="card-actions justify-center">
                        <Link to={`/view/${_id}`}><button className="btn bg-[#B68C5A] text-white">View</button></Link>
                        <Link to={`/updateAssignment/${_id}`}><button className="btn bg-[#B68C5A] text-white">Update</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-[#B68C5A] text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;