import { Link } from "@remix-run/react";
const fakeData = [
    { alt: "project_pic1", pic: "project_1.png", desc: "臺北市殯葬管理處第二殯儀館二期整建工程" },
    { alt: "project_pic2", pic: "project_2.png", desc: "大潭電廠建燃氣複循環機組發電計畫" },
    { alt: "project_pic3", pic: "project_3.png", desc: "臺北市萬華區莒光段公共住宅新建工程" },
    { alt: "project_pic4", pic: "project_4.png", desc: "臺北市立明倫高級中學多功能大樓新建工程" },
];
export function FeaturedProject() {
    return (
        <section className="w-full flex justify-center items-center">
            <div className="container">
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
                                        <img
                                            className="object-cover h-[167px] md:h-full"
                                            src={`assets/${pic}`}
                                            alt={alt}
                                        />
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
                    <Link
                        to="/projects"
                        className="main-button button-shadow-1 w-[312px] nav-title flex gap-[16px] text-[15px] h-[56px] md:mx-[99px] lg:w-[173px]"
                    >
                        <span className="w-[8px] h-[8px] bg-grayscale-light rounded-full"></span>
                        <div className="">所有實績</div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
