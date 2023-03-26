import { useModal } from "@/context/ModalContext";
import { StyledUpdateFormContact } from "@/styles/ModalCreateContact";
import { ModalContainer } from "../ModalContainer";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { IContactRequest } from "@/types";
import { useContact } from "@/context/ContactContext";

export const ModalCreateContact = () => {
  const { setIsModalCreateContactOpen } = useModal();
  const { registerContact } = useContact();

  const formschema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Required email"),
    phone: yup.string().required("Required phone"),
    fullName: yup.string().required("Required full name"),
    isDefault: yup.boolean().required("Select an option"),
  });
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputFullName, setInputFullName] = useState("");
  const [inputIsDefault, setInputIsDefault] = useState("");

  const emailError = inputEmail === "";
  const fullNameError = inputFullName === "";
  const phoneError = inputPhone === "";
  const isDefaultError = inputIsDefault === "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactRequest>({
    resolver: yupResolver(formschema),
  });

  const onFormSubmit = (formData: IContactRequest) => {
    registerContact(formData);
  };

  return (
    <ModalContainer setIsModOpen={setIsModalCreateContactOpen}>
      <h2>Create your contact</h2>
      <StyledUpdateFormContact>
        <label>full name</label>
        {fullNameError ? (
          <p className="errorMessage">enter your full name</p>
        ) : (
          <p className="errorMessage">{errors.fullName?.message}</p>
        )}
        <input
          type={"text"}
          id={"name"}
          placeholder="enter your full name"
          {...register("fullName")}
          onChange={(e) => setInputFullName(e.target.value)}
        />

        <label>email</label>
        {emailError ? (
          <p className="errorMessage">enter your email</p>
        ) : (
          <p className="errorMessage">{errors.email?.message}</p>
        )}
        <input
          type={"email"}
          id={"email"}
          placeholder="enter your email"
          {...register("email")}
          onChange={(e) => setInputEmail(e.target.value)}
        />

        <label>phone</label>
        {phoneError ? (
          <p className="errorMessage">enter your phone</p>
        ) : (
          <p className="errorMessage">{errors.phone?.message}</p>
        )}
        <input
          type={"tel"}
          id={"phone"}
          placeholder="enter your phone"
          {...register("phone")}
          onChange={(e) => setInputPhone(e.target.value)}
        />

        <div className="option">
          <label>default contact?</label>
          <select
            {...register("isDefault")}
            onChange={(e) => setInputIsDefault(e.target.value)}
          >
            <option value={"false"}>No</option>
            <option value={"true"}>Yes</option>
          </select>
        </div>
        {isDefaultError ? (
          <p className="errorMessage">this contact is default?</p>
        ) : (
          <p className="errorMessage">{errors.isDefault?.message}</p>
        )}
        <button onClick={handleSubmit(onFormSubmit)}>Save</button>
      </StyledUpdateFormContact>
    </ModalContainer>
  );
};
