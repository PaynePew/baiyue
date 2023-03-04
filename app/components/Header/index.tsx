import type { LinksFunction } from "@remix-run/node";
import styles from "~/components/Header/styles.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: styles }];
};

export function Header() {
    return (
        <section className="fixed z-50 w-full px-[24px] pt-[24px]">
            <div className="flex flex-shrink justify-between">
                <div className="menu-shadow w-[72px] h-[48px] flex justify-center items-center rounded-[128px] md:w-[144.81px] md:h-[64px] lg:w-[256px] lg:h-[120px]">
                    <img
                        className="w-[45px] h-[19px] md:w-[90px] md:h-[38px] lg:w-[160px] lg:h-[67.38px]"
                        src="/assets/logo.png"
                        alt="logo"
                    />
                </div>
                <div className="hidden lg:flex menu-shadow  justify-center items-center gap-[48px] h-[72px] px-[48px] py-[24px] rounded-[128px] text-grayscale-light">
                    <div className="nav-title">關於百越</div>
                    <div className="nav-title">工程實績</div>
                    <div className="nav-title">百越觀點</div>
                    <div className="nav-title">聯絡我們</div>
                </div>
                <div className="menu-shadow w-[56px] h-[48px] flex flex-col gap-[8px] justify-center items-center rounded-[128px] lg:hidden">
                    <span className="nav-icon"></span>
                    <span className="nav-icon"></span>
                </div>
            </div>
        </section>
    );
}
