import { Link } from "@remix-run/react";
import styles from "./styles.css";
import { FooterSimple } from "~/components/Footer";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

const fakeData = [
    {
        alt: "insight_pic2",
        pic: "insight_2.png",
        time: "2022-10-03",
        title: "有了BIM，提早發現問題",
        catgory: "專案近期檢討成果分享",
    },
    {
        alt: "insight_pic3",
        pic: "insight_3.png",
        time: "2022-10-03",
        title: "2D圖面可能不會檢討到的事",
        catgory: "專案近期檢討成果分享",
    },
];

function OthersInsights() {
    return (
        <section className="w-full bg-grayscale-dim">
            <div className="flex flex-col pt-[48px] pb-[80px] mx-[24px] md:mx-[40px] md:pt-[40px] md:pb-[120px] lg:pt-[80px] lg:pb-[218px] lg:mx-[120px]">
                <div className="flex flex-col items-start justify-cente mb-[40px] gap-[2px] md:gap-[4px] lg:gap-[8px] md:mb-[64px]">
                    <h3 className="text-grayscale-gainsboro">其他文章</h3>
                    <div className="en-h4 lg:text-[24px] text-primary uppercase">others</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[24px] md:flex-row md:flex-wrap md:items-center lg:gap-[24px]">
                    {fakeData.map(({ alt, pic, time, title, catgory }, idx) => {
                        return (
                            <div
                                className="flex card-shadow rounded-[12px] w-[312px] overflow-clip md:rounded-[16px] md:w-[688px] lg:w-[588px]"
                                key={idx}
                            >
                                <div className="shrink-0 w-[90px] md:w-[180px] lg:w-[180px] ">
                                    <img className="w-full h-full object-cover" src={`/assets/${pic}`} alt={alt} />
                                </div>
                                <div className="flex justify-between w-full md:px-[32px] md:pt-[24px] md:pb-[27px] lg:py-[21px] lg:px-[32px]">
                                    <div className="flex flex-col gap-[4px] py-[24px] px-[20px] md:p-[0] lg:gap-[4px]">
                                        <div className="en-body-1 text-grayscale-light">{time}</div>
                                        <h6 className="text-grayscale-gainsboro min-h-[56px]">{title}</h6>
                                        <div className="body-3 text-grayscale-light/50">{catgory}</div>
                                    </div>
                                    <div className="flex items-center">
                                        <Link to="/insights/1">
                                            <img
                                                className="hidden w-[38px] md:h-[11px] md:block"
                                                src="/assets/arrow_r.png"
                                                alt="arrorw_r_pic"
                                            />
                                        </Link>
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

export function InsightDetail({ insightId }) {
    return (
        <section className="w-full bg-grayscale-iron">
            <section className="container">
                {/* Breadcrumb for Desktop */}
                <div className="hidden lg:flex lg:pt-[344px] lg:mx-[120px]">
                    <div className="lg:flex gap-[24px] nav-title text-grayscale-light justify-start items-center cursor-pointer">
                        <div className="py-[8px] border-b-[1px] hover:text-grayscale-light">首頁</div>
                        <span className="w-[0px] h-[16px] border-[1px] border-solid border-grayscale-dark "></span>
                        <div className="py-[8px] border-b-[1px] hover:text-grayscale-light hover:opacity-100">
                            百越觀點
                        </div>
                        <span className="w-[0px] h-[16px] border-[1px] border-solid border-grayscale-dark "></span>
                    </div>
                </div>
                <div className="flex flex-col pt-[131px] mx-[24px] mb-[64px] md:mx-[40px] md:pt-[200px] md:gap-[64px] md:mb-[77px] lg:pt-[80px] lg:mx-[324px] lg:pb-[120px] lg:items-center">
                    <div className="w-full flex flex-col gap-[32px] md:gap-[63px] md:items-center lg:w-[792px]">
                        <div className="flex flex-col gap-[12px] items-center lg:gap-[16px]">
                            <div className="en-body-1 text-grayscale-light">2022-10-03</div>
                            <h2 className="text-grayscale-gainsboro">BIM技術，離您生活如此貼近</h2>
                            <div className="body-3 text-grayscale-light/50">專案近期檢討成果分享</div>
                        </div>
                        <div className="w-full h-[201.67px] rounded-[12px] overflow-clip md:w-[510px] md:h-[329.65px] lg:w-[792px] lg:h-[512px]">
                            <img
                                className="object-cover w-full h-full"
                                src="/assets/insight_1.png"
                                alt="insight_1_pic"
                            />
                        </div>
                        <div className="flex flex-col gap-[32px] ">
                            <div className="body-2 text-grayscale-light">
                                在原設計圖說上看似符合法規的停車格設計，經3D建模各材質、實際尺寸後探討出設計所忽略事項:
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <div className="flex items-start gap-[16px]">
                                    <div className="en-body-1 text-primary pt-[5px]">/1</div>
                                    <div className="body-2 text-white">
                                        CAD圖資為線性表現，忽略了現場停車格線10cm厚度。
                                    </div>
                                </div>
                                <div className="flex items-start gap-[16px]">
                                    <div className="en-body-1 text-primary pt-[5px]">/2</div>
                                    <div className="body-2 text-white">CAD圖資為結構完成面，忽略了粉刷層厚度。</div>
                                </div>
                            </div>
                            <div className="body-2 text-grayscale-light">
                                由於停車格查驗方式為線心至線心距離，在後續現場實際加入柱粉刷層厚度(3cm)及停車格線(10cm)後，導致停車格無法符合250x250法規標準，停車格線會截斷在柱位上。
                                <br />
                                將會導致現場竣工查驗出現問題。各位也不妨試試丈量家中停車格是否符合法規呢?
                            </div>
                            {/* todo: border line and hover color */}
                            <div className="w-full flex justify-start items-center gap-[16px] py-[31.5px]">
                                <div className="en-body-1 uppercase text-grayscale-silver">share</div>
                                <div className="flex gap-[10px]">
                                    <div className="flex justify-center items-center w-[39px] h-[39px] rounded-[16px] bg-grayscale-dim buttom-shadow-2 hover:bg-grayscale-gainsboro">
                                        <img className="" src="/assets/social_1.png" alt="fb-icon" />
                                    </div>
                                    <div className="flex justify-center items-center w-[39px] h-[39px] rounded-[16px] bg-grayscale-dim buttom-shadow-2 hover:bg-grayscale-gainsboro">
                                        <img src="/assets/social_2.png" alt="ig-icon" />
                                    </div>
                                    <div className="flex justify-center items-center w-[39px] h-[39px] rounded-[16px] bg-grayscale-dim buttom-shadow-2 hover:bg-grayscale-gainsboro">
                                        <img src="/assets/social_3.png" alt="twitter-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <OthersInsights />
            </section>
            <FooterSimple />
        </section>
    );
}
