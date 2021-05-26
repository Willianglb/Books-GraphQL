import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation } from "react-apollo";
import * as mutations from "../api/mutations";
import './style.css';

function AuthorCreator() {
  const [addAuthor] = useMutation(mutations.ADD_AUTHOR);
  const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
    initialValues: {
      authorName: ""
    },
    validationSchema: yup.object({
      authorName: yup.string().required("O nome do autor é obrigatóriO")
    }),
    onSubmit: (values, actions) => {
      addAuthor({
        variables: {
          name: values.authorName
        }
      });
      actions.setValues({ authorName: "" }, false);
    }
  });
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Nome do autor"
          autoComplete="off"
          {...getFieldProps("authorName")}
          className="inputNome"
        />
        {touched.authorName && errors.authorName ? (
          <small>{errors.authorName}</small>
        ) : null}
      </div>
      <button type="submit" disabled={!isValid} className="buttonNome">
        Adicionar
      </button>
    </form>
  );
}

export default AuthorCreator;
