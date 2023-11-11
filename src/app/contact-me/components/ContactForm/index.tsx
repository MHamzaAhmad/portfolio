"use client";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Field, FieldProps, Formik } from "formik";
import { FC, useState } from "react";
import * as yup from "yup";
import { ContactFormValues } from "./types";
import ThankYou from "../ThankYou";
import useFirestore from "@/services/FirestoreService";

const ContactForm: FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    message: yup.string().max(500).required("Message is required"),
  });
  const { addContactMessage } = useFirestore();

  const onNew = () => {
    setSubmitted(false);
  };

  const onSubmit = async (values: ContactFormValues) => {
    await addContactMessage({ ...values, createdAt: new Date() });
  };

  return (
    <div className="laptop:m-[9rem] m-4">
      {!submitted && (
        <Formik<ContactFormValues>
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            await onSubmit(values);
            actions.resetForm();
            setSubmitted(true);
            actions.setSubmitting(false);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <Field name="name">
                {({ field, form }: FieldProps<string, ContactFormValues>) => (
                  <FormControl
                    isInvalid={!!form.errors.name && !!form.touched.name}
                    className="mb-[1.5rem]"
                  >
                    <FormLabel htmlFor="name">_name:</FormLabel>
                    <Input
                      border={`1px solid var(--border-color)`}
                      _hover={{
                        border: `1px solid var(--foreground-color)`,
                      }}
                      {...field}
                      id="name"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }: FieldProps<string, ContactFormValues>) => (
                  <FormControl
                    isInvalid={!!form.errors.email && !!form.touched.email}
                    className="mb-[1.5rem]"
                  >
                    <FormLabel htmlFor="name">_email:</FormLabel>
                    <Input
                      border={`1px solid var(--border-color)`}
                      _hover={{
                        border: `1px solid var(--foreground-color)`,
                      }}
                      {...field}
                      id="email"
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="message">
                {({ field, form }: FieldProps<string, ContactFormValues>) => (
                  <FormControl
                    isInvalid={!!form.errors.message && !!form.touched.message}
                    className="mb-[1.5rem]"
                  >
                    <FormLabel htmlFor="name">_message:</FormLabel>
                    <Textarea
                      border={`1px solid var(--border-color)`}
                      _hover={{
                        border: `1px solid var(--foreground-color)`,
                      }}
                      {...field}
                      id="message"
                    />
                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                isLoading={props.isSubmitting}
                type="submit"
                className="laptop:py-[0.625rem] laptop:px-[0.875rem] text-sec-text-color bg-light-grey text-[0.875rem] rounded-lg hover:bg-transparent hover:border-border-color border border-light-grey box-border"
              >
                submit-message
              </Button>
            </form>
          )}
        </Formik>
      )}
      {submitted && <ThankYou onNewMessage={onNew} />}
    </div>
  );
};

export default ContactForm;
