import { Footer } from "~/components/Footer";
import styles from "./styles.css";
export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

const fakeData = [
    { alt: "project_pic1", pic: "project_1.png", desc: "臺北市殯葬管理處第二殯儀館二期整建工程" },
    { alt: "project_pic2", pic: "project_2.png", desc: "大潭電廠建燃氣複循環機組發電計畫" },
    { alt: "project_pic3", pic: "project_3.png", desc: "臺北市萬華區莒光段公共住宅新建工程" },
    { alt: "project_pic4", pic: "project_4.png", desc: "臺北市立明倫高級中學多功能大樓新建工程" },
];

const fakePartners = [
    { pic: "logo_1" },
    { pic: "logo_2" },
    { pic: "logo_3" },
    { pic: "logo_4" },
    { pic: "logo_5" },
    { pic: "logo_6" },
    { pic: "logo_7" },
    { pic: "logo_8" },
];

const fakePartnersTablet = [{ pic: "logo_9" }, { pic: "logo_10" }, { pic: "logo_11" }, { pic: "logo_12" }];

function About() {
    return (
        <section className="w-full bg-grayscale-dim flex justify-center items-center">
            <div className="relative flex flex-col max-w-[312px] pt-[74px] pb-[103px] mx-[24px] md:max-w-none md:mx-[129px] md:pb-[92px] md:w-[510px] lg:flex-row lg:w-auto lg:gap-[126px]">
                {/* TODO: BG PIC */}
                {/* <div className="absolute -z-10 bg-grayscale-dim about-bg-shadow w-[80%] h-[20%] bottom-[0] left-[0]"></div> */}
                <div className="divine mb-[32px]"></div>
                <div className="flex flex-col gap-[16px] lg:w-[384px] lg:h-fit lg:items-start lg:gap-[24px]">
                    <div className="flex flex-col items-center justify-center gap-[8px] lg:items-start">
                        <h1 className="text-grayscale-gainsboro">百越價值</h1>
                        <div className="en-h3 text-primary">ABOUT US</div>
                    </div>
                    <div className="body-1 text-white text-center lg:text-left">
                        彙來說辦何歡希天大資難張為等思堆櫥凍鳳恩則原。攪一的繃欒業試上癸狂如著轉三大處過銘論若！稚秒脂我曼！
                    </div>
                    <button className="hidden button-shadow-1 bg-grayscale-gray nav-title lg:flex justify-center items-center gap-[16px] text-[15px] text-grayscale-light h-[56px] rounded-[128px] lg:w-[173px] hover:bg-grayscale-light hover:text-grayscale-iron">
                        <div className="w-[8px] h-[8px] bg-grayscale-light rounded-full hover:hidden"></div>
                        <div className="">關於百越</div>
                    </button>
                </div>
                <div className="divine mt-[32px] mb-[48px]"></div>
                <div className="flex flex-col gap-[48px]">
                    <div className="flex justify-center items-center">
                        <img className="" src="assets/about_pic.png" alt="about_pic" />
                    </div>
                    <button className="button-shadow-1 bg-grayscale-gray nav-title flex justify-center items-center gap-[16px] text-[15px] text-grayscale-light h-[56px] rounded-[128px] md:mx-[99px] lg:hidden hover:bg-grayscale-light hover:text-grayscale-iron">
                        <div className="w-[8px] h-[8px] bg-grayscale-light rounded-full hover:hidden"></div>
                        <div className="">關於百越</div>
                    </button>
                </div>
            </div>
        </section>
    );
}

