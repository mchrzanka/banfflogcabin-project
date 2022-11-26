import React from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { Navigate } from "react-router-dom";
import validateFormInfo from "../../validation/validateBookingForm";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

import "../../scss/components/_paymentform.scss";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#626e60",
      backgroundColor: "#f1f1f1",
      color: "#2f2f2f",
      lineHeight: "3",
      fontWeight: 500,
      fontFamily: "Poppins, Roboto, Open Sans, sans-serif",
      fontSize: "17px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
    },
    invalid: {
      iconColor: "maroon",
      color: "maroon",
    },
    // "::placeholder": {
    //   color: "gray",
    // },
  },
};

const stripe_style = {
  display: "block",
  maxWidth: "100%",
  margin: "1.5rem auto",
};


export default function PaymentForm({ depositPriceStateSave }) {
  const { handleChange, values, handleSubmitValidation, errors, onSuccess } =
    useForm(validateFormInfo);
  const [done, setDone] = useState();
  const stripe = useStripe();
  const elements = useElements();
  let clientName = "";

  const { loading, error, data } = useFetch(
    "http://147.182.207.198:1337/api/stripeIntent"
  );

  if (loading) {
    return <p>Loading...</p>;
  } else if (error === []) {
    return <p>Error</p>;
  }

  let secret = data.client_secret;
  const handleSubmit = (stripe, elements, intentKey) => async () => {
    //STRIPE
    let cardElement = elements.getElement("card");

    if (onSuccess === true) {
      clientName = values.firstname + " " + values.lastname;
      console.log(clientName);

      stripe
        .confirmCardPayment(intentKey, {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: clientName,
            },
          },
          receipt_email: values.email,
          //amount: depositPriceStateSave,
        })
        .then((resp) => {
          // the request itself worked, lets look at what the api response is

          // The API says there is a problem
          if (resp.error) {
            console.error(resp.error);
            return;
          }

          if (resp?.paymentIntent?.status === "succeeded") {
            console.dir("IT WORKED!");
            console.dir(resp.paymentIntent);

            axios
              .post("http://147.182.207.198:1337/api/bookings", {
                data: {
                  firstname: values.firstname,
                  lastname: values.lastname,
                  email: values.email,
                  phone: values.phone,
                  breakfast: values.breakfast,
                },
              })
              .then((response) => {});
            //put redirect to success page here
            console.log("Form submitted successfully");
            setDone(true);
          } else {
            // this should not happen....
            console.dir("something went wrong...");
            console.dir(resp);
          }
        })
        .catch((e) => {
          // something went wrong with confirmCardPayment
          console.error(e);
        });
    }
  };

  return (
    <>
      <form className="pay-form" onSubmit={handleSubmitValidation}>
        <fieldset className="booking-details">
          <h3>Booking Details</h3>
          <div className="name">
            <div className="label-input-con">
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
                placeholder="Jane"
              />
              {errors.firstname && <p className="errors">{errors.firstname}</p>}
            </div>
            <div className="label-input-con">
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
                placeholder="Doe"
              />
              {errors.lastname && <p className="errors">{errors.lastname}</p>}
            </div>
          </div>
          <div className="phone-email">
            <div className="label-input-con">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="email@address.com"
              />
              {errors.email && <p className="errors">{errors.email}</p>}
            </div>
            <div className="label-input-con">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="888-888-8888"
              />
              {errors.phone && <p className="errors">{errors.phone}</p>}
            </div>
          </div>

          <div className="diet-restriction">
            <label>Dietary Restrictions</label>
            <p className="side-text">
              Banff Log Cabin delivers breakfast in the morning. Please let us
              know if you have any food allergies, and we will do our best to
              accommodate.
            </p>
            <textarea
              name="breakfast"
              value={values.breakfast}
              onChange={handleChange}
              placeholder="Tell us of any dietary restrictions."
            />
          </div>
        </fieldset>

        <fieldset className="card-details">
          <h3>Card Details</h3>
          <div className="amount">
            <p>Due Now: ${depositPriceStateSave}.00</p>
          </div>
          <div style={stripe_style}>
            <CardElement options={CARD_OPTIONS} />
          </div>
          <div className="button">
            <input
              onClick={handleSubmit(stripe, elements, secret)}
              type="submit"
              value="Confirm Booking"
              name="contact"
              className="primary-btn btn"
            />
          </div>
          <div>
            <p className="side-text">
              By submitting this form, I understand and agree to the booking
              terms.
            </p>
          </div>
        </fieldset>
      </form>
      {done && <Navigate to="/success" />}
    </>
  );
}
