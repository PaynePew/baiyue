import type { LinksFunction } from "@remix-run/node";
import { useState } from "react";
import { Link } from "@remix-run/react";
import styles from "~/components/Header/styles.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: styles }];
};

const projectTab = [
    { title: "全部" },
    { title: "住宅" },
    { title: "辦公" },
    { title: "教育" },
    { title: "工業" },
    { title: "停車場" },
    { title: "營區" },
    { title: "其他" },
];

function ProjectDropMenu() {
    return (
        <section className="flex flex-wrap justify-self-start gap-[8px] w-[375px] h-[110px]">
            <button className="flex justify-center items-center w-[80px] h-[47px] bg-grayscale-dim rounded-[24px]  body-2 text-grayscale-light hover:bg-secondary-spotlight hover:text-grayscale-iron">
                全部
            </button>
            <button className="flex justify-center items-center w-[80px] h-[47px] bg-grayscale-dim rounded-[24px]  body-2 text-grayscale-light hover:bg-secondary-spotlight hover:text-grayscale-iron">
                住宅
            </button>
            <button className="flex justify-center items-center w-[80px] h-[47px] bg-grayscale-dim rounded-[24px]  body-2 text-grayscale-light hover:bg-secondary-spotlight hover:text-grayscale-iron">
                辦公
            </button>
            <button className="flex justify-center items-center w-[80px] h-[47px] bg-grayscale-dim rounded-[24px]  body-2 text-grayscale-light hover:bg-secondary-spotlight hover:text-grayscale-iron">
                教育
            </button>
            <button className="flex justify-center items-center w-[80px] h-[47px] bg-grayscale-dim rounded-[24px]  body-2 text-grayscale-light hover:bg-secondary-spotlight hover:text-grayscale-iron">
                工業
            </button>
            <button className="flex justify-center items-center w-[80px] h-[47px] bg-grayscale-dim rounded-[24px]  body-2 text-grayscale-light hover:bg-secondary-spotlight hover:text-grayscale-iron">
                停車場
            </button>
            <button className="flex justify-center items-center w-[80px] h-[47px] bg-grayscale-dim rounded-[24px]  body-2 text-grayscale-light hover:bg-secondary-spotlight hover:text-grayscale-iron">
                營區
            </button>
            <button className="flex justify-center items-center w-[80px] h-[47px] bg-grayscale-dim rounded-[24px]  body-2 text-grayscale-light hover:bg-secondary-spotlight hover:text-grayscale-iron">
                其他
            </button>
        </section>
    );
}

function ProjectMenu() {
    return (
        <section className="mt-[20px] flex flex-wrap gap-[8px] md:mt-[16px] md:max-w-[432px]">
            {projectTab.map(({ title }) => {
                return (
                    <button
                        key={title}
                        className="button-shadow-2 flex justify-center items-center w-[80px] h-[47px] bg-grayscale-iron rounded-[24px]  body-2 text-grayscale-light hover:bg-secondary-spotlight hover:text-grayscale-iron"
                    >
                        {title}
                    </button>
                );
            })}
        </section>
    );
}

function ModalMenu() {
    const [isOpen, toggleOpen] = useState(false);

    return (
        <section className="absolute -z-10 h-screen w-screen bg-grayscale-dim">
            <div className="flex flex-col mx-[48px] mt-[128px] md:mx-[129px] md:mt-[248px]">
                <div className="flex flex-col gap-[32px] md:gap-[56px]">
                    <Link to="/about" className="flex flex-col gap-[4px] md:gap-[8px]">
                        <div className="nav-title text-white">關於百越</div>
                        <div className="en-h4 text-[18px] text-primary">ABOUT US</div>
                    </Link>
                    <div className="flex flex-col gap-[4px] md:gap-[8px]">
                        <div className="nav-title text-white" onClick={() => toggleOpen(prev => !prev)}>
                            工程實績
                        </div>
                        <div className="en-h4 text-[18px] text-primary" onClick={() => toggleOpen(prev => !prev)}>
                            PROJECTS
                        </div>
                        {isOpen ? <ProjectMenu /> : null}
                    </div>
                    <Link to="/insight" className="flex flex-col gap-[4px] md:gap-[8px]">
                        <div className="nav-title text-white">百越觀點</div>
                        <div className="en-h4 text-[18px] text-primary">INSIGHT</div>
                    </Link>
                    <Link to="/contact" className="flex flex-col gap-[4px] md:gap-[8px]">
                        <div className="nav-title text-white">聯絡我們</div>
                        <div className="en-h4 text-[18px] text-primary">CONTACT US</div>
                    </Link>
                </div>
            </div>
            <div className="mx-[24px] mb-[24px] mt-[98px] md:mt-[225px] md:mb-[40px]">
                <div className="en-minimum text-[12px] text-grayscale-light/50 text-center h-fit">
                    Copyright © 2022 BAIYUE INFORMATION CO.,LTD. All rights reserved .
                </div>
            </div>
        </section>
    );
}

export function Header() {
    const [isOpen, toggleOpen] = useState(false);
    const [isProjectOpen, toggleProjectOpen] = useState(false);

    return (
        <section className="fixed z-50 w-full ">
            {isOpen ? <ModalMenu /> : null}
            <div className="flex flex-shrink justify-between px-[24px] pt-[24px] md:px-[40px] md:pt-[32px] lg:px-[48px]">
                <Link
                    to="/"
                    className="menu-shadow bg-grayscale-iron w-[72px] h-[48px] flex justify-center items-center rounded-[128px] hover:bg-grayscale-dim md:w-[144.81px] md:h-[64px] lg:w-[256px] lg:h-[120px]"
                >
                    <img
                        className="w-[45px] h-[19px] md:w-[90px] md:h-[38px] lg:w-[160px] lg:h-[67.38px]"
                        src="/assets/logo.png"
                        alt="logo"
                    />
                </Link>
                {/* Header for PC */}
                <div
                    className={`hidden w-[532px] bg-grayscale-iron  menu-shadow  justify-center items-center flex-wrap gap-[48px] h-fit px-[48px] py-[24px] rounded-[128px] text-grayscale-light lg:flex ${
                        isProjectOpen ? "dropdown-header" : ""
                    }`}
                >
                    <Link to="/about" className="nav-title">
                        關於百越
                    </Link>
                    <button className="nav-title" onClick={() => toggleProjectOpen(prev => !prev)}>
                        工程實績
                    </button>
                    <Link to="/insight" className="nav-title">
                        百越觀點
                    </Link>
                    <Link to="/contact" className="nav-title">
                        聯絡我們
                    </Link>
                    {isProjectOpen ? <ProjectDropMenu /> : null}
                </div>
                {/* Hamburger for Mobile & Tablet */}
                <button
                    className="menu-shadow w-[56px] h-[48px] flex flex-col gap-[8px] justify-center items-center rounded-[128px] lg:hidden"
                    onClick={() => toggleOpen(prev => !prev)}
                >
                    <span className="nav-icon"></span>
                    <span className="nav-icon"></span>
                </button>
            </div>
        </section>
    );
}
