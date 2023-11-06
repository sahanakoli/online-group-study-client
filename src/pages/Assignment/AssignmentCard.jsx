/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AssignmentCard = ({ assignment }) => {
    const { _id,photo, title, marks, date,level } = assignment;
    return (
        <div className="mt-8 w-9/12 mx-auto">
            {/* <div className="card w-11/12 mx-auto h-[300px] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">Title: {title}</h2>
                    <p className="text-xl font-semibold">Marks: {marks}</p>
                    <p className="text-lg font-medium">Date: {date}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/view/${_id}`}><button className="btn bg-[#B68C5A]">View </button></Link>
                        <Link to={`/update/${_id}`}><button className="btn bg-[#B68C5A]">Update </button></Link>
                    </div>
                </div>
            </div> */}
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-[200px]" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title text-xl font-bold">Title: {title}</h2>
                <p className="text-xl font-semibold">Marks: {marks}</p>
                <p className="text-lg font-medium">Date: {date}</p>
                <p className="text-lg font-medium">Level: {level}</p>
                <div className="card-actions justify-center">
                        <Link to={`/view/${_id}`}><button className="btn bg-[#B68C5A]">View Assignment</button></Link>
                        <Link to={`/update/${_id}`}><button className="btn bg-[#B68C5A]">Update Assignment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;