import { useLoaderData } from "@remix-run/react";
import { useMemo } from "react";
import type { LoaderArgs } from "@remix-run/node";
import { client } from "~/contentful.server";
import { ProjectDetail } from "~/pages/ProjectPage/ProjectDetail";
export { links } from "~/pages/ProjectPage/ProjectDetail";

function getRecommendedProjects(currentProject, allProjects) {
    const { slug, category } = currentProject;
    //篩選相關文章，以資料庫最新文章推薦
    const recommended = allProjects.filter(
        project =>
            project.fields.slug !== slug && project.fields.category.some(_category => _category.includes(category)),
    );
    //如果同類型文章少於兩篇，則隨機推薦文章
    if (recommended.length < 2) {
        const shuffled = [...allProjects].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 2);
    }
    //隨機打亂並限制數量
    return recommended.sort(() => Math.random() - 0.5).slice(0, 2);
}

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
    const recommendedProjects = useMemo(() => {
        return getRecommendedProjects(projectDetailData, projectsData);
    }, [projectDetailData, projectsData]);

    return <ProjectDetail projectDetailData={projectDetailData} recommendedProjects={recommendedProjects} />;
}
