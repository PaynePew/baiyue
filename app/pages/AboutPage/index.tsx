import { FooterSimple } from "~/components/Footer";
import styles from "./styles.css";
export function links() {
    return [{ rel: "stylesheet", href: styles }];
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

function Slider() {
    return (
        <section className="flex mx-[24px] mb-[80px]">
            <div className="relative dec-shadow-1 w-[312px] h-[439px] px-[40px] rounded-[16px] overflow-clip">
                <div className="absolute z-10 top-[76.33px] right-[-78.33px]">
                    <img className="w-[282px] h-[213px]" src="assets/about_symbol_1.png" alt="about_symbol_1" />
                </div>
                <div className="relative flex z-20 flex-col gap-[8px] pt-[48.34px] mb-[40px]">
                    <div className="en-body-1 text-primary">/1</div>
                    <div className="text-grayscale-light">
                        <h4>為您所思!</h4>
                        <h4 className="font-[400]">多項工程BIM經驗</h4>
                    </div>
                </div>
                <div className="relative body-2 z-20 text-grayscale-light">
                    百越操作多項工程BIM服務，明瞭機關與營造BIM互動模式，也明白如何從中引導BIM實質效益及交付機關所要成果，以穩定高品質服務、獲得團隊成就感為最高宗旨，請貴司放心交給百越。
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
            <section className="w-full bg-grayscale-iron">
                <div className="flex flex-col pt-[141px] mx-[24px] mb-[104px] gap-[47.87px] md:mx-[40px] md:pt-[206px] md:mb-[244px] md:gap-[92.51px] lg:pt-[336px] lg:mx-[120px] lg:mb-[306.48px] lg:gap-[162.32px]">
                    <div className="flex flex-col items-start justify-center gap-[4px] md:gap-[8px]">
                        <div className="display-1 text-grayscale-gainsboro">關於百越</div>
                        <div className="en-h2 text-primary">ABOUT US</div>
                    </div>
                    <div className="flex flex-col gap-[38.13px] md:gap-[72.6px] md:items-end lg:gap-[65.26px]">
                        <div className="relative flex flex-col items-start justify-center text-white md:w-full md:justify-start md:left-[38px]">
                            <div className="flex justify-center items-center gap-[5px]">
                                {/* <div className="flex w-[49.32px] h-[27.68px] border-[1px] border-solid border-primary rounded-[39.72px] md:w-[120px] md:h-[54.4px]"> */}
                                <div className="en-h2 flex justify-center items-center h-[27.68px] px-[5.2px] border-[1px] border-solid border-primary rounded-[39.72px] md:h-[44.83px] md:w-[80.61px] lg:w-[101.52px] lg:h-[54.38px]">
                                    BIM
                                </div>
                                {/* </div> */}
                                {/* <div className="before-dec left-[-5.2px] top-[5.33px]"></div> */}
                                {/* <div className="en-h2">BIM</div> */}
                                <h2 className="">的本質</h2>
                            </div>
                            <h2>是融入工程 提升工程</h2>
                        </div>
                        <div className="body-2 text-grayscale-light md:hidden">
                            百越工程資訊有限公司成立至今保持一貫的態度，堅持為工程有所幫助，才有我們的存在!
                            不斷在設計階段密切討論、施工階段多樣化管線排佈檢討。嚴謹的BIM導入工程標準程序、嚴格的模型把關與工程現場密切配合，目的是為了讓BIM紮實融入於工程。
                        </div>
                        <div className="hidden body-2 text-grayscale-light md:block md:w-[510px] lg:w-[588px]">
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
                <Slider />
                <Services />
            </section>
            <FooterSimple />
        </>
    );
}
