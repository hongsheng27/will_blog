import React from "react";
import PageHeader from "@/components/page-header";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="container relative max-w-6xl py-6 lg:py-10">
      <PageHeader title="About" description="Get to know more about me." />
      <hr className="my-8" />

      <div className="flex flex-col items-center space-y-6 lg:flex-row  lg:space-x-6 lg:space-y-0">
        <div className="mx-auto mt-8 w-[400px]">
          <div className="relative flex flex-col items-center gap-2 rounded-md bg-secondary px-4 py-6">
            <Image
              src={siteConfig.authorImage}
              width={82}
              height={82}
              alt={siteConfig.name}
              className="absolute -top-8 mb-4 rounded-full border bg-primary"
            />
            <h3 className="mt-8 text-lg font-semibold">{siteConfig.author}</h3>
            <p className="text-center text-sm text-muted-foreground">
              Web Developer
            </p>
            <div className="flex items-center space-x-2">
              {SOCIALS.map((social) => (
                <Link
                  key={social.label}
                  href={social.path}
                  rel="noreferrer"
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "text-primary px-0 hover:bg-primary transition-colors rounded-full p-2 size-8 bg-primary/80",
                  )}
                >
                  <social.icon className="size-6" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="flex-1 text-center text-sm text-muted-foreground lg:text-start xl:text-base">
        
        {`Hi, I'm Hung Sheng, Liu 🚀 , but you can also call me Will! I'm a front-end engineer from Taiwan`}, specializing in React.js and Web3.0 development. This is my personal blog, where I share: <br /><br />
        💻 <strong>Front-end Development:</strong> React.js, Next.js, Redux <br />
        🌐 <strong>Web3.0 Development:</strong> DApp, Wallet Implementation <br />
        🏆 <strong>LeetCode Journey:</strong> Problem-Solving Strategies & Algorithm Learning <br />
        🏄 <strong>Life & Hobbies:</strong> Rock Climbing, Surfing, Board Games <br /><br />

        I enjoy discussing technology and sharing my learning experiences, hope you find something valuable here! 😃 <br /><br />
      </p>

       
      </div>
    </div>
  );
}
