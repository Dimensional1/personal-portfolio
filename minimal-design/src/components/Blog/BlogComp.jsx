import React from 'react';

function Blog ({title = "Blog Title" , Published= "4-November-2023", img="https://via.placeholder.com/500x400" }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 w-96 flex  flex-wrap flex-col items-center">
      <img
        className="w-100 h-auto rounded-lg mb-4"
        src={img}
        alt="Blog Cover"
      />
      <div className="w-full">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-900 p-2 mt-2 bg-yellow-500 rounded">Published on: {Published}</p>
        <p className="text-gray-700 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          hendrerit ligula a nulla varius, in congue nunc pharetra. Nulla
          facilisi. Integer ultricies sagittis libero, eu sodales odio
          fringilla ut.
        </p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold  w-full p-3 rounded mt-2">
  Read more
</button>
       
      </div>
    </div>
  );
}

export default Blog;
