import { Link } from "@remix-run/react";
import styles from "./styles.css";
import { FooterSimple } from "~/components/Footer";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

const fakeData = [
    { alt: "project_pic7", pic: "projectlist_7.png", desc: "台北市信義區松信社會住宅新建工程" },
    { alt: "project_pic2", pic: "projectlist_2.png", desc: "大潭電廠建燃氣複循環機組發電計畫" },
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

function OthersSection() {
    return (
        <section className="w-full bg-grayscale-iron">
            <div className="flex flex-col pt-[48px] pb-[80px] mx-[24px] md:mx-[40px] md:pt-[40px] md:pb-[120px] lg:pt-[80px] lg:pb-[218px] lg:mx-[120px]">
                <div className="flex flex-col items-start justify-cente mb-[40px] gap-[2px] md:gap-[4px] lg:gap-[8px] md:mb-[64px]">
                    <h3 className="text-grayscale-gainsboro">相關案例</h3>
                    <div className="en-h4 lg:text-[24px] text-primary uppercase">others</div>
                </div>
                <div className="flex flex-wrap justify-center gap-[24px] md:items-cente">
                    {fakeData.map(({ alt, pic, desc }, idx) => {
                        if (idx === 0) {
                            return (
                                <div
                                    className="relative card-shadow rounded-[12px] flex justify-center overflow-clip w-[312px] md:flex-col md:w-[332px] lg:flex-row lg:w-[792px] lg:h-[377px]"
                                    key={idx}
                                >
                                    <div className="shrink-0 w-[116px] bg-white md:w-full md:h-[157px] lg:h-full lg:w-[512px]">
                                        <img className="object-cover w-full h-full" src={`/assets/${pic}`} alt={alt} />
                                    </div>
                                    <div className="flex flex-col gap-[16px] p-[24px] lg:p-[40px] lg:h-full lg:justify-between">
                                        <h6 className="text-grayscale-gainsboro lg:hidden">{desc}</h6>
                                        <h5 className="hidden text-grayscale-gainsboro lg:block">{desc}</h5>
                                        <div className="flex justify-between items-center">
                                            <button className="body-3 w-fit py-[8px] px-[16px] bg-grayscale-dark text-grayscale-light rounded-[128px]">
                                                其他
                                            </button>
                                            <Link to="/projects/1">
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
                        }
                        return (
                            <div
                                className="relative card-shadow rounded-[12px] flex justify-center overflow-clip w-[312px] md:flex-col md:w-[332px] lg:w-[384px]"
                                key={idx}
                            >
                                <div className="shrink-0 w-[116px] bg-white md:w-full md:h-[157px] lg:h-[220px]">
                                    <img className="object-cover w-full h-full" src={`/assets/${pic}`} alt={alt} />
                                </div>
                                <div className="flex flex-col gap-[16px] p-[24px]">
                                    <h6 className="text-grayscale-gainsboro md:min-h-[56px]">{desc}</h6>
                                    <div className="flex justify-between items-center">
                                        <button className="body-3 w-fit py-[8px] px-[16px] bg-grayscale-dark text-grayscale-light rounded-[128px]">
                                            其他
                                        </button>
                                        <Link to="/projects/1">
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

function ProjectCardPlainReverse() {
    return (
        <div className="flex flex-col gap-[24px] md:flex-row lg:gap-[124px]">
            <div className="flex flex-col md:basis-[50%] order-2">
                <div className="body-2 text-grayscale-light">
                    應州工程有限公司，楊瑞禎聯合建築師事務所年春排的活風所到任結較中朝村是學到樵建快將館錶部都…人洩妹日且你章喜人的裕生方，華一針，能怎樂歡後白星老片民萃統驢也湊的變。力蟄不聖鵬系四！當到要目近裔肆部工。此，坑謝籌手盔禦斜想當因政結感資諦後許…
                    應州工程有限公司，楊瑞禎聯合建築師事務所年春排的活風所到任結較中朝村是學到樵建快將館錶部都…人洩妹日且你章喜人的裕生方，華一針，能怎樂歡後白星老片民萃統驢也湊的變。
                </div>
            </div>
            <div className="w-full h-[230px] flex justify-center items-center bg-grayscale-gray rounded-[12px] order-1 md:basis-[50%] md:h-[246.5px] lg:h-[430px]">
                <img
                    className="object-scale-down w-full h-full"
                    src="/assets/project_sample_7.png"
                    alt="project_model_7"
                />
            </div>
        </div>
    );
}

function ProjectCardPlain() {
    return (
        <div className="flex flex-col gap-[24px] md:flex-row lg:gap-[124px]">
            <div className="flex flex-col md:basis-[50%] ">
                <div className="body-2 text-grayscale-light">
                    應州工程有限公司，楊瑞禎聯合建築師事務所年春排的活風所到任結較中朝村是學到樵建快將館錶部都…人洩妹日且你章喜人的裕生方，華一針，能怎樂歡後白星老片民萃統驢也湊的變。
                    力蟄不聖鵬系四！當到要目近裔肆部工。此，坑謝籌手盔禦斜想當因政結感資諦後許…
                </div>
            </div>
            <div className="w-full h-[230px] flex justify-center items-center bg-grayscale-gray rounded-[12px] md:basis-[50%] md:h-[246.5px] lg:h-[430px]">
                <img
                    className="object-scale-down w-full h-full"
                    src="/assets/project_sample_6.png"
                    alt="project_model_6"
                />
            </div>
        </div>
    );
}

function ProjectGallery() {
    return (
        <div className="w-full flex flex-col gap-[16px] lg:[24px]">
            <div className="w-full flex flex-col gap-[16px] md:flex-row lg:[24px]">
                <div className="w-full h-[120px] rounded-[12px] overflow-hidden md:rounded-[16px] md:h-[246.5px] lg:h-[430px]">
                    <img
                        className="object-cover w-full h-full"
                        src="/assets/project_sample_3.png"
                        alt="project_model_3"
                    />
                </div>
                <div className="w-full h-[120px] rounded-[12px] overflow-hidden md:rounded-[16px] md:h-[246.5px] lg:h-[430px]">
                    <img
                        className="object-cover w-full h-full"
                        src="/assets/project_sample_4.png"
                        alt="project_model_4"
                    />
                </div>
            </div>
            <div className="w-full h-[120px] flex justify-center items-center rounded-[12px] bg-grayscale-gray md:rounded-[16px] md:h-[246.5px] lg:h-[430px]">
                <img
                    className="object-scale-down w-full h-full"
                    src="/assets/project_sample_5.png"
                    alt="project_model_5"
                />
            </div>
        </div>
    );
}

function ProjectCardReverse() {
    return (
        <div className="flex flex-col gap-[24px] md:flex-row lg:gap-[124px]">
            <div className="flex flex-col gap-[9.17px] md:basis-[50%] lg:gap-[16px] order-2">
                <h3 className="text-grayscale-gainsboro md:text-right">(左圖右文)_段落標題</h3>
                <div className="body-2 text-grayscale-light">
                    應州工程有限公司，楊瑞禎聯合建築師事務所年春排的活風所到任結較中朝村是學到樵建快將館錶部都…人洩妹日且你章喜人的裕生方，華一針，能怎樂歡後白星老片民萃統驢也湊的變。力蟄不聖鵬系四！當到要目近裔肆部工。此，坑謝籌手盔禦斜想當因政結感資諦後許…
                    應州工程有限公司，楊瑞禎聯合建築師事務所年春排的活風所到任結較中朝村是學到樵建快將館錶部都…人洩妹日且你章喜人的裕生方，華一針，能怎樂歡後白星老片民萃統驢也湊的變。
                </div>
            </div>
            <div className="w-full flex justify-center items-center bg-grayscale-gray rounded-[12px] md:basis-[50%] order-1 md:h-[246.5px] lg:h-[430px]">
                <img
                    className="object-scale-down w-full h-full"
                    src="/assets/project_sample_2.png"
                    alt="project_model_2"
                />
            </div>
        </div>
    );
}

function ProjectCard() {
    return (
        <div className="flex flex-col gap-[24px] md:flex-row lg:gap-[124px]">
            <div className="flex flex-col gap-[9.17px] md:basis-[50%] lg:gap-[16px]">
                <h3 className="text-grayscale-gainsboro">(左文右圖)_段落標題</h3>
                <div className="body-2 text-grayscale-light">
                    應州工程有限公司，楊瑞禎聯合建築師事務所年春排的活風所到任結較中朝村是學到樵建快將館錶部都…人洩妹日且你章喜人的裕生方，華一針，
                    能怎樂歡後白星老片民萃統驢也湊的變。力蟄不聖鵬系四！當到要目近裔肆部工。此，坑謝籌手盔禦斜想當因政結感資諦後許…
                </div>
            </div>
            <div className="w-full flex justify-center items-center bg-grayscale-gray rounded-[12px] md:basis-[50%] md:h-[246.5px] lg:h-[430px]">
                <img
                    className="object-scale-down w-full h-full"
                    src="/assets/project_sample_1.png"
                    alt="project_model_1"
                />
            </div>
        </div>
    );
}

function ProjectDetailCards() {
    return (
        <section className="w-full bg-grayscale-dim">
            <div className="flex flex-col py-[48px] mx-[24px] gap-[64px] md:mx-[40px] md:py-[80px] md:gap-[80px] lg:py-[160px] lg:mx-[120px] lg:gap-[120px]">
                <ProjectCard />
                <ProjectCardReverse />
                <ProjectGallery />
                <ProjectCardPlain />
                <ProjectCardPlainReverse />
            </div>
        </section>
    );
}

export function ProjectDetail({ projectId }) {
    return (
        <section className="w-full bg-grayscale-iron">
            <section className="container">
                {/* Breadcrumb for Desktop */}
                <div className="hidden lg:flex lg:pt-[344px] lg:mx-[120px]">
                    <div className="lg:flex gap-[24px] nav-title text-grayscale-light justify-start items-center cursor-pointer">
                        <div className="py-[8px] border-b-[1px] hover:text-grayscale-light">首頁</div>
                        <span className="w-[0px] h-[16px] border-[1px] border-solid border-grayscale-dark "></span>
                        <div className="py-[8px] border-b-[1px] hover:text-grayscale-light hover:opacity-100">
                            工程實績
                        </div>
                        <span className="w-[0px] h-[16px] border-[1px] border-solid border-grayscale-dark "></span>
                    </div>
                </div>
                <div className="flex flex-col pt-[131px] mx-[24px] gap-[32px] mb-[60.5px] md:mx-[40px] md:pt-[200px] md:gap-[64px] md:mb-[77px] lg:pt-[120px] lg:mx-[120px] lg:mb-[80px] lg:gap-[80px] ">
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
                        <div className="flex flex-col p-[24px] gap-[12px] bg-grayscale-dim rounded-[12px] project-detail-shadow-1 md:p-[32px] md:gap-[16px] lg:basis-[57.5%] lg:gap-[24px]">
                            <div className="body-3 text-grayscale-light">專案介紹</div>
                            {/*Border*/}
                            <div className="relative w-full">
                                <div className="w-full bg-grayscale-dim before:bg-grayscale-dim after:bg-grayscale-dim border-arrow"></div>
                            </div>
                            {/*Content*/}
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
                        <div className="flex flex-col w-full p-[24px] pr-0 gap-[12px] md:gap-[16px] lg:gap-[24px] bg-grayscale-dim rounded-[12px] project-detail-shadow-1 ">
                            <div className="body-3 text-grayscale-light">專案流程</div>
                            {/*Border*/}
                            {/*TODO:strech all over*/}
                            <div className="relative w-[96%]">
                                <div className="w-full bg-grayscale-dim before:bg-grayscale-dim after:bg-grayscale-dim border-arrow"></div>
                            </div>
                            {/*Flow*/}
                            <div className="w-full overflow-x-scroll custom-projectdetail-scrollbar">
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
                <ProjectDetailCards />
                <OthersSection />
            </section>
            <FooterSimple />
        </section>
    );
}
