import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'

function Footer() {
  return (
    <footer className="flex items-center justify-center h-32 border-t border-t-yellow-500">
      <a className="inline-flex items-center gap-2" href="https://github.com/lj140542/odin-blog-website">
        <Avatar className='w-6 h-6'>
          <AvatarImage src='https://github.com/github.png'></AvatarImage>
          <AvatarFallback>GH</AvatarFallback>
        </Avatar>
        Jonathan Lefebvre
      </a>
    </footer>
  )
}

export default Footer;