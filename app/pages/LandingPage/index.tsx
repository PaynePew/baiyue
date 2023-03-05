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

function About() {
    return (
        <section className="w-full bg-grayscale-dim flex justify-center items-center">
            <div className="flex flex-col pt-[74px] pb-[103px] mx-[24px]">
                <div className="divine mb-[32px]"></div>
                <div className="flex flex-col gap-[16px]">
                    <div className="flex flex-col items-center justify-center gap-[8px]">
                        <h1 className="text-grayscale-gainsboro">百越價值</h1>
                        <div className="en-h3 text-primary">ABOUT US</div>
                    </div>
                    <div className="body-1 text-white text-center">
                        彙來說辦何歡希天大資難張為等思堆櫥凍鳳恩則原。攪一的繃欒業試上癸狂如著轉三大處過銘論若！稚秒脂我曼！
                    </div>
                </div>
                <div className="divine mt-[32px] mb-[48px]"></div>
                <div className="flex flex-col gap-[48px]">
                    <div className="flex justify-center items-center">
                        <img className="" src="assets/about_pic.png" alt="about_pic" />
                    </div>
                    <button className="button-shadow-1 nav-title flex justify-center items-center gap-[16px] text-[15px] text-grayscale-light h-[56px] rounded-[128px]">
                        <div className="w-[8px] h-[8px] bg-grayscale-light rounded-full"></div>
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
            <div className="w-full flex flex-col gap-[48px] py-[80px] mx-[24px]">
                <div className="flex flex-col items-center justify-center gap-[8px]">
                    <h1 className="text-grayscale-gainsboro">近期實績</h1>
                    <div className="en-h3 text-primary">FEATURED PROJECT</div>
                </div>
                <div className="flex flex-col gap-[24px]">
                    {fakeData.map(({ alt, pic, desc }) => {
                        return (
                            <div
                                className="card-shadow rounded-[12px] flex justify-center items-center overflow-clip"
                                key={alt}
                            >
                                <div className="basis-[37%]">
                                    <img className="object-cover h-[167px]" src={`assets/${pic}`} alt={alt} />
                                </div>
                                <div className="flex flex-col gap-[16px] basis-[63%] p-[24px]">
                                    <h6 className="text-grayscale-gainsboro">{desc}</h6>
                                    <button className="body-3 w-fit py-[8px] px-[16px] bg-grayscale-dark text-grayscale-light rounded-[128px]">
                                        其他
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button className="button-shadow-1 nav-title flex justify-center items-center gap-[16px] text-[15px] text-grayscale-light h-[56px] rounded-[128px]">
                    <div className="w-[8px] h-[8px] bg-grayscale-light rounded-full"></div>
                    <div className="">所有實績</div>
                </button>
            </div>
        </section>
    );
}

function Partners() {
    return (
        <section className="w-full flex justify-center items-center bg-grayscale-dim">
            <div className="w-full flex flex-col pt-[64px] pb-[80px] mx-[24px]">
                <div className="flex flex-col items-center justify-center gap-[8px] mb-[40px]">
                    <h1 className="text-grayscale-gainsboro">信賴夥伴</h1>
                    <div className="en-h3 text-primary">PARTNERS</div>
                </div>
                <div className="flex">
                    <div className="card-shadow">
                        <img className="w-[137px] h-[102px] " src="assets/logo_atter1.png" alt="logo_atter" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section className="w-full flex justify-center items-center bg-grayscale-dim">
            <div className="w-full flex flex-col pb-[80px] mx-[24px]">
                <div className="flex flex-col items-center justify-center gap-[8px] mb-[16px]">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-grayscale-gainsboro">與我們</h1>
                        <h1 className="text-grayscale-gainsboro">展開合作</h1>
                    </div>
                    <div className="en-h3 text-primary">CONTACT US</div>
                </div>
                <div className="body-1 text-white text-center">
                    彙來說辦何歡希天大資難張為等思堆櫥凍鳳恩則原。攪一的繃欒業試上癸狂如著轉三大處過銘論若！稚秒脂我曼！
                </div>
                <div className="w-[312px] h-[300px] contact-shadow my-[40px] mx-auto"></div>
                <button className="button-shadow-1 flex justify-center items-center gap-[16px] nav-title text-[15px] text-grayscale-light h-[56px] rounded-[128px]">
                    <div className="">聯絡我們</div>
                    <img src="assets/icon_mail_send.png" alt="icon_mail_send" />
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
