import type { Project, ContentfulImage } from "~/types/ProjectTypes";
import type { Document } from "@contentful/rich-text-types";
import { Link } from "@remix-run/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { motion } from "framer-motion";
import styles from "./styles.css";
import { FooterSimple } from "~/components/Footer";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

interface ProjectDetailCardsProps {
    projectDetailData: Project;
}

interface ProjectDetailProps {
    projectDetailData: Project;
    recommendedProjects: Project[];
}

interface ProjectCardProps {
    content: Document;
    image: ContentfulImage;
}

interface ProjectGalleryProps {
    gallery: ContentfulImage[];
}

interface ProjectGalleryLongProps {
    galleryLong: ContentfulImage[];
}

interface OthersSectionProps {
    recommendedProjects: Project[];
}

function OthersSection({ recommendedProjects }: OthersSectionProps) {
    return (
        <section className="w-full bg-grayscale-iron">
            <div className="flex flex-col pt-[48px] pb-[80px] mx-[24px] md:mx-[40px] md:pt-[40px] md:pb-[120px] lg:pt-[80px] lg:pb-[218px] lg:mx-[120px]">
                <motion.div
                    className="flex flex-col items-start justify-cente mb-[40px] gap-[2px] md:gap-[4px] lg:gap-[8px] md:mb-[64px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
                    viewport={{ once: false, amount: 1 }}
                >
                    <h3 className="text-grayscale-gainsboro">相關案例</h3>
                    <div className="en-h4 lg:text-[24px] text-primary uppercase">others</div>
                </motion.div>
                <div className="flex flex-wrap justify-center gap-[24px] md:items-cente">
                    {recommendedProjects.map((project, idx) => {
                        if (idx === 0) {
                            return (
                                <Link key={idx} to={`/projects/${project.tag}/${project.fields.slug}`}>
                                    <motion.div
                                        className="relative card-shadow rounded-[12px] flex justify-center overflow-clip w-[312px] md:flex-col md:w-[332px] lg:flex-row lg:w-[792px] lg:h-[377px]"
                                        initial={{ opacity: 0 }}
                                        whileInView={{
                                            opacity: 1,
                                            transition: { duration: 0.5 },
                                        }}
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
                                            <h6 className="text-grayscale-gainsboro lg:hidden">
                                                {project.fields.title}
                                            </h6>
                                            <h5 className="hidden text-grayscale-gainsboro lg:block">
                                                {project.fields.title}
                                            </h5>
                                            <div className="flex justify-between items-center">
                                                <button className="body-3 w-fit py-[8px] px-[16px] bg-grayscale-dark text-grayscale-light rounded-[128px]">
                                                    {project.fields.category}
                                                </button>
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
                        }
                        return (
                            <Link key={idx} to={`/projects/${project.tag}/${project.fields.slug}`}>
                                <motion.div
                                    className="relative card-shadow rounded-[12px] flex justify-center overflow-clip w-[312px] md:flex-col md:w-[332px] lg:w-[384px]"
                                    initial={{ opacity: 0 }}
                                    whileInView={{
                                        opacity: 1,
                                        transition: { delay: 0.2, duration: 0.5 },
                                    }}
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
                                        <h6 className="text-grayscale-gainsboro md:min-h-[56px]">
                                            {project.fields.title}
                                        </h6>
                                        <div className="flex justify-between items-center">
                                            <button className="body-3 w-fit py-[8px] px-[16px] bg-grayscale-dark text-grayscale-light rounded-[128px]">
                                                {project.fields.category}
                                            </button>
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
            </div>
        </section>
    );
}

function ProjectGalleryLong({ galleryLong }: ProjectGalleryLongProps) {
    return (
        <div className="flex flex-col gap-[16px] lg:gap-[24px]">
            {galleryLong.map((img, idx) => {
                return (
                    <div
                        key={idx}
                        className="w-full h-[120px] flex justify-center items-center rounded-[12px] bg-grayscale-gray md:rounded-[16px] md:h-[246.5px] lg:h-[430px]"
                    >
                        <motion.img
                            className="object-scale-down w-full h-full"
                            src={`https:${img.fields.file.url}`}
                            alt={img.fields.title}
                            initial={{ opacity: 0, scale: 1.2 }}
                            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
                            viewport={{ once: false, amount: 0.5 }}
                        />
                    </div>
                );
            })}
        </div>
    );
}

function ProjectGallery({ gallery }: ProjectGalleryProps) {
    return (
        <div className="w-full flex flex-col gap-[16px] md:flex-row lg:[24px]">
            {gallery.map((img, idx) => {
                return (
                    <div
                        key={idx}
                        className="w-full h-[120px] rounded-[12px] overflow-hidden md:rounded-[16px] md:h-[246.5px] lg:h-[430px]"
                    >
                        <motion.img
                            className="object-cover w-full h-full"
                            src={`https:${img.fields.file.url}`}
                            alt={img.fields.title}
                            initial={{ opacity: 0, scale: 1.2 }}
                            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
                            viewport={{ once: false, amount: 0.5 }}
                        />
                    </div>
                );
            })}
        </div>
    );
}

function ProjectCardReverse({ content, image }: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-[24px] md:flex-row lg:gap-[124px]">
            <motion.div
                className="flex flex-col gap-[9.17px] md:basis-[50%] lg:gap-[16px] order-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
                viewport={{ once: false, amount: 0.5 }}
            >
                <div className="body-2 text-grayscale-light content">{documentToReactComponents(content)}</div>
            </motion.div>
            <div className="w-full flex justify-center items-center bg-grayscale-gray rounded-[12px] md:basis-[50%] order-1 md:h-[246.5px] lg:h-[430px]">
                <motion.img
                    className="object-scale-down w-full h-full"
                    src={`https:${image.fields.file.url}`}
                    alt={image.fields.title}
                    initial={{ opacity: 0, scale: 1.2 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.8 } }}
                    viewport={{ once: false, amount: 0.5 }}
                />
            </div>
        </div>
    );
}

function ProjectCard({ content, image }: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-[24px] md:flex-row lg:gap-[124px]">
            <motion.div
                className="flex flex-col gap-[9.17px] md:basis-[50%] lg:gap-[16px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
                viewport={{ once: false, amount: 0.5 }}
            >
                <div className="body-2 text-grayscale-light content">{documentToReactComponents(content)}</div>
            </motion.div>
            {image ? (
                <motion.div className="w-full flex justify-center items-center bg-grayscale-gray rounded-[12px] md:basis-[50%] md:h-[246.5px] lg:h-[430px]">
                    <motion.img
                        className="object-scale-down w-full h-full"
                        src={`https:${image.fields.file.url}`}
                        alt={image.fields.title}
                        initial={{ opacity: 0, scale: 1.2 }}
                        whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.8 } }}
                        viewport={{ once: false, amount: 0.5 }}
                    />
                </motion.div>
            ) : null}
        </div>
    );
}

