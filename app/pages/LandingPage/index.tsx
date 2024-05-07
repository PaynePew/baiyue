// import { useNavigation } from "@remix-run/react";
import { useEffect, useState, useRef } from "react";
import { throttle } from "~/utils/helpers";
import { Footer } from "~/components/Footer";
import { About, Contact, FeaturedProject, Partners, Hero } from "./components";
import { OpVideo } from "~/components/OpVideo";
import spinnerStyles from "~/components/OpVideo/styles.css";

import styles from "./styles.css";
export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "stylesheet", href: spinnerStyles },
        { rel: "preload", as: "video", href: "/assets/baiyu_logo_animation.mp4" },
    ];
}

export function LandingPage() {
    const [isVidVisible, setIsVidVisible] = useState(true);
    const [colorIndex, setColorIndex] = useState(0);
    const vidRef = useRef<HTMLVideoElement | null>(null);
    const colors = ["grayscale-iron", "grayscale-dim", "grayscale-iron", "grayscale-dim", "grayscale-dim"];

    //Gradient Background Colors
    useEffect(() => {
        const handleScrollColor = () => {
            const scrollFromTop = window.scrollY;
            const sectionElements = [...document.getElementsByTagName("section")];

            for (let i = 0; sectionElements.length > i; i++) {
                if (scrollFromTop <= sectionElements[i].offsetTop + sectionElements[i].clientHeight / 2) {
                    setColorIndex(i);
                    break;
                }
            }
        };
        const throttledScroll = throttle(handleScrollColor);
        throttledScroll();
        window.addEventListener("scroll", throttledScroll);
        return () => window.removeEventListener("scroll", throttledScroll);
    }, []);

    //Play Video
    const handleVideoPlay = () => {
        handleVideoOpen();
        if (vidRef.current) {
            vidRef.current.currentTime = 0;
            vidRef.current.play();
        }
    };

    //Determine Video is Play or Not
    const handleVideoOpen = () => {
        setIsVidVisible(!isVidVisible);
    };

    return (
        <div className={`w-full bg-${colors[colorIndex]} transition-all duration-500`}>
            {/* Decoration Triangle-1 */}
            <div className="absolute z-10 bottom-[-5.1%] right-[6.7%] triangle-shadow md:bottom-[5.2%] md:right-[13.5%] lg:bottom-[5.4%] lg:right-[6.8%] ">
                <div className="triangle-dec w-[75.11px] h-[75.11px] lg:w-[84.5px] lg:h-[84.5px] bg-primary"></div>
            </div>
            {/* Decoration Triangle-2 */}
            <div className="hidden md:block absolute z-10 left-[14.5%] top-[18.1%] lg:left-[20.5%] lg:top-[24.8%] ">
                <div className="w-[46.12px] h-[46.12px]  triangle-dec-2 bg-primary lg:w-[67.8px] lg:h-[67.8px]">
                    <div className="absolute w-[29.44px] h-[29.44px] right-[5px] bottom-[5px] triangle-dec-2-filter bg-grayscale-iron lg:w-[43.3px] lg:h-[43.3px] lg:right-[7px] lg:bottom-[7px]"></div>
                </div>
                {/* border-arrow-1 */}
                <div
                    className={`absolute bottom-[-12px] left-[-40px] lg:bottom-[-18px] lg:left-[-60px] ${
                        isVidVisible ? "" : "border-arrow-wrapper expand-order-3"
                    }`}
                >
                    <div className="absolute w-[125px] lg:w-[183px] bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                </div>
                {/* border-arrow-2 */}
                <div
                    className={`absolute rotate-90 right-[-12px] top-[-40px] lg:right-[-18px] lg:top-[-60px] ${
                        isVidVisible ? "" : "border-arrow-wrapper expand-order-2"
                    }`}
                >
                    <div className="absolute w-[125px] lg:w-[183px] bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                </div>
                {/* border-arrow-3 */}
                <div
                    className={`absolute -rotate-45 left-[-40px] bottom-[-25px] lg:left-[-60px] lg:bottom-[-35px] ${
                        isVidVisible ? "" : "border-arrow-wrapper expand-order-4"
                    }`}
                >
                    <div className="absolute w-[160px] lg:w-[235px] bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                </div>
            </div>

            <OpVideo vidRef={vidRef} isVidVisible={isVidVisible} handleVideoOpen={handleVideoOpen} />
            <Hero
                handleVideoPlay={handleVideoPlay}
                colors={colors}
                colorIndex={colorIndex}
                isVidVisible={isVidVisible}
            />
            <About />
            <FeaturedProject />
            <Partners />
            <Contact />
            <Footer />
        </div>
    );
}
