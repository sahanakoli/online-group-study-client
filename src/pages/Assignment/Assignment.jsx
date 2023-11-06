import { useEffect, useState } from "react";
import Navbar from "../../Sheard/Navbar";
import AssignmentCard from "./AssignmentCard";

const Assignment = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/assignments')
        .then(res => res.json())
        .then(data => setAssignments(data))
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {
                assignments.map(assignment =><AssignmentCard key={assignment.id} assignment={assignment}></AssignmentCard>)
            }
            </div>
        </div>
    );
};

export default Assignment;