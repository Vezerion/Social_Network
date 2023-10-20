import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function Login(props) {
    console.log(props)
    const navigate = useNavigate();
    useEffect(()=> {
        if(props.isAuth) {
            navigate('/profile');
        }
    }, [props.isAuth, navigate]);
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        },
        reset
    } = useForm({
        mode: 'onBlur'
    });
    const emailErrors = {
        maxLength: 'Максимальное количество символов 50',
        minLength: 'Минимальное колличество символов 10',
        required: 'Поле обязательно к заполнению',
        pattern: 'Введите настоящую почту'
    }
    const passwordErrors = {
        required: 'Поле обязательно к заполнению',
    }
    const onSubmit = (data) => {
        props.loginUser(data);
        reset();
    }
    const changeEmailValue = (e) => {
        props.setEmail(e.target.value);
    }
    const changePasswordValue = (e) => {
        props.setPassword(e.target.value);
    }
    const changeCheckboxValue = (e) => {
        props.setCheckbox(!props.checkbox);
    }
    const changeCaptchaValue = (e) => {
        props.setCaptcha(e.target.value);
    }
    
    return (
        <div className="login">
            <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
            <label className="login_form_item">
                <span className="login_form_item_header">Почта</span>
                <input  className="login_form_item_input" type="email" {...register("email", { required: true, minLength: 10, maxLength: 50, pattern: /\S+@\S+\.\S+/ })} onChange={changeEmailValue} value={props.email} />
                {errors?.email && <span className="login_form_item_error">{emailErrors[errors.email?.type]}</span>}
            </label>
            <label className="login_form_item">
                <span className="login_form_item_header">Пароль</span>
                <input className="login_form_item_input" type="password" {...register("password", { required: true })} onChange={changePasswordValue} value={props.password} />
                {errors?.password && <span className="login_form_item_error">{passwordErrors[errors.password?.type]}</span>}
            </label>
            <label className="login_form_item">
                <div className="login_form_item_checkbox_wrapper">
                    <span className="login_form_item_header-small">remember me</span>
                    <input className="login_form_item_checkbox" type="checkbox" {...register("rememberMe")} onChange={changeCheckboxValue} value={props.checkbox} checked={props.checkbox} />
                </div>
            </label>
            {props.isCaptcha && (
                <label className="login_form_item">
                <img className="login_form_item_img" src={props.captchaSrc} alt="captcha" />
                <span className="login_form_item_header-medium">Введите текст на картинке</span>
                <input type="text" className="login_form_item_input" {...register("captcha")} onChange={changeCaptchaValue} value={props.captcha}/>
            </label>
            )}
            <button className="login_form_btn" disabled={!isValid} type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Login;