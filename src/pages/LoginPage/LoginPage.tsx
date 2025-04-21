import React from 'react';
import { Input } from '../../common/fields';
import { Button } from '../../common/buttons';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '../../utils/hooks/useMutation';
import styles from './LoginPage.module.css';

const validationUsername = (value: null | string) => {
  if (!value) return 'field required';
  return null;
};

const valitatioPassword = (value: null | string) => {
  if (!value) return 'field required';
  return null;
};

const loginFormValidationShema = {
  username: validationUsername,
  password: valitatioPassword,
};

const loginFormValidation = (name: keyof typeof loginFormValidationShema, value: string) => {
  return loginFormValidationShema[name](value);
};

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = React.useState({
    username: '',
    password: '',
  });

  const [formError, setFormError] = React.useState<{ [key: string]: string | null }>({ username: null, password: null });

  const { mutation, error, isLoading, status } = useMutation<{ username: string; password: string }>();
  console.log(error, isLoading, status);
  return (
    <div className={styles.login_page}>
      <form
        className={styles.login_page_container}
        onSubmit={async (event) => {
          event.preventDefault();
          const resData = mutation('http://localhost:3000/login', inputValues);
          console.log(resData);
        }}>
        <div className={styles.login_page_form_container}>
          <h1>Login page</h1>
          <div className={styles.login_page_input_container}>
            <Input
              placeholder="username"
              value={inputValues.username}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const username = event.currentTarget.value;
                setInputValues({ ...inputValues, username });
                const error = loginFormValidation('username', username);
                return setFormError({ ...formError, username: error });
              }}
              {...(!!formError['username'] && {
                isError: !!formError['username'],
                helperText: formError['username'],
              })}
            />
          </div>
          <div className={styles.login_page_input_container}>
            <Input
              type="password"
              placeholder="password"
              value={inputValues.password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const password = event.currentTarget.value;
                setInputValues({ ...inputValues, password });
                const error = loginFormValidation('password', password);
                setFormError({ ...formError, password: error });
              }}
              {...(!!formError['password'] && {
                isError: !!formError['password'],
                helperText: formError['password'],
              })}
            />
          </div>
          <div className={styles.button_container}>
            <Button type="submit">sign-in</Button>
          </div>
          <span className={styles.create_account} onClick={() => navigate('/Registration')}>
            Создать новый аккаунт
          </span>
        </div>
      </form>
    </div>
  );
};
