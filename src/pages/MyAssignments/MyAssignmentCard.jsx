/* eslint-disable react/prop-types */


const MyAssignmentCard = ({assignment}) => {
    const { photo,description, title, marks,email, date,level } = assignment;
    return (
        <div className="mt-8 w-9/12 mx-auto">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full h-[200px]" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title text-xl font-bold">Title: {title}</h2>
            <p className="text-xl font-semibold">Marks: {marks}</p>
            <p className="text-xl font-semibold">Email: {email}</p>
            <p className="text-base font-medium">Description: {description}</p>
            <p className="text-lg font-medium">Date: {date}</p>
            <p className="text-lg font-medium">Level: {level}</p>
            <div className="card-actions justify-end">
                    <button className="btn bg-[#B68C5A] text-white">Delete</button>
                    
                </div>
            </div>
        </div>
    </div>
    );
};

export default MyAssignmentCard;