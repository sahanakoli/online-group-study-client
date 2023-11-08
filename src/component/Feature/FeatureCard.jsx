/* eslint-disable react/prop-types */
import { BsBoxArrowRight } from 'react-icons/bs'
// import { motion } from "framer-motion"

const FeatureCard = ({ feature }) => {

    const { features, details } = feature;
    return (
        <div className=" w-9/12 mx-auto">
            {/* <motion.div
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
            /> */}
            <div className="card w-96 h-[200px] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><BsBoxArrowRight></BsBoxArrowRight>{features}</h2>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;