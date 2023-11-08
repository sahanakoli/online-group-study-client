import { useLoaderData } from "react-router-dom";
import Navbar from "../../Sheard/Navbar";

const View = () => {
    const viewAssignment = useLoaderData();
    console.log(viewAssignment)

    const { title, photo, date, level, description, marks } = viewAssignment
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
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn bg-[#B68C5A] text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Take Assignment</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <form >
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">PDF Link</span>
                                            </label>
                                            <input type="text" name="link" placeholder="Link" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">TEXT</span>
                                            </label>
                                            <input type="text" name="text" placeholder="Text" className="input input-bordered" required />
                                        </div>
                                    </form>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default View;