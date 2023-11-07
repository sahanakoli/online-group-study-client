import { useEffect, useState } from "react";
import Navbar from "../../Sheard/Navbar";
import MyAssignmentCard from "./MyAssignmentCard";


const MyAssignments = () => {
    const [assignment, setAssignment] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/createAssignment')
        .then(res => res.json())
        .then(data => setAssignment(data))
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {
                assignment.map(assignment =><MyAssignmentCard key={assignment.id} assignment={assignment}></MyAssignmentCard>)
            }
            </div>
        </div>
    );
};

export default MyAssignments;