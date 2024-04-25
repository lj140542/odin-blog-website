import { Comment } from "@/types";
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

interface CommentProps {
  className?: string,
  comment: Comment,
}

function CommentCard({ className, comment }: CommentProps) {
  const colors: string[] = ["primary", "accent", "popover"];
  const randomColor: string = colors[Math.floor(Math.random() * 3)];

  return (
    <div className={`${className} grid grid-cols-[auto_1fr] gap-2`}>
      <Avatar className='w-8 h-8'>
        <AvatarFallback className={`bg-${randomColor} text-${randomColor}-foreground`}>{comment.author[0].toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="text-xs">{comment.author}<br />{new Date(comment.timestamp).toLocaleDateString("en-US")}</div>
      <div className="flex gap-2 text-base col-start-2">{comment.content}</div>
    </div>
  )
}

export { CommentCard };