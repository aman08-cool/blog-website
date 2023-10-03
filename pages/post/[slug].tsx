import React, { useState, useEffect, Children } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { sanityClient, urlFor } from "../../sanity";
import { GetStaticProps } from 'next';
import PortableText from 'react-portable-text';
import Comment from '../../components/Comment';

interface Props
{
  post: Post;
}


const Post = ({ post }: Props) =>
{
  const [dataset, setDataset] = useState<string | undefined>(undefined);
  const [projectId, setProjectId] = useState<string | undefined>(undefined);

  useEffect(() =>
  {
    setDataset(process.env.NEXT_PUBLIC_SANITY_DATASET || "production");
    setProjectId(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "zuyfmjj8");
  }, []);

  return (
    <div>
      <Header />
      <img className="w-full h-96 object-cover"
        src={urlFor(post.mainImage).url()!}
        alt="coverImage" />
      <div className="max-w-[70vw] mx-auto mb-10">
        <article className="w-full mx-auto p-5 bg-secondaryColor/10">
          <h1 className="font-titleFont font-medium text-[32px] text-primary border-b-[1px] border-b-cyan-800 mt-10 mb-3">{post.title}
          </h1>
          <h2 className="font-bodyFont text-[18px] text-gray-500 mb-2">
            {post.description}
          </h2>
          <div className="flex items-center gap-2">
            <div>
              <img className="rounded-full w-12 h-12 object-cover bg-red-400" src={urlFor(post.author.image).url()!} alt="authorImage" />
            </div>
            <p className="font-bodyFont text-base">
              Blog Post by <span className="font-bold text-secondaryColor">{post.author.name}</span> - Published at{" "} {new Date(post.publishedAt).toLocaleDateString('en-US')}
            </p>
          </div>
          {dataset && projectId && (
            <div className='mt-10'>
              <PortableText
                dataset={dataset}
                projectId={projectId}
                content={post.body}
                serializers={{
                  h1: (props: any) => (
                    <h1 className='text-4xl font-bold my-5 text-blue-600 font-titleFont' {...props} />
                  ),
                  h2: (props: any) => (
                    <h2 className='text-3xl font-bold my-4 text-purple-600 font-titleFont' {...props} />
                  ),
                  h3: (props: any) => (
                    <h3 className='text-2xl font-bold my-3 text-teal-600 font-titleFont' {...props} />
                  ),
                  li: ({ children }: any) => (
                    <li className='ml-4 list-disc text-gray-800'>{children}</li>
                  ),
                  link: ({ href, children }: any) => (
                    <a href={href} className='text-cyan-500 hover:text-cyan-700 hover:underline'>
                      {children}
                    </a>
                  ),
                }}
              />

            </div>
          )}
        </article>
        <hr className="max-w-lg my-5 mx-auto border[1px] border-secondaryColor" />

        {/* Adding Comments Component */}
        <Comment postId={post._id} />
        <div className='w-full flex flex-col p-10 my-10 mx-auto shadow-bgColor shadow-lg space-y-2'>
          <h3 className="text-3xl font-titleFont font-semibold">Comments</h3>
          <hr />
          {post.comments.map((comment) => (
            <div key={comment._id}>
              <p>
                <span className='text-secondaryColor'>{comment.name}</span>{" "}
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Post;

export const getStaticPaths = async () =>
{
  const query = `*[_type == "post"]{
            _id,
              slug{
              current
              }
          }`;
  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    }
  }));
  return {
    paths,
    fallback: "blocking",
  }

};

export const getStaticProps: GetStaticProps = async ({ params }) =>
{
  const query = `*[_type == "post" && slug.current == $slug][0]{
            _id,
              publishedAt,
              title,
              author ->{
                name,
                image,
              },
              "comments":*[_type == "comment" && post._ref == ^._id && approved == true],
              description,
              mainImage,
              slug,
              body
          }`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post,
    },
    revalidate: 60,
  }
}
