import { forwardRef } from "react";
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
export const Services = forwardRef<HTMLDivElement, {}>(({}, ref) => {
    return (
        <section className="relative pb-[80px] md:pb-[129px]">
            {/*Decoration Square-Service*/}
            <div className="absolute hidden lg:inline-block bottom-[16px] left-[0px] w-[364px] h-[180px] rounded-[16px] bg-grayscale-iron square-shadow-contact"></div>
            {/* Decoration Triangle-Service */}
            <div className="hidden absolute lg:inline-block z-10 bottom-[161px] left-[155px]">
                <div className="triangle-dec-bltr w-[84.5px] h-[84.5px] bg-primary"></div>
            </div>
            {/*Decoration Oval*/}
            <div className="hidden absolute top-[-109px] right-[57.5px] bg-grayscale-iron lg:inline-block w-[127px] h-[44.66px] rounded-[16px] square-shadow-contact"></div>
            {/*triangle decoration original:95.62x95.62(135x134) resize:74.1x74.1*/}
            <div className="hidden lg:block absolute rotate-90 top-[-186px] right-[104px]">
                <img className="w-[104.5px] h-[104px]" src="assets/triangle_3.png" alt="triangle_3_pic" />
            </div>{" "}
            {/*Service Title*/}
            <div className="flex flex-col mx-[24px] gap-[64px] md:mx-[40px] lg:flex-row lg:items-start lg:justify-between lg:mx-[120px] lg:h-[720px]">
                <div className="relative flex flex-col items-start justify-center w-fit gap-[8px]">
                    {/* border-arrow-2 */}
                    <div className="absolute w-full md:left-0 lg:left-[0px] top-[-21.5px]">
                        <div className="absolute w-full bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                    </div>
                    <h1 className="text-grayscale-gainsboro font-[250]">服務項目</h1>
                    <div className="en-h3 text-primary">OUR SERVICES</div>
                </div>
                {/* Card-Services */}
                <div ref={ref} className="lg:overflow-y-scroll service-custom-scrollbar lg:h-full">
                    <div className="flex flex-col gap-[24px] md:flex-row md:flex-wrap md:max-w-[793px]">
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
            </div>
        </section>
    );
});
