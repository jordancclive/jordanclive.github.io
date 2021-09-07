/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "@devpanther/gatsby-theme-minimal-blog/src/components/layout"
import SEO from "./seo"

type PageProps = {
    data: {
        page: {
            title: string,
            slug: string,
            excerpt: string,
            body: string,
            banner?: string,
            description?: string
        }
    },
    [key: string]: any
}

const Page = ({ data: { page } }: PageProps) =>
{
    console.log(page)
    return (
        <Layout>
            <SEO
                title={page.title}
                description={page.description ? page.description : page.excerpt}
                image={page.banner ? page.banner : undefined}
                pathname={page.slug}
            />
            <Heading as="h1" variant="styles.h1">
                {page.title}
            </Heading>
            <section sx={{ my: 5, variant: `layout.content` }}>
                <MDXRenderer>{page.body}</MDXRenderer>
            </section>
        </Layout>
    )
};

export default Page
