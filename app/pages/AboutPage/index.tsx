import { FooterSimple } from "~/components/Footer";
import styles from "./styles.css";
import landingPageStyles from "~/pages/LandingPage/styles.css";
export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "stylesheet", href: landingPageStyles },
    ];
}

const fakeData = [
    {
        pic: "assets/service_1.png",
        title: "建築、機電建模服務",
        desc: "包含建築、結構、機電(給排水、消防、空調...等)之BIM模型建置",
        alt: "service_1_pic",
    },
    {
        pic: "assets/service_2.png",
        title: "施工圖",
        desc: "將BIM模型產出各系統之2D圖面，提供現場施作",
        alt: "service_2_pic",
    },
    {
        pic: "assets/service_3.png",
        title: "渲染、動畫製作",
        desc: "模擬真實場景，將BIM模型加入細節(人物、光影、材質...等)，產出各視角透視圖及導覽影片",
        alt: "service_3_pic",
    },
    {
        pic: "assets/service_4.png",
        title: "算量服務",
        desc: "透過BIM模型，計算材料(混凝土、磁磚...等)、設備(門窗、機電設備...等)之尺寸數量等相關資訊及數據",
        alt: "service_4_pic",
    },
    {
        pic: "assets/service_5.png",
        title: "工程整合檢討",
        desc: "將建築結構及機電系統圖面套繪至BIM模型，與相關單位討論實際碰撞，並記錄檢討過程",
        alt: "service_5_pic",
    },
    {
        pic: "assets/service_6.png",
        title: "BIM企業、導用",
        desc: "將BIM模型所產之資訊，實際應用於相關單位",
        alt: "service_6_pic",
    },
    {
        pic: "assets/service_7.png",
        title: "BIM顧問服務",
        desc: "針對BIM相關問題，協助了解並進行釋疑",
        alt: "service_7_pic",
    },
    {
        pic: "assets/service_8.png",
        title: "BIM元件建置服務",
        desc: "建置BIM模型內元件，及其BIM相關資訊",
        alt: "service_8_pic",
    },
    {
        pic: "assets/service_9.png",
        title: "BIM教育訓練",
        desc: "包含建築、結構、機電(給排水、消防、空調...等)之BIM模型建置",
        alt: "service_9_pic",
    },
    {
        pic: "assets/service_10.png",
        title: "GREEN BIM",
        desc: "將BIM模型產出各系統之2D圖面，提供現場施作",
        alt: "service_10_pic",
    },
];

const fakeCarouselData = [
    {
        desc: "百越操作多項工程BIM服務，明瞭機關與營造BIM互動模式，也明白如何從中引導BIM實質效益及交付機關所要成果，以穩定高品質服務、獲得團隊成就感為最高宗旨，請貴司放心交給百越。",
        title: "為您所思！",
        subTitle: "多項工程BIM經驗",
        pic: "about_symbol_1",
        index: "1",
        w: "282px",
        h: "213px",
    },
    {
        desc: "針對工程BIM施工規範所要求內容重點施作，為您注意每個細節，不額外增加規範內容未提及項目，有效控制預算及滿足業主需求；不花言巧語增加工項，節省不必要花費，專心施作重點項目，提供最高品質BIM服務！",
        title: "為您所想！",
        subTitle: "最節省預算客製化服務",
        pic: "about_symbol_2",
        index: "2",
        w: "319px",
        h: "319px",
    },
    {
        desc: "定期召開BIM會議，提供工程進度相關BIM模型及報告，運用BIM可視性協調與專案有關各單位施工模擬及介面整合檢討，以利工程降低風險，穩定工進，將BIM與專案現場徹底結合，達到最高效益。",
        title: "為您所答！",
        subTitle: "高效率的互動及溝通",
        pic: "about_symbol_3",
        index: "3",
        w: "203px",
        h: "363px",
    },
    {
        desc: "百越BIM工程團隊集結建築、機電專業背景人員，豐富的BIM實務操作經驗，保障專案各階段建模要求、建模品質、施工衝突檢討、成果報告書、教育訓練以及施工模擬動畫，維持BIM項目最佳的運作。",
        title: "為您所解！",
        subTitle: "最專業BIM工程團隊",
        pic: "about_symbol_4",
        index: "4",
        w: "240px",
        h: "280px",
    },
];

