import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";
import { StyledUpdateForm } from "@/components/ModalUpdateClient/ModalUpdateClient";
import { iKeys, IUpdateClient } from "@/types";
import { ModalContainer } from "../ModalContainer";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export const ModalUpdateClient = () => {
  const { setIsModalUpdateClientOpen } = useModal();
  const { updateClient } = useAuth();

  const formSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email"),
    password: yup.string(),
    phone: yup.string(),
    fullName: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateClient>({
    resolver: yupResolver(formSchema),
  });

  const onFormSubmit = (formData: IUpdateClient) => {
    updateClient(formData);
  };

  return (
    <ModalContainer setIsModOpen={setIsModalUpdateClientOpen}>
      <h2>Update your information</h2>
      <StyledUpdateForm>
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

        <label>password</label>
        <p className="errorMessage">{errors.password?.message}</p>
        <input
          type={"password"}
          id={"password"}
          placeholder="enter your password"
          {...register("password")}
        />

        <label>phone</label>
        <p className="errorMessage">{errors.phone?.message}</p>
        <input
          type={"tel"}
          id={"phone"}
          placeholder="enter your phone"
          {...register("phone")}
        />
        <button onClick={handleSubmit(onFormSubmit)}>Save</button>
      </StyledUpdateForm>
    </ModalContainer>
  );
};
