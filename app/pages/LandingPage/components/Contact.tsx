import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
export function Contact() {
    return (
        <section className="w-full flex justify-center items-center">
            <div className="container">
                <div className="flex flex-col justify-start items-center pb-[64px] mx-[24px] gap-[40px] md:mx-[40px] md:gap-[64px] md:pb-[80px] lg:pb-[120px] lg:mx-[120px] lg:flex-row lg:gap-[126px]">
                    <motion.div
                        className="flex flex-col gap-[16px] md:gap-[24px] lg:gap-[48px] lg:max-w-[384px]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
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
                        <Link
                            to="/contact"
                            className="main-button hidden button-shadow-1 w-[189px] lg:flex gap-[16px] nav-title text-[15px] h-[56px]"
                        >
                            <div className="">聯絡我們</div>
                            <img className="" src="assets/icon_mail_send.svg" alt="icon_mail_send" />
                        </Link>
                    </motion.div>
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 0.8 } }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        {/* Decoration Triangle-1 */}
                        <div className="hidden absolute z-10 bottom-[4%] right-[-9%] triangle-shadow lg:block ">
                            <div className="triangle-dec w-[75.11px] h-[75.11px] lg:w-[84.5px] lg:h-[84.5px] bg-primary"></div>
                        </div>
                        {/* Decoration Triangle-2 */}
                        <div className="hidden absolute z-10 left-[-5%] top-[6.5%] lg:block ">
                            <div className="triangle-dec-2 bg-primary w-[67.8px] h-[67.8px]">
                                <div className="absolute w-[29.44px] h-[29.44px] right-[5px] bottom-[5px] triangle-dec-2-filter bg-grayscale-dim lg:w-[43.3px] lg:h-[43.3px] lg:right-[7px] lg:bottom-[7px]"></div>
                            </div>
                        </div>

                        <div className="relative w-[312px] h-[300px] contact-shadow rounded-[4px] overflow-clip md:w-[510px] md:h-[490px] md:rounded-[16px] lg:w-[690px] lg:h-[660px]">
                            <div className="relative">
                                <img src="assets/contact_bg.png" alt="contact_bg_pic" />
                            </div>

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
                    </motion.div>
                    <button className="main-button button-shadow-1 w-[312px] flex gap-[16px] nav-title text-[15px] h-[56px] lg:hidden">
                        <div className="">聯絡我們</div>
                        <img className="" src="assets/icon_mail_send.svg" alt="icon_mail_send" />
                    </button>
                </div>
            </div>
        </section>
    );
}
