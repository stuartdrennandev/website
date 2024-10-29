import { ReactNode } from "react";
import Header from "./_components/header/Header";
import styles from "./PageLayout.module.css"

interface Props {
    children?: ReactNode;
}

const PageLayout: React.FC<Props> = (
    {
        children
    }
) => (
    <div className={styles.page}>
        <main className={styles.main}>
            <Header />
            {children}
        </main>
    </div>
);

export default PageLayout;