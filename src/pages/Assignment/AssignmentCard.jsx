/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AssignmentCard = ({assignment}) => {
    const {_id,title,marks, date} = assignment;
    return (
        <div className="mt-8 w-9/12 mx-auto">
            <div className="card w-11/12 mx-auto h-[300px] bg-base-100 shadow-xl">
                <div className="card-body">
                    {/* <p>sgdg</p> */}
                    <h2 className="card-title text-xl font-bold">Title: {title}</h2>
                    <p className="text-xl font-semibold">Marks: {marks}</p>
                    <p className="text-lg font-medium">Date: {date}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/view/${_id}`}><button className="btn bg-[#B68C5A]">View </button></Link>
                        <Link to={`/update/${_id}`}><button className="btn bg-[#B68C5A]">Update </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;