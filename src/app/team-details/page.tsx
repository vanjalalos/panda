import TeamDetailsMain from "@/components/TeamDetails/TeamDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";

const TeamDetails = () => {

    const id:number =  1

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

export default TeamDetails