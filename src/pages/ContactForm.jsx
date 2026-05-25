import emailjs from '@emailjs/browser';
import { useInView } from '../components/useInView';  
import { useState, useRef } from 'react';


function ContactForm() {
   const [ref, isInView] = useInView({ 
          threshold: 0.2,    
          triggerOnce: true 
        });

  const formRef = useRef(null);  

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ← Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_5qkywbj';
    const TEMPLATE_ID = 'template_16826sw';
    const PUBLIC_KEY = 'wHZoQYj4JIymzwEMd';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ fullName: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
        alert('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
     <div 
      ref={ref} 
      className={`mt-10  w-[90%] rounded-md m-auto mb-15 max-w-xl transition-all duration-700 ease-out  
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
          <div className='mb-6'>
            <h1 className='header mb-2'>Get in touch</h1>
            <p className='small-text'>
              I'm always interested in exploring new opportunities, collaborating, or exchanging ideas with like-minded individuals.
            </p>
          </div>

          <form 
          ref={formRef} 
          onSubmit={handleSubmit}
          className='text-gray-100'>
            <div className='md:flex gap-5 '>
              <input
                type='text'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder='Full Name'
                className='w-full px-5 py-3.5 border border-gray-700 rounded-2xl bg-[#16181c] mb-5 focus:border focus:border-gray-500 focus:outline-none'
              />

              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='Email'
                className='w-full px-5 py-3.5 border border-gray-700 rounded-2xl bg-[#16181c] mb-5 focus:border focus:border-gray-500 focus:outline-none'
              />
            </div>

            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              rows='5'
              placeholder='Write your Message'
              className='w-full px-5 py-3.5 border border-gray-700 rounded-2xl bg-[#16181c] mb-6 focus:border focus:border-gray-500 focus:outline-none '
            />

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full btn-glow text-white rounded-2xl py-3.5 font-semibold hover:bg-gray-900 disabled:opacity-70 mt-2'
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
    </div>
  );
}

export default ContactForm;