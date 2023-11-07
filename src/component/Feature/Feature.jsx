/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";


const Feature = () => {
    const [features, setFeatures] = useState([]);
    
    useEffect(() =>{
        fetch('feature.json')
        .then(res => res.json())
        .then(data => setFeatures(data))
    },[])
    return (
        <div className="mt-14">
            <h2 className=" text-4xl font-bold text-center">Feature</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    features.map(feature => <FeatureCard key={feature.id} feature={feature}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Feature;