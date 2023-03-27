import { useModal } from "@/context/ModalContext";
import { StyledUpdateFormContact } from "@/components/ModalRegisterContact/ModalCreateContact";
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
    isDefault: yup.boolean(),
  });

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
        <p className="errorMessage">{errors.fullName?.message}</p>
        <input
          type={"text"}
          id={"name"}
          placeholder="enter your full name"
          {...register("fullName")}
        />

        <label>email</label>
        <p className="errorMessage">{errors.email?.message}</p>
        <input
          type={"email"}
          id={"email"}
          placeholder="enter your email"
          {...register("email")}
        />
        <label>phone</label>
        <p className="errorMessage">{errors.phone?.message}</p>
        <input
          type={"tel"}
          id={"phone"}
          placeholder="enter your phone"
          {...register("phone")}
        />
        <div className="option">
          <label>default contact?</label>
          <select {...register("isDefault")}>
            <option value={"false"}>No</option>
            <option value={"true"}>Yes</option>
          </select>
        </div>
        <p className="errorMessage">{errors.isDefault?.message}</p>
        <button onClick={handleSubmit(onFormSubmit)}>Save</button>
      </StyledUpdateFormContact>
    </ModalContainer>
  );
};
