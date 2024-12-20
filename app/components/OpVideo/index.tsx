import { useState } from "react";
import styles from "./styles.css";
export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "preload", as: "video", href: "/assets/baiyu_logo_animation.mp4" },
    ];
}
type HandleVideoOpenPropType = () => void;

interface OpVideoPropType {
    isVidVisible: Boolean;
    vidRef: React.MutableRefObject<HTMLVideoElement | null>;
    handleVideoOpen: HandleVideoOpenPropType;
}

export function OpVideo({ vidRef, isVidVisible, handleVideoOpen }: OpVideoPropType) {
    const [isVisible, setIsVisible] = useState(true);

    const handleAnimationEnd = () => {
        setIsVisible(false);
        if (vidRef.current) {
            vidRef.current.currentTime = 0;
            vidRef.current.play();
        }
    };

    const handleVidEnd = () => {
        handleVideoOpen();
        if (vidRef.current) {
            vidRef.current.pause();
            vidRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className={`${
                isVidVisible ? "fixed" : "hidden"
            } z-50 w-full h-screen flex justify-center items-center bg-grayscale-iron`}
        >
            {/* opening video  */}
            <div className="bg-grayscale-iron flex flex-col w-full h-full justify-center items-center">
                <div className="w-full h-[85%]">
                    <video
                        className="w-full h-full md:object-cover"
                        ref={vidRef}
                        preload="auto"
                        playsInline
                        muted
                        controls
                        onEnded={handleVidEnd}
                        id="vid"
                    >
                        <source src="/assets/baiyu_logo_animation.mp4" type="video/mp4" />
                        Sorry, your browser doesn't support videos.
                    </video>
                </div>
                {/* skip video */}
                <div
                    onClick={handleVidEnd}
                    className="absolute right-[16px] bottom-[18px] en-body-1 uppercase text-grayscale-light cursor-pointer"
                >
                    <button
                        onClick={handleVidEnd}
                        className="py-[8px] border-b-[1px] hover:text-grayscale-light uppercase cursor-pointer"
                    >
                        SKIP VIDEO
                    </button>
                </div>
            </div>
            {/* opening loading */}
            {isVisible && (
                <div
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
                </div>
            )}
        </div>
    );
}
