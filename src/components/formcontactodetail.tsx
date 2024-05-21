import { Button, Form, InputGroup, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import * as formik from "formik";
import * as yup from "yup";
import React from "react";
const { Formik } = formik;

const schema = yup.object().shape({
  nombre: yup.string().required("Por favor ingrese el nombre"),

  email: yup
    .string()
    .email("Email inválido")
    .required("Por favor ingrese el email"),
  mensaje: yup.string().required("Por favor ingrese el mensaje"),
});

interface DatosEmail {
  nombre: string;
  email: string;
  mensaje: string;
}

type ServerState = {
  ok: boolean;
  msg: string;
};
export default FormContactoDetail;
export function FormContactoDetail({ bote }: { bote: Bote }) {
  const [serverState, setServerState] = useState<ServerState>();
  const handleServerResponse = (ok: boolean, msg: string) => {
    setServerState({ ok, msg });
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnSubmit = (values: DatosEmail, actions: any) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/mdoqvawy",
      data: { ...values, asunto: `Consulta: ${bote?.tittle}` },
    })
      .then(() => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(
          true,
          "Hemos enviado su mensaje, lo revisaremos a la brevedad."
        );
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        console.log(JSON.stringify(error));
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleOnSubmit}
      initialValues={{
        nombre: "",
        email: "",
        mensaje: "",
      }}
    >
      {({
        isSubmitting,
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit} method="POST">
          <Form.Control
            style={{ marginTop: 3 }}
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={values.nombre}
            onChange={handleChange}
            isValid={touched.nombre && !errors.nombre}
            isInvalid={!!errors.nombre}
          />
          {touched.nombre && !errors.nombre && (
            <Form.Control.Feedback>Se ve bien!</Form.Control.Feedback>
          )}
          {touched.nombre && errors.nombre && (
            <Form.Control.Feedback type="invalid">
              {errors.nombre}
            </Form.Control.Feedback>
          )}

          <Form.Control
            type="text"
            placeholder="Email"
            aria-describedby="inputGroupPrepend"
            name="email"
            value={values.email}
            onChange={handleChange}
            isValid={touched.email && !errors.email}
            isInvalid={!!errors.email}
          />
          {touched.email && !errors.email && (
            <Form.Control.Feedback>Se ve bien!</Form.Control.Feedback>
          )}
          {touched.email && errors.email && (
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          )}

          <Form.Control
            as="textarea"
            rows={6}
            type="text"
            placeholder="Mensaje"
            name="mensaje"
            value={values.mensaje}
            onChange={handleChange}
            isInvalid={!!errors.mensaje}
          />

          {touched.mensaje && !errors.mensaje && (
            <Form.Control.Feedback>Se ve bien!</Form.Control.Feedback>
          )}
          {touched.mensaje && errors.mensaje && (
            <Form.Control.Feedback type="invalid">
              {errors.mensaje}
            </Form.Control.Feedback>
          )}

          <Button
            className="botoncontacto"
            disabled={isSubmitting}
            variant=""
            type="submit"
            style={{ marginTop: 20 }}
          >
            Enviar Formulario
          </Button>
          {serverState && (
            <p
              className="ml-4"
              style={{
                margin: "1em 0",
                color: serverState.ok ? "green" : "red",
              }}
            >
              {serverState.msg}
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
}
