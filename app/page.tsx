import Image from 'next/image';

// assets
import styles from './index.module.css';
import logo from "static/Logo.svg";
import eye from "static/login/eye.svg";
import background_shape from "static/login/background_shape.svg";
import LoginForm from "@/components/login/form";


export default async function IndexPage() {
    return (
        <div className={styles.login}>
            <Image src={background_shape} alt="Background Shape" className={styles.backgroundShapeIcon}/>
            <LoginForm/>

            <div className={styles.vyosParent}>
                <div className={styles.vyos}>VyOS</div>
                <Image src={logo} alt="Vyos Logo" className={styles.logoIcon}/>
                <div className={styles.routerexamplecom}>1.4.0 (router.example.com)</div>
            </div>
        </div>
    );
}
