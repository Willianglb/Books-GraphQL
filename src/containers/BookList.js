import React from "react";
import { useQuery } from "react-apollo";
import * as queries from "../api/queries";
import CardExample from "../components/Card";

function BookList() {
  const { loading, error, data } = useQuery(queries.BOOKS);
  if (loading) {
    return <h1>Carregando...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      {data.books.map(book => {
        return (
          <div>
              {book.authors.map(author => {
                return <CardExample nome={author.name} title={book.title} id={book.id}/>
              })} 
          </div>
        );
      })}
    </>
  );
}

export default BookList;
