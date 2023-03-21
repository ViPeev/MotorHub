import CreateFormPartial from "../Forms/CreateFormPartial";
import ImageUpload from "../Misc/ImageUploader/ImageUploader";
import data from "../../staticData/formData";
import EditButtons from "./EditButtons";

export default function EditForm({
  formData,
  handleSubmit,
  handleChange,
  setError,
  setLoading,
  setFormData,
  validator,
  canSubmit,
  id,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <CreateFormPartial
          handleChange={handleChange}
          data={data}
          formData={formData}
          validator={validator}
        />
      </div>
      <div>
        <ImageUpload formData={formData} setFormData={setFormData} />
      </div>
      <EditButtons id={id} setLoading={setLoading} setError={setError} canSubmit={canSubmit} />
    </form>
  );
}
