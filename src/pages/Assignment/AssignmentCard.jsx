/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AssignmentCard = ({assignment}) => {
    const {_id,title,marks, date} = assignment;
    return (
        <div className="mt-8 w-9/12 mx-auto">
            <div className="card w-96 h-[300px] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">Title: {title}</h2>
                    <p className="text-xl font-semibold">Marks: {marks}</p>
                    <p className="text-lg font-medium">Date: {date}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/view/${_id}`}><button className="btn bg-blue-300">View </button></Link>
                        <Link to={`/update/${_id}`}><button className="btn bg-blue-300">Update </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;