import Image from "next/image";
import Blogcard from "./componets/blogcard";
import { client } from "@/sanity/lib/client";
import { Blog } from "@/sanity/schemaTypes/blog";

export default async function Home() {
  
const query = `*[_type == 'blog'] | order(_createdAt asc){
   title,summary,Image,
   "slug":slug.current
}`
const data:Blog[] = await client.fetch(query)


  return (
    <div>
      <div className='flex justify-center mt-10'>
        <h2 className='font-bold lg:text-5xl text-3xl font-serif text-slate-800 '>Recent <span className='text-purple-700 text-opacity-90'>Blogs</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
     { data.map((data:Blog)=>(
      <Blogcard data={data} key={data.slug}/>
     ))
      }
      </div>
    </div>
  );
}
