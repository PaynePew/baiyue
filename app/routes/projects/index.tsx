import { client } from "~/contentful.server";
import { useLoaderData } from "react-router";
import { ProjectPage } from "~/pages/ProjectPage";
export { links } from "~/pages/ProjectPage";
export { ProjectPage } from "~/pages/ProjectPage";

export const loader = async () => {
    const entries = await client.getEntries({ content_type: "projects" });
    if (!entries) {
        throw new Response("Not Found", { status: 404 });
    }
    return entries.items;
};

export default function ProjectPageIndex() {
    const projectsData = useLoaderData();
    return <ProjectPage projectsData={projectsData} />;
}
