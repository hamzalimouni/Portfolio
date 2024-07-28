import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Swal from 'sweetalert2';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = (form) => {
    let errors = {};
    if (!form.name.trim()) {
      errors.name = "Le champ 'Nom, prénom' est requis. Veuillez entrer votre nom complet.";
    }
    if (!form.email.trim()) {
      errors.email = "Le champ 'Adresse e-mail' est requis. Veuillez entrer une adresse e-mail valide.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "L'adresse e-mail fournie ne semble pas valide. Veuillez vérifier le format de votre adresse e-mail.";
    }
    if (!form.message.trim()) {
      errors.message = "Le champ 'Message' est requis. Veuillez entrer un message pour que nous puissions vous répondre.";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "ELYAMOUNI Hamza",
          from_email: form.email,
          to_email: "elyamounihamza1@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          // alert("Thank you. I will get back to you as soon as possible.");
          Swal.fire({
            title: 'Message envoyé',
            text: 'Merci pour votre message. Je reviendrai vers vous dans les plus brefs délais.',
            icon: 'success',
            confirmButtonText: 'D\'accord',
            confirmButtonColor: '#151030',
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          // alert("Ahh, something went wrong. Please try again.");
          Swal.fire({
            title: 'Erreur',
            text: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard ou contacter directement à l\'adresse suivante : elyamounihamza1@gmail.com.',
            icon: 'error',
            confirmButtonText: 'D\'accord',
            confirmButtonColor: '#d33',
          });
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          {/* Get in touch */}
          PRENDRE CONTACT
        </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              {/* Your Name */}
              Nom, prénom
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              // placeholder="What's your good name?"
              placeholder="Quel est votre nom, prénom?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium ${errors.name ? '!border-2 border-red-500' : 'border-none'}`}
            />
              {errors.name && <p className="text-red-500 text-[12px] mt-1">{errors.name}</p>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              {/* Your email */}
              Adresse e-mail
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              // placeholder="What's your web address?"
              placeholder="Quelle est votre adresse e-mail?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium ${errors.email ? '!border-2 border-red-500' : 'border-none'}`}
            />
              {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              {/* Your Message */}
              Message
            </span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              // placeholder='What you want to say?'
              placeholder='Que voulez-vous dire?'
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium ${errors.message ? '!border-2 border-red-500' : 'border-none'}`}
            />
              {errors.message && <p className="text-red-500 text-[12px] mt-1">{errors.message}</p>}
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {/* {loading ? "Sending..." : "Send"} */}
            {loading ? "Envoie..." : "Envoyer"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
