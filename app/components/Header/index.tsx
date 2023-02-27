import type { LinksFunction } from "@remix-run/node";
import styles from "~/components/Header/styles.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: styles }];
};

export function Header() {
    return (
        <section className="fixed z-50 w-full p-[24px]">
            <div className="flex justify-between">
                <div className="menu-shadow w-[72px] h-[48px] flex justify-center items-center rounded-[128px] md:w-[144.81px] md:h-[64px] lg:w-[256px] lg:h-[120px]">
                    <img
                        className="w-[45px] h-[19px] md:w-[90px] md:h-[38px] lg:w-[160px] lg:h-[67.38px]"
                        src="/assets/logo.png"
                        alt="logo"
                    />
                </div>
                <div className="menu-shadow w-[56px] h-[48px] flex flex-col gap-[8px] justify-center items-center rounded-[128px]">
                    <span className="nav-icon"></span>
                    <span className="nav-icon"></span>
                </div>
            </div>
        </section>
    );
}
