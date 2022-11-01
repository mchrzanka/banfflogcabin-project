import { useState, useEffect } from "react";

import validateFormInfo from "../validation/validateBookingForm";

import emailjs from "@emailjs/browser";

const useForm = () => {
  //https://www.youtube.com/watch?v=O6P86uwfdR0
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    breakfast: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      //destructuring the values object
      ...values,
      //target the name of each input (ex "email")
      //[e.target.name]:e.target.value;
      [name]: value,
    });
  };

  const handleSubmitValidation = (e) => {
    e.preventDefault();

    setErrors(validateFormInfo(values));
  };

  const handleSubmitValidationContact = (e) => {
    e.preventDefault();

    setErrors(validateFormInfo(values));

    let isError = false;

    //firstname
    if (!values.firstname) {
      errors.firstname = "First name required";
      isError = true;
    } else if (!/^[A-Za-z\s]+$/.test(values.firstname)) {
      errors.firstname = "First name can only contain letters.";
      isError = true;
    }
    //lastname
    if (!values.lastname) {
      errors.lastname = "Last name required.";
      isError = true;
    } else if (!/^[A-Za-z\s]+$/.test(values.lastname)) {
      errors.lastname = "Last name can only contain letters.";
      isError = true;
    }

    //email
    if (!values.email) {
      errors.email = "Email required.";
      isError = true;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Email address is invalid.";
      isError = true;
    }

    if (!values.message) {
      errors.message = "Message required.";
      isError = true;
    }

    if (isError == false) {
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          values,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then((resp) => {
          // it worked
         success = true;
        })
        .catch((err) => {
          console.log("Mail not sent");
          console.log(err.message);
        });
    }
  };

  return {
    handleChange,
    values,
    handleSubmitValidation,
    handleSubmitValidationContact,
    errors,
    setSuccess,
  };
};

export default useForm;
