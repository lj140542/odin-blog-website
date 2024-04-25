import { Separator } from "@/components/ui/separator";
import { Post } from "@/types";
import { useLayoutEffect } from "react";
import { useLoaderData, Link, LoaderFunctionArgs } from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs) {
  const data = fetch(`${import.meta.env.VITE_API_URL}/posts/${params._id}`, { mode: 'cors' })
    .then(response => {
      if (response.ok)
        return response.json()
      else
        throw new Error(`${response.status} ${response.statusText}`);
    })
    .then(response => { return response.post })
    .catch(error => {
      console.log(error);
      return {};
    });

  return data;
}

export function PostPage() {
  const post = useLoaderData() as Post;

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div id="post" className="flex flex-col gap-16 max-w-[1400px] min-h-[calc(100vh-100px)] py-12 px-12 bg-secondary text-secondary-foreground text-left lg:rounded lg:shadow-sm lg:mx-4">
      <Link to="/posts" className="justify-self-end mb-[-56px]">
        <span className="inline-flex items-center gap-2 drop-shadow-md text-accent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4">
            <title>arrow-left-circle</title>
            <path className="fill-accent" d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M18,11H10L13.5,7.5L12.08,6.08L6.16,12L12.08,17.92L13.5,16.5L10,13H18V11Z" />
          </svg>
          <p className="relative text-sm
                after:absolute after:left-0 after:bottom-[-2px] after:w-full after:content-['']
                after:border-b-2 after:border-accent after:scale-x-0 after:hover:animate-[link-after-animation_1s_ease-in-out_150ms_1_forwards]">
            Go back to all posts
          </p>
        </span>
      </Link>
      <h1 className="text-5xl mb-[-32px]">{post.title}</h1>
      <div className="flex h-5 items-center gap-2 text-sm">
        {post.author.firstname + ' ' + post.author.lastname}
        <Separator className="bg-current opacity-50" orientation="vertical" />
        {new Date(post.timestamp).toLocaleDateString("en-US")}
      </div>
      <div className="whitespace-pre-line">{post.content}</div>
    </div>

  )
}