function ProjectDetailCards({ projectDetailData }: ProjectDetailCardsProps) {
    const {
        contentLeft,
        contentRight,
        imageLeft,
        imageRight,
        gallery,
        galleryLong,
        extraContentLeft,
        extraContentRight,
        extraImageRight,
        extraImageLeft,
    } = projectDetailData.fields;
    return (
        <section className="w-full bg-grayscale-dim">
            <div className="container">
                <div className="flex flex-col justify-center items-center py-[48px] mx-[24px] gap-[64px] md:mx-[40px] md:py-[80px] md:gap-[80px] lg:py-[160px] lg:mx-[120px] lg:gap-[120px]">
                    {contentLeft ? <ProjectCard content={contentLeft} image={imageRight} /> : null}
                    {contentRight ? <ProjectCardReverse content={contentRight} image={imageLeft} /> : null}
                    <div className="w-full flex flex-col gap-[16px] lg:gap-[24px]">
                        {gallery ? <ProjectGallery gallery={gallery} /> : null}
                        {galleryLong ? <ProjectGalleryLong galleryLong={galleryLong} /> : null}
                    </div>
                    {extraContentLeft ? <ProjectCard content={extraContentLeft} image={extraImageRight} /> : null}
                    {extraContentRight ? (
                        <ProjectCardReverse content={extraContentRight} image={extraImageLeft} />
                    ) : null}
                </div>
            </div>
        </section>
    );
}

