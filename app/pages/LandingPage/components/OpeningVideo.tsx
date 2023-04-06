export function OpeningVideo() {
    return (
        <div className="fixed bg-grayscale-iron flex w-full h-screen justify-center items-center">
            <video ref={vidRef} preload="auto" muted playsInline onEnded={handleVidEnd} id="vid">
                <source src="/assets/baiyu_logo_animation.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
            </video>
        </div>
    );
}
