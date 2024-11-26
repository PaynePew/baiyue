import { Link } from "@remix-run/react";
import { FooterSimple } from "~/components/Footer";

export function NotFoundPage() {
    return (
        <section className="w-full h-screen bg-grayscale-iron">
            <section className="container relative">
                <div className="relative z-10 flex flex-col pt-[150px] pb-[150px] mx-[20px] md:pt-[280px] md:pb-[412px] md:mx-[90px] lg:py-[336px] lg:ml-[120px]">
                    <div className="mb-[56px]">
                        <div className="display-1 text-grayscale-gainsboro text-[36px] md:text-[44px] lg:text-[64px]">
                            不好意思，無法找到此頁面
                        </div>
                        <div className="en-h2 text-primary text-center lg:text-start">404 NOT FOUND</div>
                    </div>
                    {/*Desktop Button*/}
                    <Link
                        className="hidden main-button button-shadow-1 nav-title lg:flex gap-[16px] text-[15px] h-[56px] lg:w-[173px]"
                        to="/"
                    >
                        <span className="w-[8px] h-[8px] bg-grayscale-light rounded-full"></span>
                        <div className="">返回首頁</div>
                    </Link>
                    {/*Mobile Button*/}
                    <Link
                        className="main-button relative left-[50%] translate-x-[-50%] w-[312px] button-shadow-1 nav-title flex gap-[16px] text-[15px] h-[56px] lg:hidden"
                        to="/"
                    >
                        <span className="w-[8px] h-[8px] bg-grayscale-light rounded-full"></span>
                        <div className="">返回首頁</div>
                    </Link>
                </div>
                {/*Decoration Square-Bottom Left*/}
                <div className="absolute hidden md:block md:bottom-0 md:left-0 md:w-[249.5px] md:h-[340px] lg:w-[475px] lg:h-[289px] rounded-[16px] bg-grayscale-iron square-shadow-contact" />{" "}
                {/*Decoration Square-Top Right*/}
                <div className="absolute hidden md:block md:bottom-[325px] md:right-0 md:w-[162.5px] md:h-[414px] lg:bottom-[277px] lg:w-[324px] rounded-[16px] bg-grayscale-iron square-shadow-contact" />
                {/* Decoration Triangle-Bottom Left */}
                <div className="hidden absolute md:inline-block z-10 bottom-[91px] left-[228px] lg:bottom-[69px] lg:left-[444px]">
                    <div className="triangle-dec-primary w-[54.27px] h-[54.27px] bg-primary"></div>
                </div>{" "}
                {/*Rounded Triangle-8 original:72x83 46.77x52.2 lg:-12.615x15.4*/}
                <div className="hidden absolute md:inline-block md:top-[144px] md:right-[60px] lg:top-[218px] lg:right-[152px]">
                    <img className="" src="/assets/rounded_triangle_8.svg" alt="decoration_rounded_triangle_8" />
                </div>
                {/* Decoration Triangle-With BorderLine */}
                <div className="hidden md:block absolute z-10 right-[232px] bottom-[262px] lg:right-[477px] lg:bottom-[239px] ">
                    <div className="w-[46.12px] h-[46.12px] triangle-dec-2 bg-primary lg:w-[67.8px] lg:h-[67.8px]">
                        <div className="absolute w-[29.44px] h-[29.44px] right-[5px] bottom-[5px] triangle-dec-2-filter bg-grayscale-iron lg:w-[43.3px] lg:h-[43.3px] lg:right-[7px] lg:bottom-[7px]"></div>
                    </div>
                    {/* border-arrow-1 */}
                    <div className="absolute bottom-[-12px] left-[-40px] lg:bottom-[-18px] lg:left-[-60px] border-arrow-wrapper expand-order-3">
                        <div className="absolute w-[125px] lg:w-[183px] bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                    </div>
                    {/* border-arrow-2 */}
                    <div className="absolute rotate-90 right-[-12px] top-[-40px] lg:right-[-18px] lg:top-[-60px] border-arrow-wrapper expand-order-2">
                        <div className="absolute w-[125px] lg:w-[183px] bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                    </div>
                    {/* border-arrow-3 */}
                    <div className="absolute -rotate-45 left-[-40px] bottom-[-25px] lg:left-[-60px] lg:bottom-[-35px] border-arrow-wrapper expand-order-4">
                        <div className="absolute w-[160px] lg:w-[235px] bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                    </div>
                </div>
            </section>
            <FooterSimple />
        </section>
    );
}
