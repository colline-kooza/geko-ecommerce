/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname:["i.etsystatic.com"] ,
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  