import { motion } from "framer-motion";

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

export function Partners() {
    return (
        <section className="w-full flex justify-center items-center">
            <div className="container">
                <div className="flex flex-col justify-center items-center pt-[64px] pb-[80px] mx-[24px] md:pt-[80px] md:mx-[40px] md:pb-[120px] lg:flex-row lg:gap-[161px] lg:pt-[120px] lg:mx-[120px] lg:pb-[183px] lg:justify-start lg:items-start">
                    <motion.div
                        className="flex flex-col items-center justify-center gap-[8px] mb-[40px] md:mb-[64px] lg:items-start"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
                        viewport={{ once: false, amount: 1 }}
                    >
                        <h1 className="text-grayscale-gainsboro">信賴夥伴</h1>
                        <div className="en-h3 text-primary">PARTNERS</div>
                    </motion.div>
                    {/* Todo: make seperate spotlight */}
                    <motion.div
                        className="relative lg:py-[5px] lg:overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 0 } }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <div className="flex flex-wrap gap-[24px] justify-center items-center lg:gap-[32px] lg:max-w-[792px] ">
                            {fakePartners.map(({ pic }) => {
                                return (
                                    <div
                                        key={pic}
                                        className="card-shadow flex justify-center items-center w-[140px] h-[120px] px-[13px] rounded-[16px] md:p-[6px] lg:w-[240px] lg:p-[35px] hover:bg-secondary-spotlight"
                                    >
                                        <img className="" src={`assets/${pic}.png`} alt={pic} />
                                    </div>
                                );
                            })}
                            {fakePartnersTablet.map(({ pic }) => {
                                return (
                                    <div
                                        key={pic}
                                        className="hidden card-shadow md:flex justify-center items-center w-[140px] h-[120px] px-[13px] rounded-[16px] md:p-[6px] lg:w-[240px] lg:p-[35px] hover:bg-secondary-spotlight"
                                    >
                                        <img className="" src={`assets/${pic}.png`} alt={pic} />
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
