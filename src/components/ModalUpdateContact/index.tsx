import { useContact } from "@/context/ContactContext";
import { useModal } from "@/context/ModalContext";
import { StyledUpdateForm } from "@/components/ModalUpdateClient/ModalUpdateClient";
import { IUpdateContact } from "@/types";
import { ModalContainer } from "../ModalContainer";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export const ModalUpdateContact = () => {
  const { setIsModalUpdateContactOpen } = useModal();
  const { updateContact, cardContactId } = useContact();

  const formSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email"),
    isDefault: yup.boolean(),
    phone: yup.string(),
    fullName: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateContact>({
    resolver: yupResolver(formSchema),
  });

  const onFormSubmit = (formData: IUpdateContact) => {
    updateContact(formData, cardContactId);
  };

  return (
    <ModalContainer setIsModOpen={setIsModalUpdateContactOpen}>
      <h2>Update your contact</h2>
      <StyledUpdateForm>
        <label>full name</label>
        <input
          type={"text"}
          id={"name"}
          placeholder="enter your full name"
          {...register("fullName")}
        />
        <label>email</label>
        <input
          type={"email"}
          id={"email"}
          placeholder="enter your email"
          {...register("email")}
        />
        <label>phone</label>
        <input
          type={"tel"}
          id={"phone"}
          placeholder="enter your phone"
          {...register("fullName")}
        />

        <div className="option">
          <label>Endereço Padrão?</label>

          <select {...register("fullName")}>
            <option value={"false"}>No</option>
            <option value={"true"}>Yes</option>
          </select>
        </div>
        <button onClick={handleSubmit(onFormSubmit)}>Save</button>
      </StyledUpdateForm>
    </ModalContainer>
  );
};
