import { useRef, useState } from "react";

const fakePartners = [
    { pic: "logo_1" },
    { pic: "logo_2" },
    { pic: "logo_3" },
    { pic: "logo_4" },
    { pic: "logo_5" },
    { pic: "logo_6" },
    { pic: "logo_7" },
    { pic: "logo_8" },
];

const fakePartnersTablet = [{ pic: "logo_9" }, { pic: "logo_10" }, { pic: "logo_11" }, { pic: "logo_12" }];

export function Partners() {
    const containerRef = useRef<HTMLDivElement>(null);
    const ballRef = useRef<HTMLDivElement>(null);
    const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent) => {
        const container = containerRef.current;
        const ball = ballRef.current;

        if (!container || !ball) {
            return;
        }
        // 處理mouseMove event
        const containerRect = container.getBoundingClientRect();
        const ballSpotlight = ball.getBoundingClientRect();

        let x = event.clientX - containerRect.left - ballSpotlight.width / 2;
        let y = event.clientY - containerRect.top - ballSpotlight.width / 2;
        if (containerRect.left > event.clientX) {
            x = -ballSpotlight.width / 2;
        } else if (containerRect.right < event.clientX) {
            x = containerRect.width - ballSpotlight.width / 2;
        }
        if (event.clientY < containerRect.top) {
            y = -ballSpotlight.width / 2;
        } else if (event.clientY > containerRect.bottom) {
            y = containerRect.height - ballSpotlight.width / 2;
        }
        setBallPosition({ x, y });
    };

    return (
        <section className="w-full flex justify-center items-center" onMouseMove={handleMouseMove}>
            <div className="container">
                <div className="flex flex-col justify-center items-center pt-[64px] pb-[80px] mx-[24px] md:pt-[80px] md:mx-[40px] md:pb-[120px] lg:flex-row lg:gap-[161px] lg:pt-[120px] lg:mx-[120px] lg:pb-[183px] lg:justify-start lg:items-start">
                    <div className="flex flex-col items-center justify-center gap-[8px] mb-[40px] md:mb-[64px] lg:items-start">
                        <h1 className="text-grayscale-gainsboro">信賴夥伴</h1>
                        <div className="en-h3 text-primary">PARTNERS</div>
                    </div>
                    {/* Todo: make seperate spotlight */}
                    <div ref={containerRef} className="relative lg:py-[5px] lg:overflow-hidden">
                        <div
                            ref={ballRef}
                            className="hidden absolute z-100 w-[500px] h-[500px] bg-secondary-spotlight lg:block rounded-full mix-blend-overlay pointer-events-none "
                            style={{ transform: `translate(${ballPosition.x}px, ${ballPosition.y}px)` }}
                        ></div>
                        {/* <div className="absolute z-100 flex flex-col" >
                        <div className="w-[792px] h-[30px] bg-grayscale-dim mt-[121px]"></div>
                        <div className="w-[792px] h-[30px] bg-grayscale-dim mt-[122px]"></div>
                        <div className="w-[792px] h-[30px] bg-grayscale-dim mt-[123px]"></div>
                    </div>
                    <div className="absolute z-100 flex h-full" >
                        <div className="w-[30px] ml-[241px] bg-grayscale-dim"></div>
                        <div className="w-[30px] ml-[242px] bg-grayscale-dim"></div>
                    </div> */}
                        {/* <div className="absolute z-35 w-full h-full bg-grayscale-iron"></div> */}
                        {/* <div className="absolute w-[792px] grid grid-cols-3 gap-[32px] lg:border-[32px] lg:border-grayscale-iron"></div> */}
                        <div className="flex flex-wrap gap-[24px] justify-center items-center lg:gap-[32px] lg:max-w-[792px] ">
                            {/* <div className="relative z-25 bg-grayscale-dim grid grid-cols-3 gap-[24px] lg:gap-[32px] lg:max-w-[792px] "> */}
                            {fakePartners.map(({ pic }) => {
                                return (
                                    <div
                                        key={pic}
                                        className="card-shadow flex justify-center items-center w-[140px] h-[120px] px-[13px] rounded-[16px] md:p-[6px] lg:w-[240px] lg:p-[35px] "
                                    >
                                        <img className="" src={`assets/${pic}.png`} alt={pic} />
                                    </div>
                                );
                            })}
                            {fakePartnersTablet.map(({ pic }) => {
                                return (
                                    <div
                                        key={pic}
                                        className="hidden card-shadow md:flex justify-center items-center w-[140px] h-[120px] px-[13px] rounded-[16px] md:p-[6px] lg:w-[240px] lg:p-[35px] "
                                    >
                                        <img className="" src={`assets/${pic}.png`} alt={pic} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
