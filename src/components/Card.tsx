import { Post } from "@/types";
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom";

interface CardProps {
  className: string,
  post: Post,
  wrapperClass?: string,
  cardClass?: string,
}

function Card({ className, post, wrapperClass, cardClass }: CardProps) {
  return (
    <div key={post._id} className={`${className} rounded-2xl duration-500 z-[1] hover:rotate-3 hover:scale-[1.01] hover:duration-500 ${wrapperClass}`}>
      <Link to={`posts/${post._id}`} className={`${className} card ${cardClass}`}>
        <div className="card-title">{post.title}</div>
        <div className="flex h-5 items-center gap-2 text-sm">
          {post.author.firstname + ' ' + post.author.lastname}
          <Separator className="bg-current opacity-50" orientation="vertical" />
          {new Date(post.timestamp).toLocaleDateString("en-US")}
        </div>
      </Link>
    </div>
  )
}

export { Card };