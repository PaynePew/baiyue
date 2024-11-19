import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { client } from "~/contentful.server";
import { ProjectDetail } from "~/pages/ProjectPage/ProjectDetail";
export { links } from "~/pages/ProjectPage/ProjectDetail";

export const loader = async ({ params }: LoaderArgs) => {
    const slug = params.projectId;
    const response = await client.getEntries({ content_type: "projects", "fields.slug": slug });
    const [entry] = response.items;

    if (!entry) {
        throw new Response("Not Found", { status: 404 });
    }

    return entry.fields;
};

export default function ProjectDetailRoute() {
    const projectDetailData = useLoaderData();
    return <ProjectDetail projectDetailData={projectDetailData} />;
}
