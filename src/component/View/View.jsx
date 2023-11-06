import { useLoaderData } from "react-router-dom";
import Navbar from "../../Sheard/Navbar";

const View = () => {
    const viewAssignment = useLoaderData();
    console.log(viewAssignment)

    const {title, description, marks} = viewAssignment
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center items-center mt-12 mb-6">
            <div className="card w-96 h-68 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">Title: {title}</h2>
                    <p className="text-xl font-semibold">Marks: {marks}</p>
                    <p className="text-base font-medium">Description: {description}</p>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default View;