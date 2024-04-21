export interface Author {
  _id: string,
  firstname: string,
  lastname: string,
}

export interface Post {
  _id: string,
  author: Author,
  timestamp: Date,
  title: string,
  content: string,
  published?: boolean,
}