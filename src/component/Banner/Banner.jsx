

const Banner = () => {
    return (
        <div className="mt-10">
            <div className="hero w-11/12 mx-auto h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/Qk2fVPS/study.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Online Group Study<br/> Assignment</h1>
                        <p className="mb-5">Enhance your learning with interactive online group study sessions. Collaborate, share, and excel together. </p>
                        <button className="btn bg-[#B68C5A] text-white">Join us now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;