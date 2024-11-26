import { Link } from "@remix-run/react";
import { useState } from "react";
import { motion } from "framer-motion";
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
    { title: "全部", tag: "all" },
    { title: "住宅", tag: "residence" },
    { title: "辦公", tag: "office" },
    { title: "教育", tag: "education" },
    { title: "工業", tag: "industry" },
    { title: "停車場", tag: "parking" },
    { title: "營區", tag: "military" },
    { title: "其他", tag: "others" },
];

function ProjectsList({ projectsData }) {
    return (
        <div className="flex flex-wrap justify-center gap-[24px] md:flex-row md:flex-wrap md:justify-center md:items-center">
            {projectsData.map((project, idx) => {
                if (idx === 0) {
                    return (
                        <Link key={idx} to={`/projects/${project.tag}/${project.fields.slug}`}>
                            <motion.div
                                className="relative card-shadow rounded-[12px] flex justify-center overflow-clip w-[312px] md:flex-col md:w-[332px] lg:flex-row lg:w-[792px] lg:h-[377px]"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, transition: { duration: 1 } }}
                                viewport={{ once: false, amount: 0.5 }}
                            >
                                <div className="shrink-0 w-[116px] bg-white md:w-full md:h-[157px] lg:h-full lg:w-[512px]">
                                    <img
                                        className="object-cover w-full h-full"
                                        src={`https:${project.fields.thumbnail.fields.file.url}`}
                                        alt={`${project.fields.thumbnail.fields.title}`}
                                    />
                                </div>
                                <div className="flex flex-col gap-[16px] p-[24px] lg:p-[40px] lg:h-full lg:justify-between">
                                    <h6 className="text-grayscale-gainsboro lg:hidden">{project.fields.title}</h6>
                                    <h5 className="hidden text-grayscale-gainsboro lg:block">{project.fields.title}</h5>
                                    <div className="flex justify-between items-center">
                                        <button className="body-3 w-fit py-[8px] px-[16px] bg-grayscale-dark text-grayscale-light rounded-[128px]">
                                            {project.fields.category}
                                        </button>
                                        <img
                                            className="hidden cursor-pointer w-[38px] md:h-[11px] md:block"
                                            src="/assets/arrow_r.png"
                                            alt="arrorw_r_pic"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    );
                }
                return (
                    <Link key={idx} to={`/projects/${project.tag}/${project.fields.slug}`}>
                        <motion.div
                            className="relative card-shadow rounded-[12px] flex justify-center overflow-clip w-[312px] md:flex-col md:w-[332px] lg:w-[384px]"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 1 } }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <div className="shrink-0 w-[116px] bg-white md:w-full md:h-[157px] lg:h-[220px]">
                                <img
                                    className="object-cover w-full h-full"
                                    src={`https:${project.fields.thumbnail.fields.file.url}`}
                                    alt={`${project.fields.thumbnail.fields.title}`}
                                />
                            </div>
                            <div className="flex flex-col gap-[16px] p-[24px]">
                                <h6 className="text-grayscale-gainsboro md:min-h-[56px]">{project.fields.title}</h6>
                                <div className="flex justify-between items-center">
                                    <button className="body-3 w-fit py-[8px] px-[16px] bg-grayscale-dark text-grayscale-light rounded-[128px]">
                                        {project.fields.category}
                                    </button>
                                    <img
                                        className="hidden cursor-pointer w-[38px] md:h-[11px] md:block"
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

export function ProjectPage({ projectsData }) {
    const projectPerLoad = 14;
    const [data, setData] = useState(projectsData.slice(0, projectPerLoad));
    const [count, setCount] = useState(projectPerLoad);

    const handleLoadMore = () => {
        const start = count;
        const end = start + projectPerLoad;
        const nextData = projectsData.slice(start, end);
        setData(prevData => [...prevData, ...nextData]);
        setCount(end);
    };
    return (
        <section className="w-full bg-grayscale-iron">
            <section className="container relative">
                {/*Decoration Square-Bottom Left*/}
                <div className="hidden absolute bottom-[-160px] left-0 bg-grayscale-iron square-shadow-contact lg:inline-block w-[386px] h-[328px]" />
                {/*Decoration Triangle-Bottom Left*/}
                <div className="hidden absolute z-10 bg-primary rotate-180 lg:inline-block bottom-[-73px] left-[359px] triangle-dec-primary w-[48px] h-[48px]" />
                {/*ProjectPage Content*/}
                <div className="flex flex-col pt-[141px] mx-[24px] mb-[104px] gap-[32px] md:mx-[40px] md:pt-[206px] md:mb-[136px] md:gap-[48px] lg:pt-[336px] lg:mx-[120px] lg:mb-[176px] lg:gap-[64px]">
                    <div className="flex justify-between items-end">
                        <div className="flex flex-col items-start justify-center gap-[4px] md:gap-[8px]">
                            <div className="display-1 text-grayscale-gainsboro">工程實績</div>
                            <div className="en-h2 text-primary uppercase">PROJECT</div>
                        </div>
                        <div className="hidden lg:flex gap-[24px] nav-title text-grayscale-light justify-center items-center cursor-pointer">
                            <div className="py-[8px] border-b-[1px] hover:text-grayscale-light">首頁</div>
                            <span className="w-[0px] h-[16px] border-[1px] border-solid border-grayscale-dark"></span>
                            <div className="py-[8px] opacity-50 hover:text-grayscale-light hover:opacity-100">
                                工程實績
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full overflow-x-scroll overflow-y-hidden custom-project-scrollbar flex justify-start items-center h-[94px] md:h-[111px]">
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
                        <div className="absolute flex justify-start items-center gap-[12px]">
                            {projectTab.map(({ title, tag }) => {
                                if (tag === "all") {
                                    return (
                                        <Link
                                            key={title}
                                            to={`/projects/`}
                                            className="button-shadow-2 flex justify-center items-center w-[80px] h-[47px] bg-grayscale-iron rounded-[24px] body-2 text-grayscale-light hover:bg-secondary-spotlight hover:text-grayscale-iron"
                                        >
                                            {title}
                                        </Link>
                                    );
                                }
                                return (
                                    <Link
                                        to={`/projects/${tag}`}
                                        key={title}
                                        className="button-shadow-2 flex justify-center items-center w-[80px] h-[47px] bg-grayscale-iron rounded-[24px] body-2 text-grayscale-light hover:bg-secondary-spotlight hover:text-grayscale-iron"
                                    >
                                        {title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <ProjectsList projectsData={data} />
                    {count < projectsData.length && (
                        <motion.div
                            className="flex en-body-1 md:mt-[16px] text-grayscale-light justify-center items-center cursor-pointer"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 1 } }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <div
                                className="py-[8px] border-b-[1px] hover:text-grayscale-light uppercase"
                                onClick={handleLoadMore}
                            >
                                load more
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
            <FooterSimple />
        </section>
    );
}
