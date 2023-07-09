import React, {ChangeEvent, FC, useState} from 'react';
import styles from "./Form.module.css";
import { getData } from "../../api/api";
import { IForm } from "../../types/types";

const Form: FC<IForm> = (props) => {
  const { setUser } = props;

  const [email, setEmail] = useState<string>('')
  const [number, setNumber] = useState<number | string>('');
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [btnState, setBtnState] = useState("Поиск")

  const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const validateEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setValidEmail(isValidEmail.test(inputEmail));
  }

  return (
    <form className={styles.form}>

      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={validateEmail}
      />

      {!validEmail ? (<span className={styles.form__error}>Не верный формат email</span>) : (<span></span>)}

      <input
        type="number"
        name="number"
        id="number"
        placeholder="Номер"
        value={number}
        onChange={(e: ChangeEvent<HTMLInputElement>)=>setNumber(e.target.value)}
      />

      <button
        type="submit"
        disabled={!validEmail || !email}
        className={!validEmail || !email ? styles.form__btn_disabled : styles.form__btn}
        onClick={(e)=>{
          setBtnState("Загрузка...")
          e.preventDefault();
          getData(email, +number)
            .then(res => setUser(res))
            .finally(()=>setBtnState("Поиск"))
        }}
      >{btnState}</button>

    </form>
  )
}

export default Form;
