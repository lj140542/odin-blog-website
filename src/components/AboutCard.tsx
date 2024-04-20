import { ReactNode } from "react"

interface AboutCardProps {
  children: ReactNode,
  className: string,
  spanContent?: string,
  spanBg?: string,
}

function AboutCard({ children, className, spanContent, spanBg }: AboutCardProps) {
  return (
    <div className={`about-card grid relative grid-rows-[auto_1fr] items-center 
      w-full h-full p-8 rounded-2xl ${className}`}>
      <span className={`absolute flex justify-center left-0 top-2 w-full min-h-12 
        bg-center bg-no-repeat bg-12 opacity-20 text-6xl ${spanBg}`}>
        {spanContent}
      </span>
      {children}
    </div>
  )
}

export { AboutCard };