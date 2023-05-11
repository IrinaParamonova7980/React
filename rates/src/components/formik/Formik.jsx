// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormikForm = () => (
  <div>
    <h1>Логин</h1>
    <Formik
      initialValues={{ email: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Заполните поле";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Неверный email";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Отправить
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormikForm;
