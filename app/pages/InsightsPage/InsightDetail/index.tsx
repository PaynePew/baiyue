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
            <div className="container">
                <div className="flex flex-col pt-[48px] pb-[80px] mx-[24px] md:mx-[40px] md:pt-[40px] md:pb-[120px] lg:pt-[80px] lg:pb-[218px] lg:mx-[120px]">
                    <div className="flex flex-col items-start justify-center mb-[40px] gap-[2px] md:gap-[4px] lg:gap-[8px] md:mb-[64px]">
                        <h3 className="text-grayscale-gainsboro">其他文章</h3>
                        <div className="en-h4 lg:text-[24px] text-primary uppercase">others</div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[24px] md:flex-row md:flex-wrap md:items-center lg:gap-[24px]">
                        {fakeData.map(({ alt, pic, time, title, catgory }, idx) => {
                            return (
                                <Link key={idx} to="/insights/1">
                                    <div className="flex card-shadow rounded-[12px] w-[312px] overflow-clip md:rounded-[16px] md:w-[688px] lg:w-[588px]">
                                        <div className="shrink-0 w-[90px] md:w-[180px] lg:w-[180px] ">
                                            <img
                                                className="w-full h-full object-cover"
                                                src={`/assets/${pic}`}
                                                alt={alt}
                                            />
                                        </div>
                                        <div className="flex justify-between w-full md:px-[32px] md:pt-[24px] md:pb-[27px] lg:py-[21px] lg:px-[32px]">
                                            <div className="flex flex-col gap-[4px] py-[24px] px-[20px] md:p-[0] lg:gap-[4px]">
                                                <div className="en-body-1 text-grayscale-light">{time}</div>
                                                <h6 className="text-grayscale-gainsboro min-h-[56px]">{title}</h6>
                                                <div className="body-3 text-grayscale-light/50">{catgory}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <img
                                                    className="hidden w-[38px] md:h-[11px] md:block"
                                                    src="/assets/arrow_r.png"
                                                    alt="arrorw_r_pic"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
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
                                    <div className="flex justify-center items-center w-[39px] h-[39px] rounded-[16px] bg-grayscale-dim buttom-shadow-2 hover:bg-grayscale-gainsboro sns-effect">
                                        <svg
                                            width="11"
                                            height="17"
                                            viewBox="0 0 11 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.1836 1.07779C10.1836 0.959952 10.1357 0.846943 10.0505 0.763621C9.96522 0.680299 9.8496 0.633489 9.72905 0.633489H7.45632C6.31189 0.577766 5.19141 0.967061 4.3397 1.71632C3.488 2.46557 2.97431 3.51387 2.91087 4.63218V7.03139H0.638139C0.517586 7.03139 0.401971 7.0782 0.316727 7.16152C0.231483 7.24484 0.183594 7.35785 0.183594 7.47569V9.78604C0.183594 9.90387 0.231483 10.0169 0.316727 10.1002C0.401971 10.1835 0.517586 10.2303 0.638139 10.2303H2.91087V16.1839C2.91087 16.3018 2.95876 16.4148 3.044 16.4981C3.12924 16.5814 3.24486 16.6282 3.36541 16.6282H6.09268C6.21324 16.6282 6.32885 16.5814 6.4141 16.4981C6.49934 16.4148 6.54723 16.3018 6.54723 16.1839V10.2303H8.92905C9.03013 10.2318 9.12881 10.2002 9.20949 10.1407C9.29016 10.0811 9.34823 9.99697 9.3745 9.90156L10.029 7.5912C10.0471 7.52556 10.0496 7.45673 10.0362 7.39002C10.0227 7.32331 9.99385 7.26049 9.9517 7.20642C9.90954 7.15234 9.85526 7.10844 9.79302 7.07809C9.73077 7.04775 9.66224 7.03177 9.59269 7.03139H6.54723V4.63218C6.56984 4.41223 6.67552 4.20841 6.84362 4.06053C7.01171 3.91266 7.23017 3.83133 7.45632 3.83244H9.72905C9.8496 3.83244 9.96522 3.78563 10.0505 3.70231C10.1357 3.61898 10.1836 3.50597 10.1836 3.38814V1.07779Z"
                                                fill="#E2E2E2"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex justify-center items-center w-[39px] h-[39px] rounded-[16px] bg-grayscale-dim buttom-shadow-2 hover:bg-grayscale-gainsboro sns-effect">
                                        <svg
                                            width="14"
                                            height="15"
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.23219 7.50006C9.23219 7.94309 9.10081 8.37617 8.85468 8.74454C8.60855 9.1129 8.2587 9.40001 7.8494 9.56955C7.44009 9.73909 6.9897 9.78345 6.55519 9.69702C6.12067 9.61059 5.72154 9.39725 5.40827 9.08398C5.095 8.77071 4.88166 8.37158 4.79523 7.93706C4.7088 7.50255 4.75316 7.05216 4.9227 6.64285C5.09224 6.23354 5.37934 5.8837 5.74771 5.63757C6.11608 5.39144 6.54916 5.26006 6.99219 5.26006C7.58606 5.26074 8.15542 5.49696 8.57536 5.91689C8.99529 6.33683 9.23151 6.90618 9.23219 7.50006ZM13.9922 4.42006V10.5801C13.991 11.6193 13.5776 12.6157 12.8427 13.3506C12.1079 14.0855 11.1115 14.4989 10.0722 14.5001H3.91219C2.8729 14.4989 1.87652 14.0855 1.14163 13.3506C0.406741 12.6157 -0.00663547 11.6193 -0.0078125 10.5801V4.42006C-0.00663547 3.38077 0.406741 2.38439 1.14163 1.6495C1.87652 0.914615 2.8729 0.501238 3.91219 0.500061H10.0722C11.1115 0.501238 12.1079 0.914615 12.8427 1.6495C13.5776 2.38439 13.991 3.38077 13.9922 4.42006ZM10.3522 7.50006C10.3522 6.83552 10.1551 6.18589 9.78592 5.63335C9.41672 5.0808 8.89196 4.65014 8.278 4.39583C7.66404 4.14152 6.98846 4.07498 6.33668 4.20462C5.68491 4.33427 5.08621 4.65428 4.61631 5.12418C4.1464 5.59409 3.8264 6.19278 3.69675 6.84456C3.5671 7.49633 3.63364 8.17192 3.88795 8.78588C4.14226 9.39984 4.57292 9.9246 5.12547 10.2938C5.67802 10.663 6.32764 10.8601 6.99219 10.8601C7.88301 10.8591 8.73705 10.5047 9.36695 9.87483C9.99686 9.24492 10.3512 8.39088 10.3522 7.50006ZM11.4722 3.86006C11.4722 3.69392 11.4229 3.53152 11.3306 3.39338C11.2383 3.25524 11.1071 3.14758 10.9536 3.084C10.8002 3.02042 10.6313 3.00379 10.4683 3.0362C10.3054 3.06861 10.1557 3.14862 10.0382 3.26609C9.92074 3.38357 9.84074 3.53324 9.80833 3.69618C9.77592 3.85913 9.79255 4.02803 9.85613 4.18152C9.91971 4.33501 10.0274 4.4662 10.1655 4.5585C10.3036 4.6508 10.4661 4.70006 10.6322 4.70006C10.855 4.70006 11.0686 4.61156 11.2262 4.45403C11.3837 4.2965 11.4722 4.08284 11.4722 3.86006Z"
                                                fill="#E2E2E2"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex justify-center items-center w-[39px] h-[39px] rounded-[16px] bg-grayscale-dim buttom-shadow-2 hover:bg-grayscale-gainsboro sns-effect">
                                        <svg
                                            width="18"
                                            height="15"
                                            viewBox="0 0 18 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17.5053 2.29345C16.8767 2.56466 16.2039 2.75125 15.4947 2.83587C16.2183 2.40856 16.7715 1.73263 17.0353 0.927413C16.3566 1.31636 15.6058 1.59808 14.8074 1.75734C14.1708 1.08667 13.2609 0.664612 12.251 0.664612C10.3152 0.664612 8.74628 2.2083 8.74628 4.11098C8.74628 4.38482 8.77992 4.64762 8.83813 4.89676C5.92612 4.76273 3.34467 3.38565 1.61819 1.30532C1.31486 1.812 1.14238 2.40067 1.14238 3.04138C1.14238 4.24028 1.76237 5.29148 2.69958 5.90959C2.12657 5.8933 1.58721 5.73719 1.11461 5.48017V5.5217C1.11461 7.19363 2.32149 8.58753 3.92355 8.90499C3.63144 8.98121 3.31957 9.02536 3.0029 9.02536C2.77808 9.02536 2.5634 9.00381 2.34926 8.96491C2.79997 10.3336 4.09016 11.3301 5.62814 11.3601C4.43247 12.2825 2.91692 12.8323 1.28389 12.8323C1.00567 12.8323 0.727977 12.8191 0.449219 12.786C2.00695 13.7637 3.84558 14.3355 5.8316 14.3355C12.2756 14.3355 15.7969 9.08212 15.7969 4.53251C15.7969 4.38745 15.7969 4.23975 15.7857 4.09153C16.473 3.60956 17.0679 2.99881 17.5378 2.30659L17.5053 2.29345Z"
                                                fill="#E2E2E2"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <OthersInsights />
            <FooterSimple />
        </section>
    );
}
