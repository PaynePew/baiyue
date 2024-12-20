import type { PartnerData } from "~/types/PartnerTypes";
import type { Project } from "~/types/ProjectTypes";
import { useMemo } from "react";
import { useLoaderData } from "react-router";
import { client } from "~/contentful.server";
import { LandingPage } from "~/pages/LandingPage";

export { links } from "~/pages/LandingPage";

interface ProjectTab {
    title: string;
    tag: string;
}

const projectTab: readonly ProjectTab[] = [
    { title: "住宅", tag: "residence" },
    { title: "辦公", tag: "office" },
    { title: "教育", tag: "education" },
    { title: "工業", tag: "industry" },
    { title: "停車場", tag: "parking" },
    { title: "營區", tag: "military" },
    { title: "其他", tag: "others" },
];

export const loader = async () => {
    const partnersEntries = await client.getEntries({ content_type: "partners" });
    const projectsEntries = await client.getEntries({ content_type: "projects" });

    if (!partnersEntries || !projectsEntries) {
        throw new Response("Not Found", { status: 404 });
    }

    let featuredProjects = projectsEntries.items
        .sort((a, b) => ((b.fields.order as number) || 0) - ((a.fields.order as number) || 0))
        .slice(0, 4);

    const updatedFeaturedProjects = featuredProjects.map(_project => {
        const category = _project.fields.category;
        if (Array.isArray(category) && category.length > 0) {
            const matchingTitleProject = projectTab.find(_tab => _tab.title === category[0]);
            return matchingTitleProject
                ? { ..._project, tag: matchingTitleProject.tag, tagTitle: matchingTitleProject.title }
                : { ..._project };
        }
        return { ..._project };
    });
    return [partnersEntries.items, updatedFeaturedProjects];
};

type LoaderData = [PartnerData[], Project[]];

export default function LandingPageIndex() {
    const [partnersData, featuredProjects] = useLoaderData() as LoaderData;
    const sortedPartnersData = useMemo(() => {
        if (Array.isArray(partnersData) && partnersData.length > 0) {
            return [...partnersData].sort((a, b) => b.fields.order - a.fields.order);
        }
        return [];
    }, [partnersData]);
    return <LandingPage partnersData={sortedPartnersData} featuredProjects={featuredProjects} />;
}
