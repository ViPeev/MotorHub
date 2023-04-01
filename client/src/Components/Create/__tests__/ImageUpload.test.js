import { render, fireEvent, screen } from "@testing-library/react";
import { CreateProvider } from "../../../contexts/CreateContext";
import ImageUploadWrapper from "../ImageUploadWrap";

const WrappedForm = () => {
  return (
    <CreateProvider>
      <ImageUploadWrapper />
    </CreateProvider>
  );
};
