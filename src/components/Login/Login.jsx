import { useForm } from "react-hook-form";
function Login(props) {
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
        maxLength: 'Максимальное количество символов 16',
        minLength: 'Минимальное колличество символов 10',
        required: 'Поле обязательно к заполнению',
        pattern: 'Введите настоящую почту'
    }
    const passwordErrors = {
        required: 'Поле обязательно к заполнению',
    }
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    }
    return (
        <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
            <label className="login_form_item">
                <span>Почта</span>
                <input type="email" {...register('email', { required: true, minLength: 10, maxLength: 16, pattern: /\S+@\S+\.\S+/ })} />
                <div>{errors?.email && <span>{emailErrors[errors.email?.type]}</span>}</div>
            </label>
            <label className="login_form_item">
                <span>Пароль</span>
                <input type="password" {...register('password', { required: true })} />
                <div>{errors?.password && <span>{passwordErrors[errors.password?.type]}</span>}</div>
            </label>
            <label className="login_form_item">
                <div>
                    <span>remember me</span>
                    <input type="checkbox" {...register('remember')} />
                </div>
            </label>
            <button disabled={!isValid} type="submit">Submit</button>
        </form>
    )
}

export default Login;