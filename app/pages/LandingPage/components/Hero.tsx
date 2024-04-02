export function Hero({ handleVideoPlay, colors, colorIndex }) {
    return (
        <section className="relative w-full h-screen flex justify-center items-center overflow-clip">
            {/* Hero Middle Section */}
            <div className="relative z-40 w-full flex justify-center items-center">
                {/* Outer Circle Shadow */}
                <div className="absolute outter-shadow w-[440px] h-[440px] md:w-[497px] md:h-[497px] flex justify-center items-end expand-order-1">
                    {/* Video Play Buttom */}
                    <div
                        className={`relative bg-${colors[colorIndex]} transition-all duration-500 z-50 flex flex-col items-center gap-[16px] bottom-[-56px]`}
                    >
                        <button
                            onClick={handleVideoPlay}
                            className="button-shadow-2 bg-primary w-[40px] h-[40px] rounded-full flex justify-center items-center"
                        >
                            <div className="border-grayscale-iron border-y-transparent border-r-transparent border-solid border-l-[8px] border-y-[4px]"></div>
                        </button>
                        <div onClick={handleVideoPlay} className="en-body-1 text-secondary-light cursor-pointer">
                            IMAGE VIDEO
                        </div>
                    </div>
                </div>
                <svg
                    className={`absolute stroke-grayscale-iron  w-[440px] h-[440px] md:w-[500px] md:h-[500px] rotate-90`}
                >
                    <circle
                        className={`draw-circle`}
                        fill="none"
                        strokeWidth="15"
                        strokeMiterlimit="10"
                        cx="250"
                        cy="250"
                        r="250"
                    />
                </svg>
                {/* Hero Image */}
                <div className="absolute w-[380px] min-w-[380px]  mx-auto rounded-full overflow-hidden md:w-[430px] md:max-w-[430px]">
                    <img className="" src="/assets/hero.png" alt="hero_image" />
                </div>
                {/* Blend filter */}
                <div className="absolute inner-shadow mix-blend-multiply w-[381px] h-[381px] md:w-[431px] md:h-[431px]"></div>
                {/* Hero Text */}
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
            {/* Decoration Rectangle-1 */}
            <div className="absolute dec-shadow-4 w-[68.81px] h-[18.37px] z-10 top-[17.5%] right-[-24.28px] md:right-[11%] md:top-[26%]"></div>
            {/* Decoration Rectangle-2 */}
            <div className="absolute dec-shadow-4 w-[107.39px] h-[43.6px] z-10 left-[-40px] bottom-[10.2%] md:left-[-2.5%] md:bottom-[16%] lg:left-[10.13%] lg:bottom-[18.3%]"></div>
            {/* Decoration Right Tower For Tablet */}
            <div className="hidden absolute right-[0] bottom-[7.2%] md:max-lg:inline-block">
                <img src="/assets/tower_r_t.png" alt="bg_tower" />
                {/* border-arrow-6 */}
                <div className="absolute -rotate-45 bottom-[45px] left-[-10px] border-arrow-wrapper expand-order-6">
                    <div className="absolute w-[654px] bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                </div>
                {/* border-arrow-10 */}
                <div className="absolute bottom-[-29px] left-[25px] border-arrow-wrapper expand-order-10">
                    <div className="absolute w-[517px] bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                </div>
            </div>
            {/* Decoration Right Tower For Desktop */}
            <div className="hidden absolute right-[0] bottom-[10%] lg:inline-block">
                <img src="/assets/tower_r.png" alt="bg_tower" />
                {/* border-arrow-6 */}
                <div className="absolute bottom-[60px] left-[-10px] border-arrow-wrapper -rotate-45 expand-order-6">
                    <div className="absolute w-[654px] bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                </div>
                {/* border-arrow-10 */}
                <div className="absolute bottom-[-33px] left-[30px] border-arrow-wrapper expand-order-10">
                    <div className="absolute w-[598px] bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                </div>
            </div>
            {/* Decoration Left Tower For Tablet */}
            <div className="hidden absolute left-[0] bottom-[7.2%] md:max-lg:inline-block">
                <img src="/assets/tower_l_t.png" alt="bg_tower" />
                {/* border-arrow-5 */}
                <div className="absolute top-[195px] right-[320px] border-arrow-wrapper expand-order-5">
                    <div className="absolute w-[91px] bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                </div>
                {/* border-arrow-7 */}
                <div className="absolute rotate-90 top-[270px] right-[90px] border-arrow-wrapper expand-order-7">
                    <div className="absolute w-[126px] bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                </div>
                {/* border-arrow-9 */}
                <div className="absolute bottom-[-29px] left-[-175px] border-arrow-wrapper expand-order-9">
                    <div className="absolute w-[517px] bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                </div>
            </div>
            {/* Decoration Left Tower For Desktop */}
            <div className="hidden absolute left-[0] bottom-[10%] lg:inline-block">
                <img src="/assets/tower_l.png" alt="bg_tower" />
                {/* border-arrow-5 */}
                <div className="absolute top-[220px] right-[365px] border-arrow-wrapper expand-order-5">
                    <div className="absolute w-[105px] bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                </div>
                {/* border-arrow-7 */}
                <div className="absolute rotate-90 top-[310px] right-[110px] border-arrow-wrapper expand-order-7">
                    <div className="absolute w-[145px] bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                </div>
                {/* border-arrow-8 */}
                <div className="absolute rotate-90 top-[250px] right-[530px] border-arrow-wrapper expand-order-8">
                    <div className="absolute w-[245px] bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                </div>
                {/* border-arrow-9 */}
                <div className="absolute bottom-[-33px] left-[-40px] border-arrow-wrapper expand-order-9">
                    <div className="absolute w-[598px] bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                </div>
            </div>
        </section>
    );
}
