import { FooterSimple } from "~/components/Footer";
import styles from "./styles.css";
import landingPageStyles from "~/pages/LandingPage/styles.css";
import { useRef } from "react";
import { Services, Carousel } from "./components";
export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "stylesheet", href: landingPageStyles },
    ];
}

// TODO:Update Scroll Animation
export function AboutPage() {
    const carouselScrollRef = useRef<HTMLDivElement | null>(null);
    const serviceScrollRef = useRef<HTMLDivElement | null>(null);

    // const [section, setSection] = useState(0);
    //
    //    useEffect(() => {
    //        const positionService = window.scrollY + serviceScrollRef?.current!.getBoundingClientRect().top;
    //        console.log("position", positionService);
    //        console.log("now", window.scrollY + window.innerWidth);
    //        document.documentElement.scrollTop = positionService;
    //    });

    //    const handleWheelEvent = (e: WheelEvent) => {
    //        const maxScrollHeight = serviceScrollRef?.current!.scrollHeight - 720;
    //        const maxScrollWidth = carouselScrollRef?.current!.scrollWidth - 1320;
    //        console.log(e.deltaY);
    //        console.log("no?", serviceScrollRef?.current!.getBoundingClientRect().top);
    //
    //        if (section === 0) {
    //            if (
    //                e.deltaY > 0 &&
    //                window.innerHeight > carouselScrollRef?.current!.getBoundingClientRect().top + 500 &&
    //                carouselScrollRef?.current!.scrollLeft <= maxScrollWidth
    //            ) {
    //                e.preventDefault();
    //                carouselScrollRef?.current!.scrollBy(e.deltaY, 0);
    //                if (carouselScrollRef?.current!.scrollLeft >= maxScrollWidth) {
    //                    console.log("OOOOOO");
    //                    setSection(1);
    //                    return;
    //                }
    //            }
    //            if (
    //                e.deltaY < 0 &&
    //                window.innerHeight < carouselScrollRef?.current!.getBoundingClientRect().bottom + 500 &&
    //                carouselScrollRef?.current?.scrollLeft !== 0
    //            ) {
    //                console.log("????????????????????");
    //                e.preventDefault();
    //                carouselScrollRef?.current!.scrollBy(e.deltaY, 0);
    //            }
    //        }
    //        if (section === 1) {
    //            if (
    //                e.deltaY > 0 &&
    //                window.innerHeight > serviceScrollRef?.current!.getBoundingClientRect().top + 606 &&
    //                serviceScrollRef?.current!.scrollTop <= maxScrollHeight
    //            ) {
    //                e.preventDefault();
    //                serviceScrollRef?.current!.scrollBy(0, e.deltaY);
    //            }
    //            if (
    //                e.deltaY < 0 &&
    //                window.innerHeight < serviceScrollRef?.current!.getBoundingClientRect().top + 606 &&
    //                serviceScrollRef?.current!.scrollTop <= maxScrollHeight
    //            ) {
    //                e.preventDefault();
    //                serviceScrollRef?.current!.scrollBy(0, e.deltaY);
    //                if (serviceScrollRef?.current!.scrollTop === 0) {
    //                    console.log("wowowow");
    //                    setSection(0);
    //                    return;
    //                }
    //            }
    //        }
    //    };

    //    useEffect(() => {
    //        document.addEventListener("wheel", handleWheelEvent, { passive: false });
    //        return () => {
    //            document.removeEventListener("wheel", handleWheelEvent);
    //        };
    //    });
    return (
        <>
            <section className="w-full bg-grayscale-iron flex">
                <section className="container overflow-hidden">
                    <div className="relative flex flex-col pt-[141px] mx-[24px] gap-[47.87px] md:mx-[40px] md:pt-[206px] md:gap-[92.51px] lg:pt-[336px] lg:mx-[120px] lg:gap-[162.32px]">
                        {/*About Us Background Image*/}
                        <div className="absolute bottom-[-206px] left-[-160px] md:bottom-[-377px] md:left-[-250px] lg:bottom-[-508px] lg:left-[-120px]">
                            <img
                                className="w-[458px] h-[326px] md:w-[678px] md:h-[482.5px] lg:w-[916px] lg:h-[652px]"
                                src="assets/about_bg_1.svg"
                                alt="about_background_1"
                            />
                        </div>
                        {/* Decoration Triangle-2 */}
                        <div className="hidden md:block absolute z-10 right-[68px] bottom-[332.5px] lg:right-[255.5px] lg:bottom-[395px] ">
                            <div className="w-[46.12px] h-[46.12px]  triangle-dec-2 bg-primary lg:w-[67.8px] lg:h-[67.8px]">
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
                        {/*Decoration Rounded Triangle-1*/}
                        <div className="hidden absolute lg:inline-block top-[619px] left-[-73px]">
                            <img className="" src="assets/rounded_triangle_1.svg" alt="decoration_rounded_triangle_1" />
                        </div>
                        {/*Decoration Rounded Triangle-2*/}
                        <div className="hidden absolute lg:inline-block top-[872px] left-[118.7px]">
                            <img className="" src="assets/rounded_triangle_2.svg" alt="decoration_rounded_triangle_2" />
                        </div>
                        {/*Decoration Rounded Triangle-3*/}
                        <div className="hidden absolute lg:inline-block top-[1190px] left-[379px]">
                            <img className="" src="assets/rounded_triangle_3.svg" alt="decoration_rounded_triangle_3" />
                        </div>
                        {/*Decoration Rounded Triangle-4 68x71 31.49x35.16 h-18 w-18*/}
                        <div className="hidden absolute md:inline-block md:top-[423px] md:right-[182px] lg:top-[595px] lg:right-[468.5px]">
                            <img className="" src="assets/rounded_triangle_4.svg" alt="decoration_rounded_triangle_4" />
                        </div>
                        {/*Decoration Rounded Triangle-5 84x90 md:61x65.5 34.62x38.64 h-25.68 w-24.69 h-13.48 w-13.19 lg:47.6x53.14 h-18.43 w-18.2*/}
                        <div className="hidden absolute md:inline-block md:right-[177px] md:top-[826px] lg:top-[1067.5px] lg:right-[215px]">
                            <img
                                className="md:w-[61px] md:h-[65.5px] lg:w-[84px] lg:h-[90px]"
                                src="assets/rounded_triangle_5.svg"
                                alt="decoration_rounded_triangle_5"
                            />
                        </div>
                        {/*Decoration Rounded Triangle-6 prototype:107x230 resize:77.8x167.3 md:48.69x138.48 lg:68.33x190.42 md:w-14.55 h-14.5 lg:w-19.33 h-19.79*/}
                        <div className="hidden absolute md:inline-block md:bottom-[-294px] md:right-[66px] lg:top-[1122.6px] lg:right-[63px]">
                            <img
                                className="w-[77.8px] h-[167.3px] lg:w-[107px] lg:h-[230px]"
                                src="assets/rounded_triangle_6.svg"
                                alt="decoration_rounded_triangle_6"
                            />
                        </div>
                        {/*Decoration Rounded Triangle-7 prototype:68*71 resize:49.5x51.6 md:22.58x25.21 w-13.5 h-13 lg:31x34.66 w-18.5 h-18*/}
                        <div className="hidden absolute md:inline-block md:bottom-[-45px] md:right-0 lg:bottom-[20px] lg:right-[-46.5px]">
                            <img className="" src="assets/rounded_triangle_7.svg" alt="decoration_rounded_triangle_7" />
                        </div>
                        {/*About Us Title*/}
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col items-start justify-center gap-[4px] md:gap-[8px]">
                                <div className="display-1 text-grayscale-gainsboro font-[250]">關於百越</div>
                                <div className="en-h2 text-primary">ABOUT US</div>
                            </div>
                            <div className="hidden lg:flex gap-[24px] nav-title text-grayscale-light justify-center items-center cursor-pointer">
                                <div className="py-[8px] border-b-[1px] hover:text-grayscale-light">首頁</div>
                                <span className="w-[0px] h-[16px] border-[1px] border-solid border-grayscale-dark"></span>
                                <div className="py-[8px] opacity-50 hover:text-grayscale-light hover:opacity-100">
                                    關於百越
                                </div>
                            </div>
                        </div>
                        {/*About Us Body*/}
                        <div className="flex flex-col gap-[38.13px] md:gap-[72.6px] md:items-end lg:gap-[65.26px]">
                            <div className="relative flex flex-col items-start justify-center text-white md:w-full md:justify-start md:pl-[38px] lg:pl-[102px]">
                                {/* border-arrow-2 */}
                                <div className="hidden rotate-90 absolute w-[112px] md:block md:left-0 lg:left-[60px] top-[50%] translate-x-[-50%]">
                                    <div className="absolute w-full bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                                </div>
                                <div className="flex justify-center items-center gap-[5px]">
                                    {/*About Us Subtitle*/}
                                    <div className="en-h2 flex justify-center items-center h-[27.68px] px-[5.2px] border-[1px] border-solid border-primary rounded-[39.72px] md:h-[44.83px] md:w-[80.61px] lg:w-[101.52px] lg:h-[54.38px]">
                                        BIM
                                    </div>
                                    <h2 className="">的本質</h2>
                                </div>
                                <h2>是融入工程 提升工程</h2>
                            </div>
                            {/*About Us Content*/}
                            <div className="body-2 text-grayscale-light z-10 md:hidden">
                                百越工程資訊有限公司成立至今保持一貫的態度，堅持為工程有所幫助，才有我們的存在!
                                不斷在設計階段密切討論、施工階段多樣化管線排佈檢討。嚴謹的BIM導入工程標準程序、嚴格的模型把關與工程現場密切配合，目的是為了讓BIM紮實融入於工程。
                            </div>
                            {/*About Us Mobile/Tablet Content*/}
                            <div className="hidden body-2 text-grayscale-light z-10 md:block md:w-[510px] lg:w-[588px]">
                                百越工程資訊有限公司成立至今保持一貫的態度，
                                <br />
                                堅持為工程有所幫助，才有我們的存在!
                                <br />
                                不斷在設計階段密切討論、施工階段多樣化管線排佈檢討。
                                <br />
                                嚴謹的BIM導入工程標準程序、嚴格的模型把關與工程現場密切配合，
                                <br />
                                目的是為了讓BIM紮實融入於工程。
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-[104px] md:h-[244px] lg:h-[306.48px]">
                        {/*Liner-Gradient for bg Image*/}
                        <div className="hidden absolute md:block md:top-[162px] lg:top-[170px] w-full h-[235px] about-bg-gradient"></div>
                    </div>
                    <Carousel ref={carouselScrollRef} />
                    <Services ref={serviceScrollRef} />
                </section>
            </section>
            <FooterSimple />
        </>
    );
}
