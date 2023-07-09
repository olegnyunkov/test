import React, {FC, useState} from 'react';
import styles from './App.module.css';
import Form from "../form/Form";
import Result from "../result/Result";

const App: FC = () => {
  const [user, setUser] = useState<[] | undefined>()

  return (
    <div className={styles.app}>
      <Form setUser={setUser}/>
      <Result user={user}/>
    </div>
  );
}

export default App;
