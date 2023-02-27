import styles from "./styles.css";
export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export function LandingPage() {
    return (
        <section className="w-full">
            <div className="w-full h-screen flex justify-center items-center overflow-clip">
                <div className="relative z-40 w-full flex justify-center items-center">
                    <div className="outter-shadow w-[440px] h-[440px] md:w-[497px] md:h-[497px]"></div>
                    <div className="absolute w-[380px] min-w-[380px]  mx-auto rounded-full overflow-hidden md:w-[430px] md:max-w-[430px]">
                        <img className="" src="/assets/hero.png" alt="hero_image" />
                    </div>
                    <div className="inner-shadow mix-blend-normal w-[381px] h-[381px] md:w-[431px] md:h-[431px] md:mix-blend-multiply"></div>
                    <div className="absolute flex flex-col md:items-center">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-end self-center text-[#E7E7E7] md:items-center">
                                <div className="display-2">能讓</div>
                                <div className="flex justify-center items-center w-[82px] h-[42px] border-[1px] border-solid border-primary rounded-[95.7px] md:w-[120px] md:h-[54.4px]">
                                    <div className="en-h1">BIM</div>
                                </div>
                            </div>
                            <div className="display-2 text-[#E7E7E7]">引以為傲的工程</div>
                        </div>
                        <div className="flex items-end text-[#E7E7E7] md:items-center">
                            <div className="display-2 text-[#E7E7E7]">才是真實的</div>
                            <div className="flex justify-center items-center w-[82px] h-[42px] border-[1px] border-solid border-primary rounded-[95.7px] md:w-[120px] md:h-[54.4px]">
                                <div className="en-h1">BIM</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden absolute right-[0] bottom-[13%] md:max-lg:inline-block">
                    <img src="/assets/tower_r_t.png" alt="bg_tower" />
                </div>
                <div className="hidden absolute right-[0] bottom-[13%] lg:inline-block">
                    <img src="/assets/tower_r.png" alt="bg_tower" />
                </div>
                <div className="hidden absolute left-[0] bottom-[13%] md:max-lg:inline-block">
                    <img src="/assets/tower_l_t.png" alt="bg_tower" />
                </div>
                <div className="hidden absolute left-[0] bottom-[13%] lg:inline-block">
                    <img src="/assets/tower_l.png" alt="bg_tower" />
                </div>
            </div>
        </section>
    );
}
