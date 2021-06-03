import React from "react";
import { useFormik } from "formik";
import Head from "next/head";
import { address, date, name, company } from "faker/locale/pt_BR";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FormTest = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      secondName: "",
      address: "",
      company: "",
      birthday: Date.now(),
    },
    onSubmit: () => showTheseValues(),
  });

  const showTheseValues = () => {
    console.log("First nameeee: ", formik.values.firstName);
    console.log("Second namee: ", formik.values.secondName);
    console.log("Birthday: ", formik.values.birthday);
    console.log("Addressss: ", formik.values.address);
    console.log("Company: ", formik.values.company2);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Simple test with jest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <form className="flex flex-col" onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            className="border-b mb-4"
            placeholder="Type your first name here"
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <label htmlFor="secondName">Second Name:</label>
          <input
            className="border-b mb-4"
            placeholder="Type your second name here"
            id="secondName"
            name="secondName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.secondName}
          />
          <label htmlFor="address">Address:</label>
          <input
            className="border-b mb-4"
            placeholder="Type your address here"
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          <label htmlFor="company">Company Name:</label>
          <input
            className="border-b mb-4"
            placeholder="Type your company name here"
            id="company"
            name="company"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.company}
          />
          <input
            className="border-b mb-4"
            placeholder="Type your birth date here"
            type="date"
            id="birthday"
            name="birthday"
            onChange={formik.handleChange}
            value={formik.values.birthday}
          />
          <button type="submit">Submit</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default FormTest;
