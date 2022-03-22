import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../components/NotFound";
import AddEditPage from "./pages/AddEdit";
import MainPage from "./pages/Main";

Photo.propTypes = {};

function Photo(props) {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="add/*" element={<AddEditPage />} />
      <Route path=":photoId/*" element={<AddEditPage />} />
      <Route path="*" component={<NotFound />} />
    </Routes>
  );
}

export default Photo;
