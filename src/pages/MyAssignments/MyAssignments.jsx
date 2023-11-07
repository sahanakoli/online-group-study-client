// import { useEffect, useState } from "react";
import Navbar from "../../Sheard/Navbar";
// import MyAssignmentCard from "./MyAssignmentCard";


const MyAssignments = () => {
    // const [createAssignment, setCreateAssignment] = useState([]);

    // useEffect(() =>{
    //     fetch('http://localhost:5000/createAssignment')
    //     .then(res => res.json())
    //     .then(data => setCreateAssignment(data))
    // },[])
    return (
        <div>
            <Navbar></Navbar>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {
                createAssignment.map(assignment =><MyAssignmentCard 
                key={assignment.id} 
                assignment={assignment}
                createAssignment={createAssignment}
                setCreateAssignment={setCreateAssignment}
                ></MyAssignmentCard>)
            }
            </div> */}
        </div>
    );
};

export default MyAssignments;