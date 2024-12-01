import { Field, FieldArray, useFormikContext } from "formik";
import { ResumeFormValues } from "../../../interfaces/ResumeFormValues.ts";
import "./SocialMediaForm.scss";

const SocialMediaForm = () => {
  const { values } = useFormikContext<ResumeFormValues>();

  return (
    <div className={"socialMediaForm"}>
      <FieldArray name="socialMedia">
        {({ remove, push }) => (
          <div>
            <h5 className={"socialMediaForm__label"}>Social Media</h5>
            {values.socialMedia.map((_, index) => (
              <div key={index} className={"personalDetailsForm__socialMedia"}>
                <Field
                  className={"socialMediaForm__input"}
                  name={`socialMedia[${index}]`}
                  placeholder="Profile URL"
                />
                {index !== 0 && (
                  <div
                    onClick={() => remove(index)}
                    className={"personalDetailsForm__socialMedia--deleteButton"}
                  ></div>
                )}
              </div>
            ))}
            <div onClick={() => push("")}>
              + Add more (you can do it later, also)
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default SocialMediaForm;
