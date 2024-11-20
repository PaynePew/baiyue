import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { client } from "~/contentful.server";
import { ProjectDetail } from "~/pages/ProjectPage/ProjectDetail";
export { links } from "~/pages/ProjectPage/ProjectDetail";

export const loader = async ({ params }: LoaderArgs) => {
    const slug = params.projectId;
    const response = await client.getEntries({ content_type: "projects", "fields.slug": slug });
    const [entry] = response.items;
    const entries = await client.getEntries({ content_type: "projects" });

    if (!entry || !entries) {
        throw new Response("Not Found", { status: 404 });
    }

    return [entry.fields, entries.items];
};

export default function ProjectDetailRoute() {
    const projectDetailData = useLoaderData()[0];
    const projectsData = useLoaderData()[1];
    return <ProjectDetail projectDetailData={projectDetailData} projectsData={projectsData} />;
}
