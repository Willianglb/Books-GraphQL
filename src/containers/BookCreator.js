import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useQuery, useMutation } from "react-apollo";
import * as queries from "../api/queries";
import * as mutations from "../api/mutations";
import './style.css';

function BookCreator() {
  const { loading, error, data } = useQuery(queries.AUTHORS);
  const [addBook] = useMutation(mutations.ADD_BOOK);
  const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
    initialValues: {
      bookTitle: "",
      authorId: ""
    },
    validationSchema: yup.object({
      bookTitle: yup.string().required("O título do livro é obrigatório"),
      authorId: yup.string().required("O nome do autor é obrigatório")
    }),
    onSubmit: (values, actions) => {
      addBook({
        variables: {
          title: values.bookTitle,
          authorsId: [values.authorId]
        },
        refetchQueries: [{ query: queries.BOOKS }]
      });
      actions.setValues(
        {
          bookTitle: "",
          authorId: ""
        },
        false
      );
    }
  });
  if (loading) {
    return <h1>Carregando...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Título do livro"
          autoComplete="off"
          {...getFieldProps("bookTitle")}
          className="inputLivro"
        />
        {touched.bookTitle && errors.bookTitle ? (
          <small>{errors.bookTitle}</small>
        ) : null}
      </div>
      <div>
        <select {...getFieldProps("authorId")} className="selectAutor">
          <option value="" disabled={true}>
            Selecione um autor
          </option>
          {data.authors.map(author => {
            return (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            );
          })}
        </select>
        {touched.authorId && errors.authorId ? (
          <small>{errors.authorId}</small>
        ) : null}
      </div>
      <button type="submit" disabled={!isValid} className="buttonLivro">
        Adicionar
      </button>
    </form>
  );
}

export default BookCreator;
