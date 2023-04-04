import { useState, useRef } from "react";
import styles from "./styles.css";
export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "preload", as: "video", href: "/assets/baiyu_logo_animation.mp4" },
    ];
}

export function Spinner() {
    const [isVisible, setIsVisible] = useState(true);
    const [isVidVisible, setIsVidVisible] = useState(true);
    const [toggleAnimation, setToggleAnimtion] = useState(false);
    const vidRef = useRef(null);
    const handlePlayVideo = () => {
        if (!vidRef.current) {
            setIsVidVisible(false);
        }
        vidRef.current.play();
        setToggleAnimtion(false);
    };

    const handleAnimationEnd = () => {
        setToggleAnimtion(true);
        setTimeout(() => {
            setIsVisible(false);
            handlePlayVideo();
        }, 550);
    };

    const handleVidEnd = () => {
        setToggleAnimtion(true);
        setTimeout(() => {
            setIsVidVisible(false);
        }, 550);
    };

    return (
        <section className={`${isVidVisible ? "fixed" : "hidden"} z-50 w-full h-screen`}>
            <div className="fixed bg-grayscale-iron flex w-full h-screen justify-center items-center">
                <video ref={vidRef} preload={"auto"} muted className="" onEnded={handleVidEnd} id="vid">
                    <source src="/assets/baiyu_logo_animation.mp4" type="video/mp4" />
                    Sorry, your browser doesn't support videos.
                </video>
            </div>
            {isVisible && (
                <section
                    className="fixed flex bg-grayscale-iron w-full h-screen justify-center items-center"
                    onAnimationEnd={handleAnimationEnd}
                >
                    <div className="relative">
                        <div className="absolute">
                            <span className="absolute bg-grayscale-iron loading-animation"></span>
                            <img className="" src="/assets/logo_loading.svg" alt="logo_pic" />
                        </div>
                        <img className="opacity-50" src="/assets/logo_loading.svg" alt="logo_opacity_pic" />
                    </div>
                </section>
            )}
            {/* overlay animation */}
            <div
                className={`absolute z-50 w-full h-full bg-black opacity-0 ${
                    toggleAnimation ? "overlay-animation" : ""
                }`}
            ></div>
        </section>
    );
}