function Carousel() {
    return (
        <section className="relative flex h-[500px] mx-[24px] mb-[80px] md:mx-[40px] md:mb-[120px] lg:mx-[120px] lg:mb-[260px] ">
            {/* About Carousel */}
            {/* todo: carousel animation and bg proper align */}
            <div className="relative w-screen overflow-x-scroll">
                <div className="absolute flex gap-[16px] md:gap-[40px] ">
                    {fakeCarouselData.map(({ desc, title, subTitle, pic, index, w, h }) => {
                        return (
                            <div
                                key={index}
                                className="relative dec-shadow-1 w-[312px] h-[439px] pt-[48px] pb-[65px] px-[40px] rounded-[16px] overflow-clip md:w-[584px] md:h-[390px] md:pb-[79px] lg:h-[439px]"
                            >
                                <div className="absolute z-10 top-[76.33px] right-[-78.33px] md:right-[30px]">
                                    <img className={`w-[${w}] h-[${h}]`} src={`assets/${pic}.png`} alt={pic} />
                                </div>
                                <div className="relative flex z-20 flex-col gap-[8px] mb-[40px] md:mb-[48px] md:gap-[24px] lg:gap-[32px] lg:mb-[67px]">
                                    <div className="en-body-1 text-primary">/{index}</div>
                                    <div className="text-grayscale-light">
                                        <h4>{title}</h4>
                                        <h4 className="font-[400]">{subTitle}</h4>
                                    </div>
                                </div>
                                <div className="relative body-2 z-20 text-grayscale-light">{desc}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function Services() {
    return (
        <section className="pb-[80px] md:pb-[129px]">
            <div className="relative flex flex-col mx-[24px] gap-[64px] md:mx-[40px] lg:flex-row lg:gap-[167.5px] lg:items-start lg:justify-center lg:mx-[120px]">
                <div className="flex flex-col items-start justify-center gap-[8px] lg:sticky top-[25%]">
                    <h1 className="text-grayscale-gainsboro">服務項目</h1>
                    <div className="en-h3 text-primary">OUR SERVICES</div>
                </div>
                {/* Card-Services */}
                <div className="flex flex-col gap-[24px] md:flex-row md:flex-wrap md:max-w-[792px]">
                    {fakeData.map(({ pic, title, desc, alt }) => {
                        return (
                            <div
                                key={alt}
                                className="relative flex card-shadow min-h-[212px] w-[312px] rounded-[12px] overflow-clip md:flex-col md:even:top-[40px] md:rounded-[16px] md:w-[332px] lg:w-[384px]"
                            >
                                <div className="basis-[50%] md:basis-auto md:h-[250px] lg:h-[290px]">
                                    <img className="h-full max-w-full object-cover md:w-full" src={pic} alt={alt} />
                                </div>
                                <div className="basis-[50%] md:basis-auto">
                                    <div className="flex flex-col p-[20px] gap-[12px] md:p-[24px] md:gap-[16px]">
                                        <h5 className="text-white">{title}</h5>
                                        <div className="body-1 text-grayscale-light">{desc}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export function AboutPage() {
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
                                <div className="display-1 text-grayscale-gainsboro">關於百越</div>
                                <div className="en-h2 text-primary">ABOUT US</div>
                            </div>
                            <div className="hidden lg:flex gap-[24px] nav-title text-grayscale-light justify-center items-center cursor-pointer">
                                <div className="py-[8px] border-b-[1px] hover:text-grayscale-light">首頁</div>
                                <span className="w-[0px] h-[16px] border-[1px] border-solid border-grayscale-dark "></span>
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
                    <Carousel />
                    <Services />
                </section>
            </section>
            <FooterSimple />
        </>
    );
}
