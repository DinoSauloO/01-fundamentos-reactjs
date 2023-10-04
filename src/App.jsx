import { Post } from './Post'

import './global.css'
import { Header } from './components/Header'

export function App() {

  return (
    <div>
      <Header />
      <Post
        author="Saulo Gananca"
        content="Lorem Ipsum"
      />

    </div>
  )
}