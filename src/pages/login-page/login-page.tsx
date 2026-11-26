import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { login } from '../../store/user-thunk';
import { AppRoute } from '../../const';

const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d).+$/;

function LoginPage(): JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const result = await dispatch(login({ email, password }));

    setIsSubmitting(false);

    if (login.fulfilled.match(result)) {
      navigate(AppRoute.Main);
    } else {
      setError((result.payload as string) ?? 'Login failed');
    }
  };

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    if (authorizationStatus === 'AUTH') {
      navigate(AppRoute.Main);
    }
  }, [authorizationStatus, navigate]);

  const isPasswordValid = PASSWORD_PATTERN.test(password);
  const isSubmitDisabled = !email || !isPasswordValid || isSubmitting;

  const handleEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={(evt) => void handleSubmit(evt)}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required value={email} onChange={handleEmailChange}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required value={password} onChange={handlePasswordChange}/>
              </div>
              {error && <p className="login__error">{error}</p>}
              <button className="login__submit form__submit button" type="submit" disabled={isSubmitDisabled}>Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
