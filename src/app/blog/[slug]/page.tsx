import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from 'next-sanity'
import CommentsBox from '@/app/componets/commentbox'

export default async function BlogDetails({params: {slug}}: {params: {slug: string}}) {

  const query = ` *[_type == 'blog' && slug.current == "${slug}"]{
  title , summary , Image , content
}[0]`
  const data = await client.fetch(query)
  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-3xl xs:text-3xl lg:text-4xl font-bold text-dark dark:text-light text-center">
       {data.title}
      </h1>
       {/* Blog Summary Section */}
       <section className='flex flex-col justify-center items-center gap-y-4 lg:mt-8'>
      <h4 className="text-lg xs:text-2xl md:text-xl font-bold uppercase text-slate-800 ">
        Summary
      </h4>
      <p className="text-base md:text-xl font-semibold text-slate-600 lg:w-[900px] text-center">
      {data.summary}
      </p>
      </section>
      {/* Featured Image */}
      <div className='flex flex-col justify-center items-center'>
      <Image
        src={urlFor(data.Image).url()} 
        width={500}
        height={400}
        alt="comments in programming"
        className='rounded-md mt-7'
      /></div>
     

      {/* Main Body of Blog */}
      <section className="text-lg leading-normal mt-4 space-y-6 px-2 lg:px-10 py-5 lg:text-center font-semibold text-slate-800 lg:w-[1000px] lg:mx-auto ">
        <PortableText value={data.content}  />
      </section>
      {/* comment section */}
      <CommentsBox/>

    </article>
  )
}
