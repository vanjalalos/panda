import BlogDetailsMain from "@/components/blogDetails/BlogDetailsMain";
import blogs from "@/data/blog-data";
import Wrapper from "@/layout/DefaultWrapper";

const BlogDetailsDynamic = ({ params }: { params: { id: number } }) => {
    const id = params.id
    const blog = blogs.find(item => item.id == id)
    if (!blog) {
        return <p>Loadding..</p>
    }
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

export default BlogDetailsDynamic