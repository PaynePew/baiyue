import { FooterSimple } from "~/components/Footer";
import styles from "./styles.css";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export function ContactPage() {
    return (
        <section className="w-full bg-grayscale-iron">
            <section className="container">
                <div className="relative flex flex-col pt-[141px] mx-[24px] mb-[95px] md:pt-[205px] md:mx-[40px] md:mb-[141px] lg:mx-[120px] lg:pt-[336px] lg:mb-[175px]">
                    <div className="relative flex justify-between items-end mb-[48px] md:mb-[57px] lg:mb-[98px]">
                        {/*Decoration Square-3*/}
                        <div className="absolute rounded-[16px] square-shadow-contact bg-grayscale-iron top-[80px] right-[-24px] w-[130px] h-[414.5px] md:top-[111px] md:right-[-40px] md:h-[414.5px] md:w-[218px] lg:top-[94px] lg:right-[-120px] lg:w-[362px]"></div>
                        <div className="flex flex-col items-start justify-center gap-[4px] md:gap-[8px]">
                            <div className="display-1 text-grayscale-gainsboro">聯絡我們</div>
                            <div className="en-h2 text-primary uppercase">contact us</div>
                        </div>
                        <div className="hidden z-10 lg:flex gap-[24px] nav-title text-grayscale-light justify-center items-center cursor-pointer">
                            <div className="py-[8px] border-b-[1px] text-grayscale-light">首頁</div>
                            <span className="w-[0px] h-[16px] border-[1px] border-solid border-grayscale-dark"></span>
                            <div className="py-[8px] opacity-50 hover:text-grayscale-light hover:opacity-100">
                                聯絡我們
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center gap-[16px] mb-[24px] md:mb-[32px] md:items-start lg:gap-[40px] lg:mb-[48px]">
                        {/*Rounded Triangle-8 original:72x83 46.77x52.2 lg:-12.615x15.4*/}
                        <div className="hidden absolute lg:inline-block top-[-11.35px] left-[-86px]">
                            <img className="" src="assets/rounded_triangle_8.svg" alt="decoration_rounded_triangle_8" />
                        </div>

                        <h2 className="text-grayscale-gainsboro">百越工程資訊有限公司</h2>
                        {/* todo: update googleMap */}
                        <div className="z-10 w-full h-[216px] md:h-[230px] lg:h-[400px]">
                            <iframe
                                title="百越工程資訊有限公司"
                                className="border-0 w-full h-full max-w-full grayscale"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD78M-Wm7jw8EBXT6eg1AqiTUQWv6zn344&q=桃園市大園區大成路一段2號6樓`}
                            ></iframe>
                        </div>
                    </div>
                    {/* Contact Info */}
                    <div className="z-10 flex flex-col gap-[12px] md:gap-[16px] lg:flex-row lg:gap-[24px]">
                        <div className="flex justify-start items-center w-full dec-shadow-1 py-[20px] px-[24px] rounded-[16px] md:p-[32px]">
                            <div className="flex items-center justify-center gap-[16px]">
                                <img src="/assets/icon_map.png" alt="icon_map" />
                                <div className="body-1 font-[300] text-grayscale-light">
                                    桃園市大園區大成路一段2號6樓
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-start items-center w-full dec-shadow-1 py-[20px] px-[24px] rounded-[16px] md:p-[32px]">
                            <div className="flex items-center gap-[16px]">
                                <img src="/assets/icon_phone.png" alt="icon_phone" />
                                <div className="en-body-1 text-grayscale-light">(03)287-5465</div>
                            </div>
                        </div>
                        <div className="flex justify-start items-center w-full dec-shadow-1 py-[20px] px-[24px] rounded-[16px] md:p-[32px]">
                            <div className="flex items-center justify-center gap-[16px]">
                                <img src="/assets/icon_mail.png" alt="icon_mail" />
                                <div className="en-body-1 text-grayscale-light uppercase">SERVICE@mryc.com.tw</div>
                            </div>
                        </div>
                    </div>
                    {/*Decoration Square-4*/}
                    <div className="absolute hidden md:block md:bottom-[-140px] md:left-[-40px] md:w-[218px] md:h-[297px] lg:bottom-[-160px] lg:left-[-120px] lg:w-[312.5px] lg:h-[315px] rounded-[16px] bg-grayscale-iron square-shadow-contact"></div>
                    {/* Decoration Triangle-1 */}
                    <div className="hidden absolute md:inline-block z-10 bottom-[-75.4px] left-[380px] lg:bottom-[-140px] lg:left-[166px]">
                        <div className="triangle-dec-primary w-[54.27px] h-[54.27px] bg-primary"></div>
                    </div>
                </div>
            </section>
            <FooterSimple />
        </section>
    );
}
