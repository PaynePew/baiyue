import { useMemo } from "react";
import { client } from "~/contentful.server";
import { useLoaderData } from "react-router";
import { ProjectPage } from "~/pages/ProjectPage";
import type { LoaderArgs } from "@remix-run/node";
export { links } from "~/pages/ProjectPage";
export { ProjectPage } from "~/pages/ProjectPage";

const projectTab = [
    { title: "住宅", tag: "residence" },
    { title: "辦公", tag: "office" },
    { title: "教育", tag: "education" },
    { title: "工業", tag: "industry" },
    { title: "停車場", tag: "parking" },
    { title: "營區", tag: "military" },
    { title: "其他", tag: "others" },
];

export const loader = async ({ params }: LoaderArgs) => {
    const tag = params.categoryId;
    const [filterTab] = projectTab.filter(_tab => _tab.tag === tag);

    if (!filterTab) {
        throw new Response("Not Found", { status: 404 });
    }

    const entries = await client.getEntries({ content_type: "projects" });

    if (!entries) {
        throw new Response("Not Found", { status: 404 });
    }
    const updatedEntries = entries.items.map(_project => {
        const matchingTitleProject = projectTab.find(_tab => _tab.title === _project.fields.category[0]);
        return matchingTitleProject ? { ..._project, tag: matchingTitleProject.tag } : { ..._project };
    });
    const filterProjectsDataByTag = updatedEntries.filter(_project => _project.fields.category[0] == filterTab.title);
    return filterProjectsDataByTag;
};

export default function ProjectPageIndex() {
    const projectsData = useLoaderData();
    const sortedProjectsData = useMemo(() => {
        return [...projectsData].sort((a, b) => b.fields.order - a.fields.order);
    }, [projectsData]);
    return <ProjectPage projectsData={sortedProjectsData}></ProjectPage>;
}
