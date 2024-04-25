import { useLayoutEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Post } from "@/types";
import { Card } from "@/components/Card";

export async function loader() {
  const data = fetch(`${import.meta.env.VITE_API_URL}/posts`, { mode: 'cors' })
    .then(response => {
      if (response.ok)
        return response.json()
      else
        throw new Error(`${response.status} ${response.statusText}`);
    })
    .then(response => { return response.posts })
    .catch(error => {
      console.log(error);
      return {};
    });

  return data;
}

export function PostsList() {
  const Colors: string[] = ["primary", "accent", "popover"];
  let randomColor: string = "primary";
  const posts = useLoaderData() as Post[];

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div id="posts-list" className="flex flex-col gap-16 max-w-[1400px] min-h-[calc(100vh-100px)] py-12 px-4 lg:px-12 bg-secondary text-secondary-foreground text-left lg:rounded lg:shadow-sm lg:mx-4">

      <section id="posts-container" className="grid lg:grid-cols-3 auto-rows-fr gap-4">
        {posts.length ?
          posts.map((post) => {
            randomColor = Colors[Math.floor(Math.random() * 3)]
            return (
              <Card key={post._id} className={`bg-${randomColor}/70 text-${randomColor}-foreground`} post={post} />
            )
          })
          : (
            <div>Could not load posts</div>
          )
        }
      </section>
    </div>
  )
}
