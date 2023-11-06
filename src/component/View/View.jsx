import { useLoaderData } from "react-router-dom";
import Navbar from "../../Sheard/Navbar";

const View = () => {
    const viewAssignment = useLoaderData();
    console.log(viewAssignment)

    const {title,photo,date,level, description, marks} = viewAssignment
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center items-center mt-12 mb-6">
            <div className="card card-compact w-96 h-68 bg-base-100 shadow-xl">
            <figure><img className="w-full h-[200px]" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title text-xl font-bold">Title: {title}</h2>
                <p className="text-xl font-semibold">Marks: {marks}</p>
                <p className="text-base font-medium">Description: {description}</p>
                <p className="text-lg font-medium">Date: {date}</p>
                <p className="text-lg font-medium">Level: {level}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#B68C5A]">Take Assignment</button>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default View;