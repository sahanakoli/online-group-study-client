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
    const handleValue = (event) =>{
        console.log(event.target.value)
        assignments.filter()
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10 ml-14">
                        <label className="label">
                                <span className="label-text text-xl font-bold">Assignment Level</span>
                            </label>
                            <select onChange={handleValue} type="text" name="level"  className="input w-8/12 input-bordered">
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {
                assignments.map(assignment =><AssignmentCard key={assignment.id} assignment={assignment}></AssignmentCard>)
            }
            </div>
        </div>
    );
};

export default Assignment;