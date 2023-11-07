/* eslint-disable react/prop-types */
import { BsBoxArrowRight } from 'react-icons/bs'

const FeatureCard = ({feature}) => {

    const {features,details} = feature;
    return (
        <div className=" w-9/12 mx-auto">
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