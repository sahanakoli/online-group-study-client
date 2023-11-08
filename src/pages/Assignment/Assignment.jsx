import {  useEffect, useState } from "react";
import Navbar from "../../Sheard/Navbar";
import AssignmentCard from "./AssignmentCard";
import axios from "axios";

const Assignment = () => {
    const [assignments, setAssignments] = useState([]);
    // const [itemPerPage, setItemPerPage] = useState(5);
    // const numberOfPage = Math.ceil(assignments / itemPerPage);

    // const pages = [...Array(numberOfPage).keys()];

    const url = 'https://online-group-study-server.vercel.app/assignments'
    useEffect(() =>{
        axios.get(url, {withCredentials: true})
        .then(res => {
            setAssignments(res.data);
        })
    }, [])
    
    // useEffect(() =>{
    //     fetch('https://online-group-study-server.vercel.app/assignments')
    //     .then(res => res.json())
    //     .then(data => setAssignments(data))
    // },[])
    const handleValue = (event) =>{
        event.target.value
        const level = assignments.filter(assign => assign.level == event.target.value);
        setAssignments(level);
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10 ml-14">
                        <label className="label">
                                <span className="label-text text-xl font-bold">Assignment Level</span>
                            </label>
                            <select onChange={handleValue} type="text" name="level"  className="input w-8/12 input-bordered">
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {
                assignments.map(assignment =><AssignmentCard 
                key={assignment.id} 
                assignment={assignment}
                assignments={assignments}
                setAssignments={setAssignments}
                ></AssignmentCard>)
            }
            </div>
            {/* <div className="">
                {
                    pages.map(page => <button key={page}>{page}</button>)
                }
            </div> */}
        </div>
    );
};

export default Assignment;