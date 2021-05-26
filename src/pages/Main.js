import React from "react";
import BookList from "../containers/BookList";
import AuthorCreator from "../containers/AuthorCreator";
import BookCreator from "../containers/BookCreator";
import * as S from './Main.styles.js';

function Main() {
  return (
    <>
      <S.Grid1>
        <BookList />
      </S.Grid1>
      <S.Grid2>
        <AuthorCreator />
      </S.Grid2>
      <S.Grid3>
        <BookCreator />
      </S.Grid3>
    </>
  );
}

export default Main;
