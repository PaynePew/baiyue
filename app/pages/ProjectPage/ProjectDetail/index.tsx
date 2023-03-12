import styles from "./styles.css";
import { FooterSimple } from "~/components/Footer";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export function ProjectDetail({ projectId }) {
    return (
        <section>
            <div className="">
                <h1>{projectId}</h1>
            </div>
            <FooterSimple />
        </section>
    );
}
