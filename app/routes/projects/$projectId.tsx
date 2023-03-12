import { useLoaderData, useParams } from "@remix-run/react";
import type { LoaderArgs, ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { ProjectDetail } from "~/pages/ProjectPage/ProjectDetail";

export { links } from "~/pages/ProjectPage/ProjectDetail";

export async function loader({ params }: LoaderArgs) {
    return json({ projectId: params.projectId });
}

export default function ProjectDetailRoute() {
    // const params = useParams();
    // const id = params.projectId;
    // console.log("id", id);
    const { projectId } = useLoaderData();
    return <ProjectDetail projectId={projectId} />;
}
