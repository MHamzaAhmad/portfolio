"use client";
import { FC } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Field, FieldProps, Formik } from "formik";
import { FaArrowRight, FaTerminal } from "react-icons/fa";
import { ContactFormValues, GuiFormProps } from "../types";

const GuiForm: FC<GuiFormProps> = ({
  formSubmitEmail,
  validationSchema,
  setShowClassicUI,
  setSubmitted,
  THANK_YOU_URL,
}) => {
  return (
    <Box
      mt={4}
      mb={6}
      className="gui-form"
      borderRadius="md"
      p={4}
      bg="code-background"
    >
      <Flex justify="space-between" align="center" mb={4}>
        <Text color="accent-color" fontWeight="bold">
          Contact Form
        </Text>
        <Button
          size="xs"
          onClick={() => setShowClassicUI(false)}
          variant="outline"
          leftIcon={<FaTerminal size={10} />}
          borderColor="border-color"
          color="foreground-color"
          _hover={{
            bg: "code-background",
            borderColor: "accent-color",
            color: "accent-color",
            transform: "translateY(-1px)",
          }}
          transition="all 0.2s"
        >
          back-to-terminal
        </Button>
      </Flex>

      <Formik<ContactFormValues>
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setSubmitted(true);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <form
            action={`https://formsubmit.co/${formSubmitEmail}`}
            method="POST"
            onSubmit={(e) => {
              if (!props.isValid) {
                e.preventDefault();
                props.handleSubmit();
              } else {
                console.log("Form is valid, submitting via POST");
              }
            }}
          >
            {/* Hidden fields for FormSubmit.co configuration */}
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact Form Submission"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={THANK_YOU_URL} />
            <input type="hidden" name="_captcha" value="true" />

            <Field name="name">
              {({ field, form }: FieldProps<string, ContactFormValues>) => (
                <FormControl
                  isInvalid={!!form.errors.name && !!form.touched.name}
                  className="mb-4"
                >
                  <FormLabel htmlFor="name" className="terminal-label">
                    <Text as="span" color="accent-color">
                      name:
                    </Text>
                  </FormLabel>
                  <Input
                    {...field}
                    id="name"
                    border="none"
                    borderBottom="1px solid"
                    borderColor="border-color"
                    borderRadius={0}
                    pl={3}
                    py={2}
                    _hover={{
                      borderColor: "accent-color",
                      bg: "rgba(30, 30, 30, 0.3)",
                    }}
                    _focus={{
                      borderColor: "accent-color",
                      boxShadow: "0 1px 0 0 var(--accent-color)",
                      bg: "rgba(30, 30, 30, 0.3)",
                    }}
                    bg="transparent"
                    color="foreground-color"
                    fontFamily="var(--font-family-mono)"
                    fontSize="var(--font-size-xs)"
                    transition="all 0.2s"
                  />
                  <FormErrorMessage color="red.400">
                    {form.errors.name}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }: FieldProps<string, ContactFormValues>) => (
                <FormControl
                  isInvalid={!!form.errors.email && !!form.touched.email}
                  className="mb-4"
                >
                  <FormLabel htmlFor="email" className="terminal-label">
                    <Text as="span" color="accent-color">
                      email:
                    </Text>
                  </FormLabel>
                  <Input
                    {...field}
                    id="email"
                    border="none"
                    borderBottom="1px solid"
                    borderColor="border-color"
                    borderRadius={0}
                    pl={3}
                    py={2}
                    _hover={{
                      borderColor: "accent-color",
                      bg: "rgba(30, 30, 30, 0.3)",
                    }}
                    _focus={{
                      borderColor: "accent-color",
                      boxShadow: "0 1px 0 0 var(--accent-color)",
                      bg: "rgba(30, 30, 30, 0.3)",
                    }}
                    bg="transparent"
                    color="foreground-color"
                    fontFamily="var(--font-family-mono)"
                    fontSize="var(--font-size-xs)"
                    transition="all 0.2s"
                  />
                  <FormErrorMessage color="red.400">
                    {form.errors.email}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="message">
              {({ field, form }: FieldProps<string, ContactFormValues>) => (
                <FormControl
                  isInvalid={!!form.errors.message && !!form.touched.message}
                  className="mb-4"
                >
                  <FormLabel htmlFor="message" className="terminal-label">
                    <Text as="span" color="accent-color">
                      message:
                    </Text>
                  </FormLabel>
                  <Textarea
                    {...field}
                    id="message"
                    border="1px solid"
                    borderColor="border-color"
                    borderRadius={0}
                    _hover={{
                      borderColor: "accent-color",
                      bg: "rgba(30, 30, 30, 0.7)",
                    }}
                    _focus={{
                      borderColor: "accent-color",
                      boxShadow: "0 0 0 1px var(--accent-color)",
                      bg: "rgba(30, 30, 30, 0.7)",
                    }}
                    bg="transparent"
                    color="foreground-color"
                    fontFamily="var(--font-family-mono)"
                    fontSize="var(--font-size-xs)"
                    height="150px"
                    resize="vertical"
                    transition="all 0.2s"
                    pl={3}
                    pt={2}
                  />
                  <FormErrorMessage color="red.400">
                    {form.errors.message}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              isLoading={props.isSubmitting}
              type="submit"
              size="sm"
              bg="accent-color"
              color="secondary-text-color"
              _hover={{
                bg: "light-accent-color",
                transform: "translateY(-1px)",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
              borderRadius={0}
              rightIcon={<FaArrowRight />}
              w="full"
              transition="all 0.2s"
            >
              submit-message
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default GuiForm;
