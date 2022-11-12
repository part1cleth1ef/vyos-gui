"use client"
import {Field, Form, Formik} from "formik";
import styles from "../../app/index.module.css";

function LoginForm() {
    return (
        <Formik
            initialValues={{
                username: "",
                password: ""
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  errors,
                  touched
              }) => (
                <div className={styles.logInParent}>
                    <div className={styles.logIn}>Log In</div>
                    <Form>
                        <div className={styles.formUsernameBox}>
                            <label htmlFor={"username"} className={styles.title}>Username</label>
                            <Field type="text" name="username" placeholder="Type your username..." className={styles.input}/>
                        </div>
                        {errors.username && touched.username && errors.username}
                        <div className={styles.formPasswordBox}>
                            <label htmlFor={"password"} className={styles.title}>Password</label>
                            <Field type="password" name="password" className={styles.input} placeholder="Type your password..."/>
                        </div>
                        {errors.password && touched.password && errors.password}
                        <button type="submit" className={styles.buttonPrimary}>Login
                        </button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default LoginForm;