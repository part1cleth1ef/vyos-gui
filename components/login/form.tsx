import {useFormik} from "formik";
import {Button, FormLabel, Input, LightMode, Stack} from "@chakra-ui/react";
import {getDisplayType} from "@/lib/utils";


// <div className={styles.logInParent}>
// <div className={styles.logIn}>Log In</div>
// <Form>
// <div className={styles.formUsernameBox}>
// <label htmlFor={"username"} className={styles.title}>Username</label>
// <Field type="text" name="username" placeholder="Type your username..." className={styles.input}/>
// </div>
// {errors.username && touched.username && errors.username}
// <div className={styles.formPasswordBox}>
// <label htmlFor={"password"} className={styles.title}>Password</label>
// <Field type="password" name="password" className={styles.input}
// placeholder="Type your password..."/>
// </div>
// {errors.password && touched.password && errors.password}
// <button type="submit" className={styles.buttonPrimary}>Login
// </button>
// </Form>
// </div>

function LoginForm() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    const displayType = getDisplayType();

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormLabel htmlFor={"username"} color={"login_subtitle"} fontFamily={"Work Sans Variable"}
                       fontWeight={"medium"}>Username</FormLabel>
            <Input
                id={"username"}
                name={"username"}
                type={"text"}
                placeholder={"Type your username..."}
                onChange={formik.handleChange}
                value={formik.values.username}
                required={true}
                bg={"login_form_input"}
            />

            <FormLabel htmlFor={"password"} color={"login_subtitle"} fontFamily={"Work Sans Variable"}
                       fontWeight={"medium"}>Password</FormLabel>
            <Input
                id={"password"}
                name={"password"}
                type={"password"}
                placeholder={"Type your password..."}
                onChange={formik.handleChange}
                value={formik.values.password}
                required={true}
                bg={"login_form_input"}
            />

            <Stack
                // width="154px"
                width={displayType === "phone" ? "100%" : "154px"}
                height={10}
                // aligned with bottom of the form
                marginTop={8}

            >
                <LightMode>
                    {/* The figma has the button in both light+dark mode here use the light variant. */}
                    <Button textAlign="center" type={"submit"} variant={"primary"}>Login</Button>
                </LightMode>
            </Stack>
        </form>
    )
}

export default LoginForm;