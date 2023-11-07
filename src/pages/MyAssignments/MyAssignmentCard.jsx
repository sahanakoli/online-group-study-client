/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const MyAssignmentCard = ({assignment,createAssignment,setCreateAssignment}) => {
    const { photo,description, title, marks,email, date,level } = assignment;

    const handleDelete = email => {
        console.log(email);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/createAssignment/${email}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Assignment has been deleted.',
                                'success'
                            )
                            const remaining = createAssignment.filter(assign => assign.email !== email);
                            setCreateAssignment(remaining);
                        }

                    })
            }
        })
    }
    return (
        <div className="mt-8 w-9/12 mx-auto">
        <div className="card card-compact w-96 h-[600px] bg-base-100 shadow-xl">
            <figure><img className="w-full h-[200px]" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title text-xl font-bold">Title: {title}</h2>
            <p className="text-xl font-semibold">Marks: {marks}</p>
            <p className="text-xl font-semibold">Email: {email}</p>
            <p className="text-base font-medium">Description: {description}</p>
            <p className="text-lg font-medium">Date: {date}</p>
            <p className="text-lg font-medium">Level: {level}</p>
            <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(email)} className="btn bg-[#B68C5A] text-white">Delete</button>
                    
                </div>
            </div>
        </div>
    </div>
    );
};

export default MyAssignmentCard;