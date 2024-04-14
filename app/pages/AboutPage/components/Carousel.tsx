import { forwardRef } from "react";

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
export const Carousel = forwardRef<HTMLDivElement, {}>(({}, ref) => {
    return (
        <section className="relative flex h-[500px] ml-[24px] mb-[80px] md:ml-[40px] md:mb-[120px] lg:ml-[120px] lg:mb-[260px]">
            {/* About Carousel */}
            {/* todo: carousel animation and bg proper align */}
            <div ref={ref} className="relative w-full overflow-x-scroll custom-scrollbar">
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
});
