import { defineType, defineField, defineArrayMember } from "sanity";

export const Blog = defineType({
  name: "blog",
  title: "Blog",
  type: "document",

  fields: [
    // Title field
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    // Slug field
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),

    // Summary field
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
    }),

    // Image field
    defineField({
      name: "Image",
      title: "Image",
      type: "image",
      description: "images should be 720x400, otherwise they will be cropped",
      options: {
        hotspot: true,
      }
    }),
    // blocks field
    defineField({
        name:"content",
        title:"Content",
        type:"array",
        of:[{type:"block"}]
    })
  ],
});
