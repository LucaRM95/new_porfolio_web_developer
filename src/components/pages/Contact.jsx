import React, { forwardRef } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { languageSelector } from "../redux/sliceLanguage";
import { useSelector } from "react-redux";
import { useForm } from "@formspree/react";

const Contact = () => {
  const language = useSelector(languageSelector)
  const [ state, handleSubmit ] = useForm("xnqklrqa");
  const { language_data } = language
  const { contact } = language_data

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  if(state.succeeded){
    Toast.fire({
      icon: 'success',
      title: contact?.succeeded_message
    })
  }

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          {contact?.title}<span className="text-cyan-600">{contact?.span_title}</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">{contact?.sub_title}</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form 
            onSubmit={handleSubmit} 
            className="flex flex-col flex-1 gap-5" 
          >
            <input type="text" name="name" placeholder={contact?.name_input} required />
            <input type="email" name="email" placeholder={contact?.email_input} required />
            <textarea placeholder={contact?.text_input} name="content" rows={10} required></textarea>
            <button typeof="submit" className="btn-primary w-fit">{contact?.button}</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact?.contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Contact);
