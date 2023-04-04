import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
  
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      <input className="text-input" {...field} {...props} />
      
    </>
  );
};

const MyTextArea = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
  };

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          email: '',
          companyName: '',
          title: '',
          message:'',
          acceptedTerms: false, // added for our checkbox
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(45, 'Must be 15 characters or less')
            .required("This field can't be empty"),
          email: Yup.string()
            .email('Invalid email address')
            .required("This field can't be empty"),
          companyName: Yup.string(),
          title: Yup.string(),
          message: Yup.string(),
          acceptedTerms: Yup.boolean()
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className='contact-form'>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
          />

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
          />

          <MyTextInput
            label="Company Name"
            name="companyName"
            type="text"
          />

          <MyTextInput
            label="Title"
            name="title"
            type="text"
          />

          <MyTextArea className="message"
            label="Message"
            name="message"
            type="text"
            as="textarea"
          />

          <MyCheckbox name="acceptedTerms" className="checkbox">
                Stay up-to-date with company announcements and updates to our API
          </MyCheckbox>

          <button className="form-btn" type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm