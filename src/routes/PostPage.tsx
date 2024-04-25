import { CommentCard } from "@/components/CommentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { PostWithComments } from "@/types";
import { useLayoutEffect } from "react";
import { useLoaderData, Link, LoaderFunctionArgs, Form, ActionFunctionArgs, redirect } from "react-router-dom";



export async function loader({ params }: LoaderFunctionArgs) {
  const data = fetch(`${import.meta.env.VITE_API_URL}/posts/${params._id}`, { mode: 'cors' })
    .then(response => {
      if (response.ok)
        return response.json()
      else
        throw new Error(`${response.status} ${response.statusText}`);
    })
    .then(response => { return response })
    .catch(error => {
      console.log(error);
      return {};
    });

  return data;
}

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  if (!updates.author || !updates.content) return null;

  await fetch(`${import.meta.env.VITE_API_URL}/posts/${params._id}/comment`, {
    method: 'POST', mode: 'cors', headers: { "Content-Type": "application/json", }, body: JSON.stringify(updates)
  })
    .then(response => {
      if (!response.ok)
        throw new Error(`${response.status} ${response.statusText}`);
    })
    .catch(error => {
      console.log(error);
      return null;
    });

  return redirect('');
}

export function PostPage() {
  const { post, comments } = useLoaderData() as PostWithComments;
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <div id="post" className="flex flex-col w-full gap-16 max-w-screen-xl min-h-[calc(100vh-100px)] py-12 px-12 bg-secondary text-secondary-foreground text-left lg:rounded lg:shadow-sm lg:mx-4">
        <Link to="/posts" className="justify-self-end">
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

        {post?._id ?
          (
            <div className="flex flex-col gap-8 w-full">
              <h2 className="text-5xl">{post.title}</h2>
              <div className="flex h-5 items-center gap-2 text-sm">
                {post.author.firstname + ' ' + post.author.lastname}
                <Separator className="bg-current opacity-50" orientation="vertical" />
                {new Date(post.timestamp).toLocaleDateString("en-US")}
              </div>
              <div className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>
          ) : (<div>No post found.</div>)}
      </div >


      <div id="comments" className="flex flex-col w-full mt-4 gap-8 max-w-screen-xl py-12 px-12 bg-secondary text-secondary-foreground text-left lg:rounded lg:shadow-sm lg:mx-4">
        <h2>Comments</h2>
        <div className="flex w-full max-w-screen-md self-center">
          <Form className="flex flex-col gap-2 w-full" method="post">
            <Input className="bg-transparent placeholder:text-current/50" placeholder="Username" type="text" name="author" />
            <Textarea className="bg-transparent placeholder:text-current/50" placeholder="Comment" name="content" />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 lg:w-1/4 lg:self-end">Post comment</Button>
          </Form>
        </div>
        <Separator className="bg-primary" />
        <div className="flex flex-col w-full max-w-screen-md self-center gap-8">
          {
            comments?.length ?
              comments.map((comment) => (
                <CommentCard key={comment._id} comment={comment} />
              ))
              : (<div>No comments yet</div>)
          }
        </div>
      </div >
    </>
  )
}