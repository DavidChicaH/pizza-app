"use client";
import styles from "../../styles/Form.module.css";
import styled from "styled-components";
const page = () => {
  const StyledContactForm = styled.div`
    width: 30%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 0px 36px -3px #ff6347;

    form {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      width: 90%;
      font-size: 16px;
      input {
        width: 100%;
        height: 35px;
        padding: 7px;
        outline: none;
        border-radius: 5px;
        border: 1px solid rgb(220, 220, 220);
        &:focus {
          border: 2px solid rgba(0, 206, 158, 1);
        }
      }
      textarea {
        max-width: 100%;
        min-width: 100%;
        width: 100%;
        max-height: 100px;
        min-height: 100px;
        padding: 7px;
        resize: none;
        outline: none;
        border-radius: 5px;
        border: 1px solid rgb(220, 220, 220);
        &:focus {
          border: 2px solid rgba(0, 206, 158, 1);
        }
      }
      label {
        margin-top: 1rem;
      }
      input[type="submit"] {
        margin-top: 2rem;
        cursor: pointer;
        background: tomato;
        color: white;
        border: none;
      }
    }
  `;
  return (
    <div className={styles.container}>
      <StyledContactForm>
        <form>
          <h3>Escribemos!</h3>
          <label>Nombre</label>
          <input type="text" name="user_name" />
          <label>Correo</label>
          <input type="email" name="user_email" />
          <label>Mensaje</label>
          <textarea name="message" />
          <input type="submit" value="Enviar" />
        </form>
      </StyledContactForm>
    </div>
  );
};

export default page;
