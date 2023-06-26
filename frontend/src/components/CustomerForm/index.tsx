import { Formik } from "formik";
import * as Yup from "yup";
import { ICustomer } from "../../types";

import { useQueryCities } from "../../services/useQueryCities";

import * as S from "./styles";
import { useMutationCustomer } from "../../services/useMutationCustomer";

interface CustomerFormProps {
  customer: ICustomer;
}

function CustomerForm({ customer }: CustomerFormProps) {
  const { data: cities } = useQueryCities();
  const { mutate } = useMutationCustomer();

  const customerSchema = Yup.object().shape({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    email: Yup.string().required().email(),
    company: Yup.string().required(),
    title: Yup.string().required(),
    cityId: Yup.number().required(),
    gender: Yup.string().required(),
  });

  const citiesOptions = cities?.map((city) => (
    <option key={city.id} value={city.id}>
      {city.name}
    </option>
  ));

  return (
    <>
      <Formik
        initialValues={{
          first_name: customer.first_name,
          last_name: customer.last_name,
          email: customer.email,
          company: customer.company,
          title: customer.title,
          cityId: customer.cityId,
          gender: customer.gender,
        }}
        validationSchema={customerSchema}
        onSubmit={(values) =>
          mutate({ customerId: `${customer.id}`, data: values })
        }
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <>
            <S.FieldGroup htmlFor="first_name">
              <span>First Name</span>
              <input
                id="first_name"
                value={values.first_name}
                onChange={handleChange}
              />
              {errors.first_name ? (
                <S.FieldError>{errors.first_name}</S.FieldError>
              ) : null}
            </S.FieldGroup>
            <S.FieldGroup htmlFor="last_name">
              <span>Last Name</span>
              <input
                id="last_name"
                value={values.last_name}
                onChange={handleChange}
              />
              {errors.last_name ? (
                <S.FieldError>{errors.last_name}</S.FieldError>
              ) : null}
            </S.FieldGroup>
            <S.FieldGroup htmlFor="email">
              <span>Email</span>
              <input id="email" value={values.email} onChange={handleChange} />
              {errors.email ? (
                <S.FieldError>{errors.email}</S.FieldError>
              ) : null}
            </S.FieldGroup>
            <S.FieldGroup htmlFor="company">
              <span>Company</span>
              <input
                id="company"
                value={values.company}
                onChange={handleChange}
              />
              {errors.company ? (
                <S.FieldError>{errors.company}</S.FieldError>
              ) : null}
            </S.FieldGroup>
            <S.FieldGroup htmlFor="title">
              <span>Title</span>
              <input id="title" value={values.title} onChange={handleChange} />
              {errors.title ? (
                <S.FieldError>{errors.title}</S.FieldError>
              ) : null}
            </S.FieldGroup>
            <S.FieldGroup htmlFor="cityId">
              <span>City</span>
              <select id="cityId" value={values.cityId} onChange={handleChange}>
                {citiesOptions}
              </select>
              {errors.cityId ? (
                <S.FieldError>{errors.cityId}</S.FieldError>
              ) : null}
            </S.FieldGroup>
            <S.RadioGroup>
              <span>Gender</span>
              <S.Radio>
                <label htmlFor="gender-female">
                  <input
                    id="gender-female"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    type="radio"
                    checked={values.gender === "Female"}
                  />
                  <span>Female</span>
                </label>
                <label htmlFor="gender-male">
                  <input
                    id="gender-male"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    type="radio"
                    checked={values.gender === "Male"}
                  />
                  <span>Male</span>
                </label>
              </S.Radio>
              {errors.gender ? (
                <S.FieldError>{errors.gender}</S.FieldError>
              ) : null}
            </S.RadioGroup>
            <button onClick={() => handleSubmit()} type="button">
              Save
            </button>
          </>
        )}
      </Formik>
    </>
  );
}

export { CustomerForm };
