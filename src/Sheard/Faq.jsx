

const Faq = () => {
    return (
        <div className="mt-14">
            <h2 className="text-3xl font-bold text-center ">frequently asked questions</h2>
           <div className="hero mt-8">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-24">
              <img src="https://i.ibb.co/FBCcjvL/faq.png" className="max-w-sm rounded-lg shadow-2xl" />
            <div className="space-y-5">
              {/* first question */}
              <div>
                <div className="collapse  bg-[#F3F3F3] rounded-lg mb-8">
                  <div className="collapse-title text-xl font-medium">
                    <h2>1.How can I find or join an online study group?</h2>
                    <p>You can join or create online study groups through social media, educational platforms, or your institutions learning management system.</p>
                  </div>
                </div>
                 {/* second question  */}
                <div className="collapse  bg-[#F3F3F3] rounded-lg mb-8">
                  <div className="collapse-title text-xl font-medium">
                    <h2>2.What are the benefits of online group study?</h2>
                    <p>Online group study offers benefits such as peer support, shared knowledge, diverse perspectives, and motivation.</p>
                  </div>
                </div>
                 {/* third question  */}
                <div className="collapse  bg-[#F3F3F3] rounded-lg mb-8">
                  <div className="collapse-title text-xl font-medium">
                    <h2>3.What is the purpose of an assignment?</h2>
                    <p>The purpose of a study assignment is to help you deepen your knowledge of a subject, develop critical thinking skills, and demonstrate your understanding.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div> 
        </div>
    );
};

export default Faq;