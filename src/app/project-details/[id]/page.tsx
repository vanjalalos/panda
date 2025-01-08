import ProjectDetailsMain from "@/components/projectDetails/ProjectDetailsMain";
import projects from "@/data/project-data";
import Wrapper from "@/layout/DefaultWrapper";

const ProjectDetailsDynamic = ({ params }: { params: { id: number } }) => {
    const id = params.id
    const project = projects.find(item => item.id == id)
    if (!project) {
        return <p>Loadding..</p>
    }
    return (
        <>
            <Wrapper>
                <main>
                    <ProjectDetailsMain id={id} />
                </main>
            </Wrapper>
        </>
    );
}

export default ProjectDetailsDynamic