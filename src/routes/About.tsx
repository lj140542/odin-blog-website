import { useLayoutEffect } from "react";
import { AboutCard } from "@/components/AboutCard"

function About() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div id="about" className="flex flex-col w-full gap-16 max-w-screen-xl py-12 px-12 bg-secondary text-secondary-foreground text-left
       lg:rounded lg:shadow-sm lg:mx-4">
      <h1 className="text-[2rem] font-medium">About the Odin Blog</h1>
      <section className="flex flex-col gap-4">
        <h2 className="py-3">What is this website</h2>
        <p>This website is part of an assignment in The Odin Project, aiming to create a full-stack Blog.
          This project is a great way to practice and see the benefits of creating an API only-backend.
          The important exercise here was to set up the API and access it from the outside to demonstrate the power and flexibility of separating the back-end code from the front-end code.
          To achieve this, I had to create one back-end API and two front-ends websites.
          As said in The Odin Project: it is set up that way, because we can.
          Disclaimer: All posts are lorem ipsum.
        </p>
        <p>One project.<br />Three parts.</p>
        <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 justify-between gap-8 py-4 text-center">
          <AboutCard className="bg-primary text-primary-foreground" spanContent="01">
            <h3>Website</h3>
            <p>This first front-end sites is for people to read and comment on posts.</p>
          </AboutCard>
          <AboutCard className="bg-accent text-accent-foreground" spanContent="02">
            <h3>API</h3>
            <p>This back-end part.</p>
          </AboutCard>
          <AboutCard className="bg-popover text-popover-foreground" spanContent="03">
            <h3>CMS</h3>
            <p>This second front-end sites is just for writing, editing and publishing posts.</p>
          </AboutCard>
        </div>
        <p>Find out more about this specific project on this <a href="https://www.theodinproject.com/lessons/nodejs-blog-api" target="_blank" className="underline">page</a>.</p>
      </section>

      <section className="flex flex-col gap-4">
        <h2>What is the Odin Project</h2>
        <p>The Odin Project is one of those "What I wish I had when I was learning" resources. Not everyone has access to a computer science education or the funds to attend an intensive coding school and neither of those is right for everyone anyway. This project is designed to fill in the gap for people who are trying to hack it on their own but still want a high quality education.</p>
      </section>

      <section className="flex flex-col gap-4">
        <h2>Links</h2>
        <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-8 py-4 text-center">
          <a href="https://github.com/lj140542" target="_blank" className="cursor-pointer">
            <AboutCard className="bg-primary text-primary-foreground" spanBg="bg-odinproject">
              <h3>The Odin Project</h3>
              <p>Click to visit the Odin Project website.</p>
            </AboutCard>
          </a>
          <a href="https://www.theodinproject.com/" target="_blank" className="cursor-pointer">
            <AboutCard className="bg-accent text-accent-foreground" spanBg="bg-github">
              <h3>GitHub</h3>
              <p>Click to visit my Github page.</p>
            </AboutCard>
          </a>
        </div>
      </section>
    </div >
  )
}

export default About;