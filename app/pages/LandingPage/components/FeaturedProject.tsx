import type { Project } from "~/types/ProjectTypes";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

interface FeaturedProjectProps {
    featuredProjects: Project[];
}

export function FeaturedProject({ featuredProjects }: FeaturedProjectProps) {
    return (
        <section className="w-full flex justify-center items-center">
            <div className="container">
                <div className="flex flex-col items-center max-w-[312px] gap-[48px] my-[80px] mx-[24px] md:max-w-[688px] md:gap-[64px] md:mx-[40px] lg:max-w-[1200px] lg:gap-[72px] lg:my-[113px] lg:mx-[120px] ">
                    <motion.div
                        className="flex flex-col items-center justify-center gap-[8px]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
                        viewport={{ once: false, amount: 1 }}
                    >
                        <h1 className="text-grayscale-gainsboro">近期實績</h1>
                        <div className="en-h3 text-primary">FEATURED PROJECT</div>
                    </motion.div>
                    {/* Card Project */}
                    <div className="flex flex-col gap-[24px] md:flex-row md:flex-wrap md:justify-center md:items-center md:mb-[56px]">
                        {featuredProjects.map(_project => {
                            return (
                                <motion.div
                                    className="relative card-shadow rounded-[12px] flex justify-center items-center overflow-clip md:flex-col md:even:top-[56px] md:w-[332px] md:items-start lg:w-[580px] lg:h-[459px]"
                                    key={_project.fields.order}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <Link to={`/projects/${_project.tag}/${_project.fields.slug}`}>
                                        <div className="basis-[37%] md:basis-[50%] lg:h-[324px] lg:w-full">
                                            <img
                                                className="object-cover w-full h-[167px] md:h-full"
                                                src={`https:${_project.fields.featuredImage.fields.file.url}`}
                                                alt={_project.fields.title}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-[16px] basis-[63%] p-[24px] md:basis-[50%] md:w-full lg:basis-[37%]">
                                            <h6 className="text-grayscale-gainsboro lg:hidden">
                                                {_project.fields.title}
                                            </h6>
                                            <h5 className="hidden text-grayscale-gainsboro lg:block">
                                                {_project.fields.title}
                                            </h5>
                                            <div className="flex justify-between items-center">
                                                <div className="body-3 w-fit py-[8px] px-[16px] bg-grayscale-dark text-grayscale-light rounded-[128px]">
                                                    {_project.tagTitle}
                                                </div>
                                                <img
                                                    className="hidden w-[38px] md:h-[11px] md:block"
                                                    src="assets/arrow_r.png"
                                                    alt="arrorw_r_pic"
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 1 } }}
                        viewport={{ once: false, amount: 1 }}
                    >
                        <Link
                            to="/projects"
                            className="main-button button-shadow-1 w-[312px] nav-title flex gap-[16px] text-[15px] h-[56px] md:mx-[99px] lg:w-[173px]"
                        >
                            <span className="w-[8px] h-[8px] bg-grayscale-light rounded-full"></span>
                            <div>所有實績</div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
