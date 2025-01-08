import TeamDetailsMain from "@/components/TeamDetails/TeamDetailsMain";
import teams from "@/data/team-data";
import Wrapper from "@/layout/DefaultWrapper";

const TeamDetailsDynamic = ({ params }: { params: { id: number } }) => {
    const id = params.id
    const team = teams.find(item => item.id == id)
    if (!team) {
        return <p>Loadding..</p>
    }
    return (
        <>
            <Wrapper>
                <main>
                    <TeamDetailsMain id={id} />
                </main>
            </Wrapper>
        </>
    );
}

export default TeamDetailsDynamic