export function ProjectDetail({ projectDetailData, recommendedProjects }: ProjectDetailProps) {
    const { title, category, featuredImage, type, partner, description, introduce, flow } = projectDetailData.fields;
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
                            <h2 className="text-grayscale-gainsboro text-center lg:text-left">{title}</h2>
                            <button className="body-3 flex justify-center items-center py-[8px] px-[16px] bg-grayscale-dark rounded-[128px] text-grayscale-light hover:bg-secondary-spotlight hover:text-grayscale-iron">
                                {category}
                            </button>
                        </div>
                        {/* Project Image */}
                        <div className="w-full flex justify-center items-center lg:basis-[57.5%] lg:flex-shrink-0 lg:ml-[126px]">
                            <img
                                className="w-full object-cover rounded-[12px] md:w-[510px] md:rounded-[16px] lg:w-full"
                                src={`https:${featuredImage.fields.file.url}`}
                                alt={`${featuredImage.fields.title}`}
                            />
                        </div>
                    </div>
                    {/* Project Category */}
                    <div className="w-full flex flex-col gap-[16px] lg:gap-[24px] lg:flex-row lg:flex-wrap">
                        <div className="flex flex-col gap-[16px] md:flex-row lg:flex-col lg:basis-[40.5%]">
                            <motion.div
                                className="flex flex-col basis-1/3 p-[24px] gap-[12px] bg-grayscale-dim rounded-[12px] project-detail-shadow-1 md:p-[32px] md:gap-[16px] lg:flex-row lg:items-center lg:gap-[40px]"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
                                viewport={{ once: false, amount: 1 }}
                            >
                                <div className="body-3 text-grayscale-light flex-shrink-0">專案類型</div>
                                <div className="body-2 text-white">{type}</div>
                            </motion.div>
                            <motion.div
                                className="flex flex-col basis-1/3 p-[24px] gap-[12px] bg-grayscale-dim rounded-[12px] project-detail-shadow-1 md:p-[32px] md:gap-[16px] lg:flex-row lg:items-center lg:gap-[40px]"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
                                viewport={{ once: false, amount: 1 }}
                            >
                                <div className="body-3 text-grayscale-light flex-shrink-0">合作單位</div>
                                <div className="body-2 text-white">{partner}</div>
                            </motion.div>
                            <motion.div
                                className="flex flex-col basis-1/3 p-[24px] gap-[12px] bg-grayscale-dim rounded-[12px] project-detail-shadow-1 md:p-[32px] md:gap-[16px] lg:flex-row lg:items-center lg:gap-[40px]"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
                                viewport={{ once: false, amount: 1 }}
                            >
                                <div className="body-3 text-grayscale-light flex-shrink-0">專案內容</div>
                                <div className="body-2 text-white">{description}</div>
                            </motion.div>
                        </div>
                        {/* Project Introduce */}
                        <motion.div
                            className="flex flex-col p-[24px] gap-[12px] bg-grayscale-dim rounded-[12px] project-detail-shadow-1 md:p-[32px] md:gap-[16px] lg:basis-[57.5%] lg:gap-[24px]"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
                            viewport={{ once: false, amount: 0.8 }}
                        >
                            <div className="body-3 text-grayscale-light">專案介紹</div>
                            {/*Border*/}
                            <div className="relative w-full">
                                <div className="w-full bg-grayscale-dim before:bg-grayscale-dim after:bg-grayscale-dim border-arrow"></div>
                            </div>
                            {/*Content*/}
                            <div className="flex flex-col gap-[8px] md:w-2/3 md:gap-[24px] md:grid md:grid-cols-2 lg:w-full">
                                {introduce.map((int, idx) => {
                                    return (
                                        <div key={idx} className="flex items-center gap-[8px] md:gap-[16px]">
                                            <div className="en-body-1 text-primary">/{idx + 1}</div>
                                            <div className="body-2 text-white">{int}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                        {/* Project Process */}
                        <motion.div
                            className="flex flex-col w-full p-[24px] pr-0 gap-[12px] md:gap-[16px] lg:gap-[24px] bg-grayscale-dim rounded-[12px] project-detail-shadow-1"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
                            viewport={{ once: false, amount: 1 }}
                        >
                            <div className="body-3 text-grayscale-light">專案流程</div>
                            {/*Border*/}
                            {/*TODO:strech all over*/}
                            <div className="relative w-[96%]">
                                <div className="w-full bg-grayscale-dim before:bg-grayscale-dim after:bg-grayscale-dim border-arrow"></div>
                            </div>
                            {/*Flow*/}
                            <div className="w-full overflow-x-scroll custom-projectdetail-scrollbar">
                                <div className="flex justify-start items-center gap-[16px] min-w-[1200px]">
                                    {flow.map((_flow, idx) => {
                                        const flowOrder = String.fromCharCode(65 + idx);
                                        return (
                                            <motion.div
                                                key={idx}
                                                className="flex items-center gap-[16px] process-hidden"
                                                initial={{ opacity: 0 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    transition: { delay: (idx + 1) * 0.15, duration: 0.5 },
                                                }}
                                                viewport={{ once: false, amount: 1 }}
                                            >
                                                <div className="flex flex-col w-[109px] h-[122px] py-[16px] px-[20px] gap-[8px] border-[1px] border-solid border-grayscale-light/50 rounded-[16px]">
                                                    <div className="en-minimum text-grayscale-silver">{flowOrder}</div>
                                                    <div className="body-3 text-grayscale-gainsboro">{_flow}</div>
                                                </div>
                                                <img
                                                    className="w-[6px] h-[12px]"
                                                    src="/assets/next_r.png"
                                                    alt="next_slide_icon"
                                                />
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <ProjectDetailCards projectDetailData={projectDetailData} />
            <div className="container">
                <OthersSection recommendedProjects={recommendedProjects} />
            </div>
            <FooterSimple />
        </section>
    );
}
