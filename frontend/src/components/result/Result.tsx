import React, {FC} from 'react';
import styles from "./Result.module.css";
import { IResult } from "../../types/types";

const Result: FC<IResult> = (props) => {
  const {user} = props;

  const maskNumber = (num: number) => {
    const result: string[] = []
    const arr: string[] = num.toString().split('')
    result.push(arr[0], arr[1], "-", arr[2], arr[3], "-", arr[4], arr[5])
    return result.join('')
  }

  if (user && user.length) {
    return (
      <>
        {user.map((item, index) => {
            return (
              <div className={styles.result} key={index}>
                <span>Email: {item.email}</span>
                <span>Номер: {maskNumber(item.number)}</span>
              </div>
            )
          }
        )}
      </>
    )
  } else if (user) {
    return (
      <div className={styles.result}>
        <span>Пользователь не найден</span>
      </div>
    )
  } else {
    return <></>
  }
}

export default Result;
