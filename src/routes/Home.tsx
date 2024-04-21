import { Link } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import { Card } from "@/components/Card";
import { Skeleton } from "@/components/ui/skeleton";

function Home() {
  const [posts, setPosts] = useState([]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/posts/last/3`, { mode: 'cors' })
      .then(response => {
        if (response.ok)
          return response.json()
        else
          throw new Error(`${response.status} ${response.statusText}`);
      })
      .then(response => { setPosts(response.posts) })
      .catch(error => { console.log(error); });
  }, []);

  return (
    <>
      <section id="hero" className="flex flex-col justify-between items-center text-center min-h-[calc(100vh-80px)] max-w-screen-lg">
        <div id="hero-text" className="mx-6 leading-tight pt-[5dvh] md:pt-[10dvh]">
          <h2 id="hero-heading" className="my-[5dvh] text-[clamp(3rem,_6vw,_5rem)]">Some random posts and comments</h2>
          <p className="text-xl">An Odin Project assignment</p>
        </div>

        <span className="inline-flex items-center gap-2 text-accent mb-[25dvh] drop-shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="animate-bounce h-6 w-6">
            <title>arrow-down-circle</title>
            <path className="fill-accent" d="M11,6V14L7.5,10.5L6.08,11.92L12,17.84L17.92,11.92L16.5,10.5L13,14V6H11M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22Z" />
          </svg>
          <p>Scroll to see the latest posts</p>
        </span>
      </section>


      <section className="wave inline-flex justify-center w-screen bg-secondary text-secondary-foreground relative pt-8 pb-16">
        <div className="card-container grid grid-rows-[1fr_auto] w-full min-h-[60dvh] self-center max-w-screen-xl gap-12 px-4">
          <div className="grid gap-6 grid-cols-1 grid-rows-3
            lg:grid-flow-col lg:grid-rows-5 lg:grid-cols-[3fr_2fr]">
            {
              posts.length == 3 ? (
                <>
                  <Card className="bg-primary/70 text-primary-foreground" post={posts[0]} wrapperClass="lg:row-span-5" />
                  <Card className="bg-accent/70 text-accent-foreground" post={posts[1]} wrapperClass="lg:row-span-2" cardClass="lg:card-secondary-row" />
                  <Card className="bg-popover/70 text-popover-foreground" post={posts[2]} wrapperClass="lg:row-span-3" cardClass="lg:card-secondary-row" />
                </>
              ) : (
                <>
                  <Skeleton className="rounded-2xl bg-primary lg:row-span-5 hover:rotate-0" />
                  <Skeleton className="rounded-2xl bg-accent lg:row-span-2 hover:rotate-0" />
                  <Skeleton className="rounded-2xl bg-popover lg:row-span-3 hover:rotate-0" />
                </>)
            }
          </div>

          <Link to="/posts" className="justify-self-end">
            <span className="inline-flex items-center gap-2 drop-shadow-md text-accent">
              <p className="relative
                after:absolute after:left-0 after:bottom-[-2px] after:w-full after:content-['']
                after:border-b-2 after:border-accent after:scale-x-0 after:hover:animate-[link-after-animation_1s_ease-in-out_150ms_1_forwards]">
                See all posts
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
                <title>arrow-right-circle</title>
                <path className="fill-accent" d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M6,13H14L10.5,16.5L11.92,17.92L17.84,12L11.92,6.08L10.5,7.5L14,11H6V13Z" />
              </svg>
            </span>
          </Link>

        </div>
      </section >
    </>
  )
}

export default Home