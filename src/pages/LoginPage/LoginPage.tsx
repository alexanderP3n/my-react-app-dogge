import React from 'react';
import { Input } from '../../common/fields';
import { Button } from '../../common/buttons';
import './LoginPage.css';
export const LoginPage: React.FC = () => {
  const [inputValues, setInputValues] = React.useState({
    username: '',
    password: '',
  });

  return (
    <div className="login_page">
      <div className="login_page_container">
        <div className="login_page_form_container">
          <h1>Login page</h1>
          <div className="login_page_input_container">
            <Input isError={true} helperText="validation" placeholder="username" value={inputValues.username} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValues({ ...inputValues, username: event.currentTarget.value })} />
          </div>
          <div className="login_page_input_container">
            <Input isError={false} helperText="validation" placeholder="password" value={inputValues.password} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValues({ ...inputValues, password: event.currentTarget.value })} />
          </div>
          <div>
            <Button>sign-in</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
