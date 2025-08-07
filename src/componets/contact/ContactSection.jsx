'use client';

import Formvalidators from '@/Formvalidators';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
 let router = useRouter()
 let [data, setData]= useState ({
    name:"",
    email:"",
    phone:"",
    message:""
 })
let [show, setShow]= useState(false)
 let [errorMessage, setErrorMessage]= useState({
    name:"Name Field Is Requied ",
    email:"Email Address Field Is Required",
    phone:"Phone Field Is Required",
    message:"Subject Field Is Required"
 })

function getInput(e){
    let {value, name}=e.target;
    setErrorMessage((x)=>{
        return{
            ...x,
            [name]:Formvalidators(e)
        }
    })
    setData((e)=>{
        return{
            ...e,
            [name]:value
        }
    })
}

async function postData(e) {
  try {
    e.preventDefault();
    let item = Object.values(errorMessage).find((x) => x !== "");
    if (item) {
      setShow(true);
    } else {
      const response = await fetch("https://tomarhotelbacked.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.result === "Done") {
        toast.success("Message sent successfully");
        router.push("/"); // ✅ Navigate to homepage
      } else {
        toast.error("Failed to send message.");
        console.log("Error Data Not Found", res);
      }
    }
  } catch (error) {
    toast.error("Something went wrong.");
    console.error(error);
  }
}


  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#b97e43]">Contact</h2>
        
        <h3 className="text-2xl text-[#c7975f] font-bold mt-2">
          CONTACT <span className="text-black">For Any Query</span>
        </h3>
      </div>
    

     

   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-15 text-center">
        {/* Phone */}
        <div className='shadow-sm h-[150px] p-6'>
          <h4 className="text-xl font-bold uppercase text-[#b97e43] flex justify-center items-center gap-2">
            PHONE <span className="w-8 h-[1px] bg-[#b97e43] inline-block"></span>
          </h4>
          <div className="flex justify-center items-center mt-2 gap-2 text-md text-[#b97e43]">
            <FaPhoneAlt className="text-black" />
            <span>+91 9899145516 ,011-43466861</span>
          </div>
        </div>

        {/* Email */}
       <div className='shadow-sm h-[150px] p-6'>
          <h4 className="text-xl font-bold uppercase text-[#b97e43] flex justify-center items-center gap-2">
            EMAIL <span className="w-8 h-[1px] bg-[#b97e43] inline-block"></span>
          </h4>
          <div className="flex justify-center items-center mt-2 gap-2 text-md text-[#b97e43]">
            <FaEnvelope className="text-black" />
            <span>tomarhospitality@gmail.com</span>
          </div>
        </div>

        {/* Address */}
        <div className='shadow-sm h-[150px] p-6'>
          <h4 className="text-xl font-bold uppercase text-[#b97e43] flex justify-center items-center gap-2">
            ADDRESS <span className="w-8 h-[1px] bg-[#b97e43] inline-block"></span>
          </h4>
          <div className="flex justify-center items-center mt-2 gap-2 text-md text-[#b97e43] text-center">
            <FaMapMarkerAlt className="text-black" />
            <span>17A/2, W.E.A. Karol Bagh, New Delhi, 110005</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Column - Info + Map */}
       
          <div className="w-full h-[300px]">
            <iframe
              src="https://maps.google.com/maps?q=Conference+Halls+in+Delhi+-+Tomar+Hospitality++17A%2C+Block+7%2C+Block+8A%2C+WEA%2C+Karol+Bagh%2C+New+Delhi%2C+Delhi%2C+110005&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tomar Hospitality Map"
            ></iframe>
          </div>
       

        {/* Right Column - Form */}
        <form className="space-y-4 pb-5" onSubmit={postData}>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name='name'
              onChange={getInput}
              placeholder="Your Name*"
              className="border p-2 w-full text-gray-600 rounded"
              required
            />
            <input
              type="email"
              name='email'
              placeholder="Your Email*"
              className="border text-gray-600 p-2 w-full rounded"
              required
              onChange={getInput}

            />
          </div>
          <input
            type="tel"
            name='phone'
            placeholder="Phone*"
            className="border text-gray-600 p-2 mt-3 w-full rounded"
            required
              onChange={getInput}

          />
          <div className='mt-5'>
              <textarea
            placeholder="Subject*"
            name='message'
            className="border  text-gray-600 p-2 w-full rounded h-32 resize-none"
              onChange={getInput}
      
          ></textarea>
          </div>
          <button
            type="submit"
            className="w-full text-gray-100 bg-[#b97e43] font-semibold py-3 rounded hover:bg-[#a4692c] transition"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
