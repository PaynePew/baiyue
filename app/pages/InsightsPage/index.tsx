import type { InsightData } from "~/types/InsightType";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { FooterSimple } from "~/components/Footer";
import styles from "./styles.css";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

interface InsightsListProps {
    insightsData: InsightData[];
}

function InsightsList({ insightsData }: InsightsListProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-[24px] md:flex-row md:flex-wrap md:items-center lg:gap-[40px]">
            {insightsData.map(insight => {
                return (
                    <Link key={insight.sys.id} to={`/insights/${insight.fields.slug}`}>
                        <motion.div
                            className="flex card-shadow rounded-[12px] w-[312px] overflow-clip md:rounded-[16px] md:w-[688px] lg:w-[1200px]"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <div className="shrink-0 w-[90px] md:w-[180px] lg:w-[282px] ">
                                <img
                                    className="w-full h-full object-cover"
                                    src={`https:${insight.fields.thumbnail.fields.file.url}`}
                                    alt={insight.fields.thumbnail.fields.title}
                                />
                            </div>
                            <div className="flex justify-between w-full md:px-[32px] md:pt-[24px] md:pb-[27px] lg:py-[64px] lg:px-[48px]">
                                <div className="flex flex-col gap-[4px] py-[24px] px-[20px] md:p-[0] lg:gap-[24.5px]">
                                    <div className="en-body-1 text-grayscale-light">{insight.fields.publishDate}</div>
                                    <h6 className="text-grayscale-gainsboro min-h-[56px]">{insight.fields.title}</h6>
                                    <div className="body-3 text-grayscale-light/50">{insight.fields.subtitle}</div>
                                </div>
                                <div className="flex items-center">
                                    <img
                                        className="hidden w-[38px] md:h-[11px] md:block"
                                        src="/assets/arrow_r.png"
                                        alt="arrorw_r_pic"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                );
            })}
        </div>
    );
}

export function InsightsPage({ insightsData }: InsightsListProps) {
    return (
        <section className="w-full bg-grayscale-iron">
            <section className="container">
                <div className="flex flex-col pt-[141px] mx-[24px] mb-[80px] gap-[32px] md:mx-[40px] md:pt-[206px] md:mb-[120px] md:gap-[64px] lg:pt-[336px] lg:mx-[120px] lg:mb-[149.5px] lg:gap-[64px]">
                    <div className="flex justify-between items-end">
                        <div className="flex flex-col items-start justify-center gap-[4px] md:gap-[8px]">
                            <div className="display-1 text-grayscale-gainsboro">百越觀點</div>
                            <div className="en-h2 text-primary uppercase">insights</div>
                        </div>
                        <div className="hidden lg:flex gap-[24px] nav-title text-grayscale-light justify-center items-center cursor-pointer">
                            <div className="py-[8px] border-b-[1px] hover:text-grayscale-light">首頁</div>
                            <span className="w-[0px] h-[16px] border-[1px] border-solid border-grayscale-dark "></span>
                            <div className="py-[8px] opacity-50 hover:text-grayscale-light hover:opacity-100">
                                百越觀點
                            </div>
                        </div>
                    </div>
                    <InsightsList insightsData={insightsData} />
                </div>
            </section>
            <FooterSimple />
        </section>
    );
}
