import styles from "./styles.css";
export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export function LandingPage() {
    return (
        <div>
            <h1 className="bg-red-500">測試測試</h1>
            <h2 className="bg-red-500">測試測試</h2>
            <h3 className="bg-red-500">測試測試</h3>
            <h4 className="bg-red-500">測試測試</h4>
            <h5 className="bg-red-500">測試測試</h5>
            <h6 className="bg-red-500">測試測試</h6>

            <div className="display-1">測試測試</div>
            <div className="display-2">測試測試</div>
            <div className="nav-title">測試測試</div>
            <div className="body-1">測試測試</div>
            <div className="body-2">測試測試</div>
            <div className="body-3">測試測試</div>
        </div>
    );
}
