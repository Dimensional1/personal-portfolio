import React from "react";
import Blog from "./BlogComp";

function BlogMain() {
  return (
    <>
      <div className=" w-full bg-[#080808]  ">
        <div className="text-center pt-5 ">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 pb-4 text-lg leading-8 text-gray-600 ">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className=" flex flex-wrap justify-evenly">
          <div className="">
            <Blog title="My blog" Published="31-october-2023"  img="src\assets\my-blog .jpg"/>
          </div>
          <div className="">
            <Blog title="Good designer practice" Published="31-September-2023" img="src\assets\good-design.jpg"/>
          </div>
          <div className="">
            <Blog  title="How to use Chat GPT" img="src\assets\chatgpt.jpg"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogMain;
