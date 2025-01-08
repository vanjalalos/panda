import ProjectDetailsMain from "@/components/projectDetails/ProjectDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";

const ProjectDetails = () => {

    const id:number =  1

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

export default ProjectDetails