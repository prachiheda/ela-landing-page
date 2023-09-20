import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';

const Services = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1xpkdim', 'template_8opo3yn', form.current, 'jsZQfNArNRZ0aoaJc')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id = "contact-us" className = "mb-10 max-container max-sm:mt-12">
      <div className ="flex flex-col justify-start gap-5">
          <h2 className = "text-4xl font-dancer font-bold">Contact Us</h2>
          <p className = "lg:max-w-lg mt-2 font-montserrat text-slate-gray">Interested in purchasing? Contact us to set your personal showing today!</p>

      </div>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex flex-col justify-start gap-5">
      <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
              <input type="text" name="user_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required/>
          </div>
          <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" name="user_email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="youremail@email.com" required />
          </div>
          <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
          </div>
          <input type="submit" value="Send" className = "flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-teal-700 rounded-full text-white border-teal-700"/>

      </form>
  </div>
        {/* <div className ="flex flex-col justify-start gap-5">
          <h2 className = "text-4xl font-dancer font-bold">Contact Us</h2>
          <p className = "lg:max-w-lg mt-2 mb-9  font-montserrat text-slate-gray">Interested in purchasing? Contact us!</p>
        </div>
        <div className ="flex flex-col justify-center items-center gap-5 border-2 rounded-2xl"> 
          <form ref={form} onSubmit={sendEmail} className ="flex flex-col justify-center items-center gap-5 w-full">
            <label>Name</label>
            <input type="text" name="user_name" className = "border-2"/>
            <label>Email</label>
            <input type="email" name="user_email" className = "border-2"/>
            <label>Message</label>
            <textarea name="message" className = "border-2"/>
            <input type="submit" value="Send" className = "flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-teal-700 rounded-full text-white border-teal-700"/>

      </form>

        </div> */}


      
    </section>
    
  )
}

export default Services