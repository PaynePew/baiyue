import styles from "./styles.css";
import { FooterSimple } from "~/components/Footer";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

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

const flow = [
    { step: "A", desc: "初版模型交付碰撞檢討報告" },
    { step: "B", desc: "業主意見回覆" },
    { step: "C", desc: "模型修正" },
    { step: "D", desc: "逐層建築機電系統檢討" },
    { step: "E", desc: "雙週會議報告" },
    { step: "F", desc: "回饋施工圖說" },
    { step: "G", desc: "維運資料輸入" },
    { step: "H", desc: "竣工" },
];

export function ProjectDetail({ projectId }) {
    return (
        <section className="w-full bg-grayscale-iron">
            {/* Breadcrumb for Desktop */}
            <div className="hidden lg:flex lg:pt-[344px] lg:mx-[120px]">
                <div className="lg:flex gap-[24px] nav-title text-grayscale-light justify-start items-center cursor-pointer">
                    <div className="py-[8px] border-b-[1px] hover:text-grayscale-light">首頁</div>
                    <span className="w-[0px] h-[16px] border-[1px] border-solid border-grayscale-dark "></span>
                    <div className="py-[8px] border-b-[1px] hover:text-grayscale-light hover:opacity-100">工程實績</div>
                    <span className="w-[0px] h-[16px] border-[1px] border-solid border-grayscale-dark "></span>
                </div>
            </div>
            <div className="flex flex-col pt-[131px] mx-[24px] gap-[32px] mb-[60.5px] md:mx-[40px] md:pt-[200px] md:gap-[64px] lg:pt-[120px] lg:mx-[120px] lg:gap-[80px] ">
                <div className="w-full flex flex-col gap-[32px] md:gap-[64px] lg:flex-row lg:gap-[0] lg:items-start lg:justify-end">
                    {/* Project Title */}
                    <div className="flex flex-col justify-center items-center gap-[12px] lg:items-start lg:ml-[40px] lg:gap-[32px]">
                        <h2 className="text-grayscale-gainsboro text-center lg:text-left">
                            臺北市殯葬管理處第二殯儀館二期整建工程
                        </h2>
                        <button className="body-3 flex justify-center items-center py-[8px] px-[16px] bg-grayscale-dark rounded-[128px] text-grayscale-light hover:bg-secondary-spotlight hover:text-grayscale-iron">
                            其他
                        </button>
                    </div>
                    {/* Project Image */}
                    <div className="w-full flex justify-center items-center lg:basis-[57.5%] lg:flex-shrink-0 lg:ml-[126px]">
                        <img
                            src="/assets/projectlist_1.png"
                            className="w-full object-cover rounded-[12px] md:w-[510px] md:rounded-[16px] lg:w-full"
                            alt="project_img"
                        />
                    </div>
                </div>
                {/* Project Category */}
                <div className="w-full flex flex-col gap-[16px] lg:gap-[24px] lg:flex-row lg:flex-wrap">
                    <div className="flex flex-col gap-[16px] md:flex-row lg:flex-col lg:basis-[40.5%]">
                        <div className="flex flex-col basis-1/3 p-[24px] gap-[12px] bg-grayscale-dim rounded-[12px] project-detail-shadow-1 md:p-[32px] md:gap-[16px] lg:flex-row lg:items-center lg:gap-[40px]">
                            <div className="body-3  text-grayscale-light flex-shrink-0">專案類型</div>
                            <div className="body-2 text-white">施工階段/建築、結構、景觀、機電</div>
                        </div>
                        <div className="flex flex-col basis-1/3 p-[24px] gap-[12px] bg-grayscale-dim rounded-[12px] project-detail-shadow-1 md:p-[32px] md:gap-[16px] lg:flex-row lg:items-center lg:gap-[40px]">
                            <div className="body-3 text-grayscale-light flex-shrink-0">合作單位</div>
                            <div className="body-2 text-white">應州工程有限公司，楊瑞禎聯合建築師事務所</div>
                        </div>
                        <div className="flex flex-col basis-1/3 p-[24px] gap-[12px] bg-grayscale-dim rounded-[12px] project-detail-shadow-1 md:p-[32px] md:gap-[16px] lg:flex-row lg:items-center lg:gap-[40px]">
                            <div className="body-3 text-grayscale-light flex-shrink-0">專案內容</div>
                            <div className="body-2 text-white">地上5層，地下4層，約19,791㎡</div>
                        </div>
                    </div>
                    {/* Project Introduce */}
                    <div className="flex flex-col p-[24px] gap-[24px] bg-grayscale-dim rounded-[12px] project-detail-shadow-1 md:p-[32px] md:gap-[32px] lg:basis-[57.5%] lg:gap-[48px]">
                        <div className="body-3 text-grayscale-light">專案介紹</div>
                        <div className="flex flex-col gap-[8px] md:w-2/3 md:gap-[24px] md:grid md:grid-cols-2 lg:w-full">
                            <div className="flex items-center gap-[8px] md:gap-[16px]">
                                <div className="en-body-1 text-primary">/1</div>
                                <div className="body-2 text-white">BIM工程師駐地建模</div>
                            </div>
                            <div className="flex items-center gap-[8px] md:gap-[16px]">
                                <div className="en-body-1 text-primary">/2</div>
                                <div className="body-2 text-white">建模、碰撞檢討</div>
                            </div>
                            <div className="flex items-center gap-[8px] md:gap-[16px]">
                                <div className="en-body-1 text-primary">/3</div>
                                <div className="body-2 text-white">施工可行性檢討</div>
                            </div>
                            <div className="flex items-center gap-[8px] md:gap-[16px] md:self-end">
                                <div className="en-body-1 text-primary">/4</div>
                                <div className="body-2 text-white">4D模擬動畫</div>
                            </div>
                            <div className="flex items-center gap-[8px] md:gap-[16px]">
                                <div className="en-body-1 text-primary">/5</div>
                                <div className="body-2 text-white">雙週會議報告</div>
                            </div>
                            <div className="flex items-center gap-[8px] md:gap-[16px]">
                                <div className="en-body-1 text-primary">/6</div>
                                <div className="body-2 text-white">BIM教育訓練</div>
                            </div>
                            <div className="flex items-center gap-[8px] md:gap-[16px]">
                                <div className="en-body-1 text-primary">/7</div>
                                <div className="body-2 text-white">階段成果報告</div>
                            </div>
                            <div className="flex items-center gap-[8px] md:gap-[16px]">
                                <div className="en-body-1 text-primary">/8</div>
                                <div className="body-2 text-white">BEP擬定</div>
                            </div>
                        </div>
                    </div>
                    {/* Project Process */}
                    <div className="flex flex-col p-[24px] gap-[24px] bg-grayscale-dim rounded-[12px] project-detail-shadow-1 w-full">
                        <div className="body-3 text-grayscale-light">專案流程</div>
                        <div className="w-full overflow-x-scroll">
                            <div className="flex justify-start items-center gap-[16px] min-w-[1200px]">
                                {flow.map(({ step, desc }, idx) => {
                                    return (
                                        <div key={idx} className="flex items-center gap-[16px] process-hidden">
                                            <div className="flex flex-col w-[109px] h-[122px] py-[16px] px-[20px] gap-[8px] border-[1px] border-solid border-grayscale-light/50 rounded-[16px]">
                                                <div className="en-minimum text-grayscale-silver">{step}</div>
                                                <div className="body-3 text-grayscale-gainsboro">{desc}</div>
                                            </div>
                                            <img
                                                className="w-[6px] h-[12px]"
                                                src="/assets/next_r.png"
                                                alt="next_slide_icon"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSimple />
        </section>
    );
}
