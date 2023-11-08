

const Faq = () => {
  return (
    <div className="mt-14">
      <h2 className="text-4xl font-bold text-center ">frequently asked questions</h2>
      <div className="hero mt-8">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-24">
          <img src="https://i.ibb.co/FBCcjvL/faq.png" className="max-w-sm rounded-lg shadow-2xl" />
          <div className="space-y-5">
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                <h2>1.How can I find or join an online study group?</h2>
                </div>
                <div className="collapse-content">
                <p className=" px-4 pb-3">You can join or create online study groups through social media, educational platforms, or your institutions learning management system.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                <h2>2.What are the benefits of online group study assignment?</h2>
                </div>
                <div className="collapse-content">
                <p className=" px-4 pb-3">Online group study offers benefits such as peer support, shared knowledge, diverse perspectives, and motivation.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                <h2>3.What is the purpose of an assignment?</h2>
                </div>
                <div className="collapse-content">
                <p className=" px-4 pb-3">The purpose of a group study assignment is to help you deepen your knowledge of a subject, develop critical thinking skills, and demonstrate your understanding.</p>
                </div>
              </div>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;