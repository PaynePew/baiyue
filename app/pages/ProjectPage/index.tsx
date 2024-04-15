import { FooterSimple } from "~/components/Footer";
import styles from "./styles.css";
import landingPageStyles from "~/pages/LandingPage/styles.css";

export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "stylesheet", href: landingPageStyles },
    ];
}

const projectTab = [
    { title: "全部" },
    { title: "住宅" },
    { title: "辦公" },
    { title: "教育" },
    { title: "工業" },
    { title: "停車場" },
    { title: "營區" },
    { title: "其他" },
];

const fakeData = [
    { alt: "project_pic1", pic: "projectlist_1.png", desc: "臺北市殯葬管理處第二殯儀館二期整建工程" },
    { alt: "project_pic2", pic: "projectlist_2.png", desc: "大潭電廠建燃氣複循環機組發電計畫" },
    { alt: "project_pic3", pic: "projectlist_3.png", desc: "臺北市萬華區莒光段公共住宅新建工程" },
    { alt: "project_pic4", pic: "projectlist_4.png", desc: "臺北市立明倫高級中學多功能大樓新建工程" },
    { alt: "project_pic5", pic: "projectlist_5.png", desc: "桃園流行音樂露天劇場新建工程" },
    { alt: "project_pic6", pic: "projectlist_6.png", desc: "頎邦科技新竹光復廠辦工程" },
    { alt: "project_pic7", pic: "projectlist_7.png", desc: "台北市信義區松信社會住宅新建工程" },
    { alt: "project_pic8", pic: "projectlist_8.png", desc: "雙連安養中心四期新建工程" },
    { alt: "project_pic9", pic: "projectlist_9.png", desc: "臺北市士林區百齡水岸社會住宅新建工程" },
    { alt: "project_pic10", pic: "projectlist_10.png", desc: "板橋五權公園停車場統包工程" },
    { alt: "project_pic11", pic: "projectlist_11.png", desc: "新北市樹林區長壽公園停車場新建統包工程" },
    { alt: "project_pic12", pic: "projectlist_12.png", desc: "明台化工湖口廠新建工程" },
    { alt: "project_pic13", pic: "projectlist_13.png", desc: "中壢區仁和段公共化幼兒園新建工程" },
    { alt: "project_pic14", pic: "projectlist_14.png", desc: "頎邦科技新竹光復廠辦工程" },
];

function ProjectsList() {
    return (
        <div className="flex flex-wrap justify-center gap-[24px] md:flex-row md:flex-wrap md:justify-center md:items-center mb-[32px] md:mb-[64px]">
            {fakeData.map(({ alt, pic, desc }, idx) => {
                if (idx === 0) {
                    return (
                        <div
                            className="relative card-shadow rounded-[12px] flex justify-center overflow-clip w-[312px] md:flex-col md:w-[332px] lg:flex-row lg:w-[792px] lg:h-[377px]"
                            key={idx}
                        >
                            <div className="shrink-0 w-[116px] bg-white md:w-full md:h-[157px] lg:h-full lg:w-[512px]">
                                <img className="object-cover w-full h-full" src={`assets/${pic}`} alt={alt} />
                            </div>
                            <div className="flex flex-col gap-[16px] p-[24px] lg:p-[40px] lg:h-full lg:justify-between">
                                <h6 className="text-grayscale-gainsboro lg:hidden">{desc}</h6>
                                <h5 className="hidden text-grayscale-gainsboro lg:block">{desc}</h5>
                                <div className="flex justify-between items-center">
                                    <button className="body-3 w-fit py-[8px] px-[16px] bg-grayscale-dark text-grayscale-light rounded-[128px]">
                                        其他
                                    </button>
                                    <img
                                        className="hidden cursor-pointer w-[38px] md:h-[11px] md:block"
                                        src="assets/arrow_r.png"
                                        alt="arrorw_r_pic"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                }
                return (
                    <div
                        className="relative card-shadow rounded-[12px] flex justify-center overflow-clip w-[312px] md:flex-col md:w-[332px] lg:w-[384px]"
                        key={idx}
                    >
                        <div className="shrink-0 w-[116px] bg-white md:w-full md:h-[157px] lg:h-[220px]">
                            <img className="object-cover w-full h-full" src={`assets/${pic}`} alt={alt} />
                        </div>
                        <div className="flex flex-col gap-[16px] p-[24px]">
                            <h6 className="text-grayscale-gainsboro md:min-h-[56px]">{desc}</h6>
                            <div className="flex justify-between items-center">
                                <button className="body-3 w-fit py-[8px] px-[16px] bg-grayscale-dark text-grayscale-light rounded-[128px]">
                                    其他
                                </button>
                                <img
                                    className="hidden cursor-pointer w-[38px] md:h-[11px] md:block"
                                    src="assets/arrow_r.png"
                                    alt="arrorw_r_pic"
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export function ProjectPage() {
    return (
        <section className="w-full bg-grayscale-iron">
            <section className="container">
                <div className="flex flex-col pt-[141px] mx-[24px] mb-[104px] gap-[32px] md:mx-[40px] md:pt-[206px] md:mb-[244px] md:gap-[48px] lg:pt-[336px] lg:mx-[120px] lg:mb-[306.48px] lg:gap-[64px]">
                    <div className="flex justify-between items-end">
                        <div className="flex flex-col items-start justify-center gap-[4px] md:gap-[8px]">
                            <div className="display-1 text-grayscale-gainsboro">工程實績</div>
                            <div className="en-h2 text-primary uppercase">PROJECT</div>
                        </div>
                        <div className="hidden lg:flex gap-[24px] nav-title text-grayscale-light justify-center items-center cursor-pointer">
                            <div className="py-[8px] border-b-[1px] hover:text-grayscale-light">首頁</div>
                            <span className="w-[0px] h-[16px] border-[1px] border-solid border-grayscale-dark "></span>
                            <div className="py-[8px] opacity-50 hover:text-grayscale-light hover:opacity-100">
                                工程實績
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full overflow-x-scroll custom-project-scrollbar  flex justify-start items-center h-[94px] md:h-[111px]">
                        {/* border-arrow-top */}
                        <div className="absolute w-[99%] left-[50%] top-0 translate-x-[-50%]">
                            <div className="absolute w-full bg-grayscale-dim before:bg-grayscale-dim after:bg-grayscale-dim border-arrow"></div>
                        </div>
                        {/* border-arrow-bottom */}
                        <div className="absolute w-[99%] left-[50%] bottom-0 translate-x-[-50%]">
                            <div className="absolute w-full bg-grayscale-dim before:bg-grayscale-dim after:bg-grayscale-dim border-arrow"></div>
                        </div>
                        {/*ProjectTab List*/}
                        {/*TODO: overflow problem*/}
                        <div className="absolute flex justify-start items-center gap-[12px] ">
                            {projectTab.map(({ title }) => {
                                return (
                                    <button
                                        key={title}
                                        className="button-shadow-2 flex justify-center items-center w-[80px] h-[47px] bg-grayscale-iron rounded-[24px] body-2 text-grayscale-light hover:bg-secondary-spotlight hover:text-grayscale-iron"
                                    >
                                        {title}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <ProjectsList />
                    <div className="flex en-body-1 text-grayscale-light justify-center items-center cursor-pointer">
                        <div className="py-[8px] border-b-[1px] hover:text-grayscale-light uppercase">load more</div>
                    </div>
                </div>
            </section>
            <FooterSimple />
        </section>
    );
}
