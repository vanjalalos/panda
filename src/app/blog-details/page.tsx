import BlogDetailsMain from "@/components/blogDetails/BlogDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";

const BlogDetails = () => {

    const id:number =  1

    return (
        <>
            <Wrapper>
                <main>
                    <BlogDetailsMain id={id} />
                </main>
            </Wrapper>
        </>
    );
}

export default BlogDetails