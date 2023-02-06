import { prisma } from '../server/db/client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Home({posts}){

  // Add a use effect in case the posts change when routing to the home page
  
    
  return (
    <div >

      <div style={{display:'flex', flexDirection:'column', marginLeft:30}}>
        <h1 style={{textAlign:'center'}}>Welcome to BCIT Confessions!</h1>

          <h3 style={{textAlign:'center'}}>Don't be shy, tell us about your crazy experiences at BCIT</h3>

      <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
      <Link href='/addPosts'>
        <button style={{backgroundColor:'green', borderRadius:10, height:50, width:200, marginBottom:50, fontSize: 20}}>Write a post</button>
      </Link>
      </div>
      </div>
      
      
      {posts.map((post) => (
        <div key={post.id}>
          <div style={{display:'flex', backgroundColor:'white', color:'black', marginBottom:30, marginRight:200, marginLeft:30, borderRadius:10, paddingLeft:20}}>
            <h2>{post.title}</h2>
          <p>{post.content}</p>
          </div>
        </div>
      ))}


    </div>
  )
}

export async function getServerSideProps() {
  const posts = await prisma.post.findMany()

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  }
}
