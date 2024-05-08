import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FormValues, validationSchema } from "../../utils/formValidation";
import { portfolioData } from "../../utils/data";
import { Field, Formik, FormikHelpers, FormikValues } from "formik";

const ContactCard = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (
    values: FormikValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 lg:py-20 gap-8 item-center">
      <div className="col-span-2 ">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            isSubmitting,
            values,
            touched,
            handleChange,
            handleBlur,
            errors,
            handleSubmit,
          }) => (
            <form action="" onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-full">
                  <label className="text-red-500" htmlFor="Name">
                    {errors.name && touched.name && errors.name}
                  </label>
                  <Field
                    name="name"
                    type="text"
                    className="p-4 rounded-3xl bg-primary-800 w-full text-primary-200"
                    placeholder="Your Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </div>

                <div className="w-full">
                  <label className="text-red-500" htmlFor="email">
                    {errors.email && touched.email && errors.email}
                  </label>
                  <Field
                    name="email"
                    type="text"
                    className="p-4 rounded-3xl bg-primary-800 w-full text-primary-200"
                    placeholder="Your Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
              </div>
              <div>
                <label className="text-red-500" htmlFor="subject">
                  {errors.subject && touched.subject && errors.subject}
                </label>
                <Field
                  name="subject"
                  type="text"
                  className="p-4 rounded-3xl bg-primary-800 w-full text-primary-200"
                  placeholder="Your Subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subject}
                />
              </div>
              <div>
                <label className="text-red-500" htmlFor="message">
                  {errors.message && touched.message && errors.message}
                </label>
                <Field
                  as="textarea"
                  name="message"
                  id=""
                  cols={30}
                  rows={7}
                  className="px-4 py-2 rounded-3xl bg-primary-800 w-full text-primary-200"
                  placeholder="Your Message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                ></Field>
              </div>

              <input
                disabled={isSubmitting}
                type="submit"
                className="px-6 py-2 text-gray-300 bg-secondary-600 rounded-3xl"
              />
            </form>
          )}
        </Formik>
      </div>
      <div className="col-span-1 ">
        <div className="mt-4">
          {portfolioData.contactList.map(({ item, icon, title, comment }) => (
            <div className="flex items-center gap-4 " key={item}>
              {icon}
              <div className="space-y-1 border-l border-gray-700 p-4">
                <h5 className="text-primary-100">{title}</h5>
                <p className="text-primary-500">{comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
