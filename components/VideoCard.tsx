import Head from 'next/head';
import React from 'react';

function VideoCard() {
  return (
    <div>
      <div className="max-w-4xl flex flex-col font-ubuntu my-5">
        <h1 className="font-bold text-center font-hanson text-2xl text-[#00008B] underline">
          Platinum Discoveries
        </h1>
        <p className="my-4">
          Success Unveiled: Empowering Students, Graduates, and Small Business
          Owners for Excellence.
        </p>
      </div>
      <div className="aspect-w-16 aspect-h-9">
        {/* <iframe
          src="https://www.youtube.com/embed/r9jwGansp1E"
          //   frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          //   allowfullscreen
        ></iframe> */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SSAVUFoJSF0"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoCard;
