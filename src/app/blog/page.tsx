import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import { blogs as allBlogs } from "#site/content";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const blogs = allBlogs
    .filter((blog) => blog.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <PageHeader
        title="Blog"
        description=""
      />
      <hr className="my-8" />

      {blogs.length ? (
        <div className="grid gap-10 grid-cols-1">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="group relative flex flex-col space-y-2 border-b border-[hsl(var(--muted-foreground)_/_0.5)] pb-3"
            > 
              <h2 className="text-2xl font-extrabold text-primary">
                {blog.title}
              </h2>
              {blog.description && (
                <p className="text-muted-foreground">{blog.description}</p>
              )}

              {blog.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(blog.date)}
                </p>
              )}

              <Link href={blog.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No Blogs found</p>
      )}
    </div>
  );
}
