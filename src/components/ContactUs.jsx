import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <section className="contact_us bg-gray-100 py-24">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="  p-12 rounded-xl shadow-lg w-full max-w-6xl relative">
              <div className="flex flex-wrap">
                <div className="w-full md:w-3/5">
                  <div className="contact_form_inner">
                    <div className="contact_field">
                      <h3 className="text-3xl font-semibold text-black mb-4">Contact Us</h3>
                      <p className="text-sm text-gray-700 mb-8">Feel free to contact us anytime. We will get back to you as soon as possible!</p>
                      <input
                        type="text"
                        className="form-control w-full p-4 border-b-2 border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Name"
                      />
                      <input
                        type="email"
                        className="form-control w-full p-4 border-b-2 border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email"
                      />
                      <textarea
                        className="form-control w-full p-4 border-b-2 border-gray-300 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Message"
                      ></textarea>
                      <button className="w-full p-4 bg-gradient-to-tr from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition duration-300">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/5 mt-8 md:mt-0 md:pl-8">
                  <div className="right_contact_social_icon flex flex-col items-center md:items-start">
                    <div className="socil_item_inner flex space-x-6">
                      <a href="#" className="text-3xl text-blue-600 hover:text-blue-800 transition duration-300">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                      <a href="#" className="text-3xl text-pink-600 hover:text-pink-800 transition duration-300">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#" className="text-3xl text-blue-400 hover:text-blue-600 transition duration-300">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div className="contact_info_sec mt-10 bg-gray-800 text-white p-6 rounded-xl">
                    <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
                    <div className="info_single flex items-center mb-4">
                      <i className="fas fa-headset mr-4 text-lg"></i>
                      <span className="text-sm">+91 9305508524</span>
                    </div>
                    <div className="info_single flex items-center mb-4">
                      <i className="fas fa-envelope-open-text mr-4 text-lg"></i>
                      <span className="text-sm">pathakrishabh962@gmail.com</span>
                    </div>
        
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
