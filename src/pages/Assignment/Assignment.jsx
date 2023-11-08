/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {  useEffect, useState } from "react";
import Navbar from "../../Sheard/Navbar";
import AssignmentCard from "./AssignmentCard";
import axios from "axios";


const Assignment = () => {
    const [assignments, setAssignments] = useState([]);
    const [value, setValue] = useState('Easy');
    const [event, setEvent] = useState([])
    const [itemPerPage, setItemPerPage] = useState(5);
    const numberOfPage = Math.ceil(assignments.length / itemPerPage);
    const [currentPage, setCurrentPage] = useState(0);
    
    const pages = [...Array(numberOfPage).keys()];

    const url = `https://online-group-study-server.vercel.app/assignments?page=${currentPage}`
    useEffect(() =>{
        axios.get(url, {withCredentials: true})
        .then(res => {
            setAssignments(res.data);
            setEvent(res.data)
        })
    }, [currentPage])
    
    
    const handleValue = (event) =>{
        
        
        
        setValue(event.target.value)
    }
    useEffect(() =>{
        const level = assignments.filter(assign => assign.level == value);
        console.log(level)
        setEvent(level);

    }, [value])
    console.log(value)

    const handleItemPerPage = e =>{

        const val = parseInt(e.target.value);
        console.log(val);
        setItemPerPage(val);
        setCurrentPage(0);
    }

    const handlePrevPage = () =>{
        if(currentPage > 0){
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () =>{
        if(currentPage < pages.length){
            setCurrentPage(currentPage + 1);
        }
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
                event.map(assignment =><AssignmentCard 
                key={assignment.id} 
                assignment={assignment}
                assignments={assignments}
                setAssignments={setAssignments}
                ></AssignmentCard>)
            }
            </div>
            <div className="mt-14 mb-10">
            <p className=" text-xl font-medium text-center">Current Page: {currentPage}</p>
            <div className="flex justify-center items-center mt-2">
            <button className="btn mr-4" onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page => <button
                      onClick={() => setCurrentPage(page)}  
                    className="btn mr-2"  
                    key={page}>
                    {page}</button>)
                }
                <button className="btn mr-2" onClick={handleNextPage}>Next</button>
                <select className="btn" value={itemPerPage}  name="" id="">
                    <option value="5">5</option>
                </select>
            </div>
            </div>
        </div>
    );
};

export default Assignment;