function FeaturedProject() {
    return (
        <section className="w-full flex justify-center items-center">
            <div className="flex flex-col items-center max-w-[312px] gap-[48px] my-[80px] mx-[24px] md:max-w-[688px] md:gap-[64px] md:mx-[40px] lg:max-w-[1200px] lg:gap-[72px] lg:my-[113px] lg:mx-[120px] ">
                <div className="flex flex-col items-center justify-center gap-[8px]">
                    <h1 className="text-grayscale-gainsboro">近期實績</h1>
                    <div className="en-h3 text-primary">FEATURED PROJECT</div>
                </div>
                {/* Card Project */}
                <div className="flex flex-col gap-[24px] md:flex-row md:flex-wrap md:justify-center md:items-center md:mb-[56px]">
                    {fakeData.map(({ alt, pic, desc }) => {
                        return (
                            <div
                                className="relative card-shadow rounded-[12px] flex justify-center items-center overflow-clip md:flex-col md:even:top-[56px] md:w-[332px] md:items-start lg:w-[580px]"
                                key={alt}
                            >
                                <div className="basis-[37%] md:basis-[50%]">
                                    <img className="object-cover h-[167px] md:h-full" src={`assets/${pic}`} alt={alt} />
                                </div>
                                <div className="flex flex-col gap-[16px] basis-[63%] p-[24px] md:basis-[50%] md:w-full">
                                    <h6 className="text-grayscale-gainsboro lg:hidden">{desc}</h6>
                                    <h5 className="hidden text-grayscale-gainsboro lg:block">{desc}</h5>
                                    <div className="flex justify-between items-center">
                                        <button className="body-3 w-fit py-[8px] px-[16px] bg-grayscale-dark text-grayscale-light rounded-[128px]">
                                            其他
                                        </button>
                                        <img
                                            className="hidden w-[38px] md:h-[11px] md:block"
                                            src="assets/arrow_r.png"
                                            alt="arrorw_r_pic"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button className="button-shadow-1 w-[312px] bg-grayscale-gray nav-title flex justify-center items-center gap-[16px] text-[15px] text-grayscale-light h-[56px] rounded-[128px] md:mx-[99px] lg:w-[173px] hover:bg-grayscale-light hover:text-grayscale-iron">
                    <div className="w-[8px] h-[8px] bg-grayscale-light rounded-full hover:hidden"></div>
                    <div className="">所有實績</div>
                </button>
            </div>
        </section>
    );
}

function Partners() {
    return (
        <section className="w-full flex justify-center items-center bg-grayscale-dim">
            <div className="w-full flex flex-col justify-center items-center pt-[64px] pb-[80px] mx-[24px] md:pt-[80px] md:mx-[40px] md:pb-[120px] lg:flex-row lg:gap-[161px] lg:pt-[120px] lg:mx-[120px] lg:pb-[183px] lg:items-start">
                <div className="flex flex-col items-center justify-center gap-[8px] mb-[40px] md:mb-[64px] lg:items-start">
                    <h1 className="text-grayscale-gainsboro">信賴夥伴</h1>
                    <div className="en-h3 text-primary">PARTNERS</div>
                </div>
                <div className="relative">
                    <div className="hidden absolute z-20  w-[500px] h-[500px] bg-secondary-spotlight lg:block rounded-full mix-blend-overlay"></div>
                    <div className="relative z-10 flex flex-wrap gap-[24px] justify-center items-center lg:gap-[32px] lg:max-w-[792px]">
                        {fakePartners.map(({ pic }) => {
                            return (
                                <div
                                    key={pic}
                                    className="card-shadow flex justify-center items-center w-[140px] h-[120px] px-[13px] rounded-[16px] md:p-[6px] lg:w-[240px] lg:p-[35px]"
                                >
                                    <img className="" src={`assets/${pic}.png`} alt={pic} />
                                </div>
                            );
                        })}
                        {fakePartnersTablet.map(({ pic }) => {
                            return (
                                <div
                                    key={pic}
                                    className="hidden card-shadow md:flex justify-center items-center w-[140px] h-[120px] px-[13px] rounded-[16px] md:p-[6px] lg:w-[240px] lg:p-[35px]"
                                >
                                    <img className="" src={`assets/${pic}.png`} alt={pic} />
                                </div>
                            );
                        })}
                        {/* <div className="card-shadow flex justify-center items-center w-[140px] h-[120px] px-[13px] rounded-[16px] md:p-[6px] lg:w-[240px] lg:p-[35px]">
                            <img className="" src="assets/logo_1.png" alt="logo_1" />
                        </div>
                        <div className="card-shadow flex justify-center items-center w-[140px] h-[120px] px-[13px] rounded-[16px] md:p-[6px] lg:w-[240px] lg:p-[35px]">
                            <img className="" src="assets/logo_2.png" alt="logo_2" />
                        </div>
                        <div className="card-shadow flex justify-center items-center w-[140px] h-[120px] rounded-[16px] text-grayscale-light text-[24px] lg:w-[240px]">
                            SHOPLine
                        </div>
                        <div className="card-shadow flex justify-center items-center w-[140px] h-[120px] rounded-[16px] text-grayscale-light text-[24px] lg:w-[240px]">
                            SHOPLine
                        </div>
                        <div className="card-shadow flex justify-center items-center w-[140px] h-[120px] rounded-[16px] text-grayscale-light text-[24px] lg:w-[240px]">
                            SHOPLine
                        </div>
                        <div className="card-shadow flex justify-center items-center w-[140px] h-[120px] rounded-[16px] text-grayscale-light text-[24px] lg:w-[240px]">
                            SHOPLine
                        </div>
                        <div className="hidden card-shadow md:flex justify-center items-center w-[140px] h-[120px] rounded-[16px] text-grayscale-light text-[24px] lg:w-[240px]">
                            SHOPLine
                        </div>
                        <div className="hidden card-shadow md:flex justify-center items-center w-[140px] h-[120px] rounded-[16px] text-grayscale-light text-[24px] lg:w-[240px]">
                            SHOPLine
                        </div>
                        <div className="hidden card-shadow md:flex justify-center items-center w-[140px] h-[120px] rounded-[16px] text-grayscale-light text-[24px] lg:w-[240px]">
                            SHOPLine
                        </div>
                        <div className="hidden card-shadow md:flex justify-center items-center w-[140px] h-[120px] rounded-[16px] text-grayscale-light text-[24px] lg:w-[240px]">
                            SHOPLine
                        </div>
                        <div className="hidden card-shadow md:flex justify-center items-center w-[140px] h-[120px] rounded-[16px] text-grayscale-light text-[24px] lg:w-[240px]">
                            SHOPLine
                        </div>
                        <div className="hidden card-shadow md:flex justify-center items-center w-[140px] h-[120px] rounded-[16px] text-grayscale-light text-[24px] lg:w-[240px]">
                            SHOPLine
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section className="w-full flex justify-center items-center bg-grayscale-dim">
            <div className="w-full flex flex-col justify-center items-center pb-[64px] mx-[24px] gap-[40px] md:mx-[40px] md:gap-[64px] md:pb-[80px] lg:pb-[120px] lg:mx-[120px] lg:flex-row lg:gap-[126px]">
                <div className="flex flex-col gap-[16px] md:gap-[24px] lg:gap-[48px] lg:max-w-[384px]">
                    <div className="flex flex-col items-center justify-center gap-[8px] lg:items-start">
                        <div className="flex flex-col items-center justify-center lg:items-start">
                            <h1 className="text-grayscale-gainsboro">與我們</h1>
                            <h1 className="text-grayscale-gainsboro">展開合作</h1>
                        </div>
                        <div className="en-h3 text-primary">CONTACT US</div>
                    </div>
                    <div className="body-1 text-white text-center lg:text-left">
                        一句slogan或可引起聯絡動機的文案一句slogan或可引起聯絡動機的文案一句slogan或可引起聯絡動機的文案一句slogan或可引起聯絡動機的文案
                    </div>
                    <button className="hidden button-shadow-1 w-[189px] bg-grayscale-gray lg:flex justify-center items-center gap-[16px] nav-title text-[15px] text-grayscale-light h-[56px] rounded-[128px]  hover:bg-grayscale-light hover:text-grayscale-iron">
                        <div className="">聯絡我們</div>
                        <img className="hover:hidden" src="assets/icon_mail_send.png" alt="icon_mail_send" />
                    </button>
                </div>
                <div className="relative w-[312px] h-[300px] contact-shadow rounded-[4px] overflow-clip md:w-[510px] md:h-[490px] md:rounded-[16px] lg:w-[690px] lg:h-[660px]">
                    <img src="assets/contact_bg.png" alt="contact_bg_pic" />
                    <img
                        className="absolute w-[71.18px] h-[71.18px] rounded-full top-[10.8%] left-[13.3%] md:w-[115.2px] md:h-[115.2px] lg:w-[155.41px] lg:h-[155.41px]"
                        src="assets/contact_symbol_1.png"
                        alt="contact_symbol_pic_1"
                    />
                    <img
                        className="absolute w-[31.52px] h-[31.52px] rounded-full top-[5.6%] left-[59.57%] md:w-[51.2px] md:h-[51.2px] lg:w-[68.82px] lg:h-[68.82px]"
                        src="assets/contact_symbol_2.png"
                        alt="contact_symbol_pic_2"
                    />
                    <img
                        className="absolute w-[86.69px] h-[86.69px] rounded-full top-[24.3%] right-[3.1%] md:w-[145.16px] md:h-[145.16px] lg:w-[195.82px] lg:h-[195.82px]"
                        src="assets/contact_symbol_3.png"
                        alt="contact_symbol_pic_3"
                    />
                    <img
                        className="absolute w-[43.13px] h-[43.13px] rounded-full top-[67.2%] left-[29.4%] md:w-[69.81px] md:h-[69.81px] lg:w-[94.18px] lg:h-[94.18px]"
                        src="assets/contact_symbol_4.png"
                        alt="contact_symbol_pic_4"
                    />
                    <img
                        className="absolute w-[57.29px] h-[57.29px] rounded-full top-[78.2%] right-[86.7%] md:w-[92.72px] md:h-[92.72px] lg:w-[125.08px] lg:h-[125.08px]"
                        src="assets/contact_symbol_5.png"
                        alt="contact_symbol_pic_5"
                    />
                    <img
                        className="absolute w-[66.26px] h-[66.26px] rounded-full top-[85%] right-[14.1%] md:w-[107.25px] md:h-[107.25px] lg:w-[144.68px] lg:h-[144.68px]"
                        src="assets/contact_symbol_6.png"
                        alt="contact_symbol_pic_6"
                    />
                </div>
                <button className="button-shadow-1 w-[312px] bg-grayscale-gray flex justify-center items-center gap-[16px] nav-title text-[15px] text-grayscale-light h-[56px] rounded-[128px]  hover:bg-grayscale-light hover:text-grayscale-iron lg:hidden">
                    <div className="">聯絡我們</div>
                    <img className="hover:hidden" src="assets/icon_mail_send.png" alt="icon_mail_send" />
                </button>
            </div>
        </section>
    );
}

export function LandingPage() {
    return (
        <section className="w-full bg-grayscale-iron">
            <div className="relative w-full h-screen flex justify-center items-center overflow-clip">
                <div className="relative z-40 w-full flex justify-center items-center">
                    <div className="absolute outter-shadow w-[440px] h-[440px] md:w-[497px] md:h-[497px] flex justify-center items-end">
                        <div className="relative flex flex-col items-center gap-[16px] bottom-[-56px]">
                            <button className="button-shadow-2  bg-primary w-[40px] h-[40px] rounded-full flex justify-center items-center">
                                <div className="border-grayscale-iron border-y-transparent border-r-transparent border-solid border-l-[8px] border-y-[4px]"></div>
                            </button>
                            <div className="en-body-1 text-secondary-light">IMAGE VIDEO</div>
                        </div>
                    </div>
                    <div className="absolute w-[380px] min-w-[380px]  mx-auto rounded-full overflow-hidden md:w-[430px] md:max-w-[430px]">
                        <img className="" src="/assets/hero.png" alt="hero_image" />
                    </div>
                    <div className="absolute inner-shadow mix-blend-normal w-[381px] h-[381px] md:w-[431px] md:h-[431px] md:mix-blend-multiply"></div>
                    <div className="absolute flex flex-col md:items-center">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex items-end self-center text-[#E7E7E7] md:items-center">
                                <div className="display-2">能讓</div>
                                <div className="flex justify-center items-center w-[82px] h-[42px] border-[1px] border-solid border-primary rounded-[95.7px] md:w-[120px] md:h-[54.4px]">
                                    <div className="en-h1">BIM</div>
                                </div>
                            </div>
                            <div className="display-2 text-[#E7E7E7]">引以為傲的工程</div>
                        </div>
                        <div className="flex items-end text-[#E7E7E7] md:items-center">
                            <div className="display-2 text-[#E7E7E7]">才是真實的</div>
                            <div className="flex justify-center items-center w-[82px] h-[42px] border-[1px] border-solid border-primary rounded-[95.7px] md:w-[120px] md:h-[54.4px]">
                                <div className="en-h1">BIM</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute dec-shadow-4 w-[68.81px] h-[18.37px] z-10 top-[17.5%] right-[-10%] md:right-[11%] md:top-[26%] "></div>
                <div className="absolute dec-shadow-4 w-[107.39px] h-[43.6px] z-10 top-[83%] left-[-15%] md:left-[10.13%] md:bottom-[18.3%]  "></div>
                <div className="hidden absolute right-[0] bottom-[13%] md:max-lg:inline-block">
                    <img src="/assets/tower_r_t.png" alt="bg_tower" />
                </div>
                <div className="hidden absolute right-[0] bottom-[13%] lg:inline-block">
                    <img src="/assets/tower_r.png" alt="bg_tower" />
                </div>
                <div className="hidden absolute left-[0] bottom-[13%] md:max-lg:inline-block">
                    <img src="/assets/tower_l_t.png" alt="bg_tower" />
                </div>
                <div className="hidden absolute left-[0] bottom-[13%] lg:inline-block">
                    <img src="/assets/tower_l.png" alt="bg_tower" />
                </div>
            </div>
            <About />
            <FeaturedProject />
            <Partners />
            <Contact />
            <Footer />
        </section>
    );
}
