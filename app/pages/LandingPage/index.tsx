import styles from "./styles.css";
export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export function LandingPage() {
    return (
        <div>
            <div className="bg-red-500">Hello</div>
        </div>
    );
}
