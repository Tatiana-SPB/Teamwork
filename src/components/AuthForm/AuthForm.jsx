import {
  Scontainer,
  Smodal,
  Smodal__a,
  Smodal__block,
  Smodal__form,
  Smodal__form_group,
  Smodal__input,
  Smodal__ttl,
  Swrapper,
} from "./AuthForm.styled";

export function AuthForm({ isSignUp }) {
  return (
    <Swrapper>
      <Scontainer>
        <Smodal>
          <Smodal__block>
            <Smodal__ttl>{isSignUp ? "Регистрация" : "Вход"}</Smodal__ttl>
            <Smodal__form id="form" action="#">
              {isSignUp && (
                <Smodal__input
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                />
              )}
              <Smodal__input
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <Smodal__input
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <Smodal__a id="SignUpEnter" $fullWidth={true}>
                {isSignUp ? "Зарегистрироваться" : "Войти"}
              </Smodal__a>

              {isSignUp && (
                <Smodal__form_group>
                  <p>Уже есть аккаунт? Войдите здесь</p>
                </Smodal__form_group>
              )}

              {!isSignUp && (
                <Smodal__form_group>
                  <p>Нужно зарегистрироваться? Регистрируйтесь здесь</p>
                </Smodal__form_group>
              )}
            </Smodal__form>
          </Smodal__block>
        </Smodal>
      </Scontainer>
    </Swrapper>
  );
}

export default AuthForm;
