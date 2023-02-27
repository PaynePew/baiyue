import styles from "./styles.css";
export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export function LandingPage() {
    return (
        <section className="w-full overflow-clip">
            <div className="w-full h-screen flex justify-center items-center overflow-clip">
                <div className="relative w-[380px] min-w-[380px]  mx-auto rounded-full overflow-hidden md:w-[430px] md:max-w-[430px]">
                    <div className="inner-shadow"></div>
                    <img className="" src="/assets/hero.png" alt="hero_image" />
                    {/* <div className="outter-shadow"></div> */}
                </div>
            </div>
        </section>
    );
}
