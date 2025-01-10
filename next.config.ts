import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  /* config options here */
  images:{
    domains:['utfs.io','yjqlcmgbll.ufs.sh'],
    remotePatterns:[
      {
        protocol:'https',
        hostname:'utfs.io',
        port:''
      }
    ]
  }
};

export default nextConfig;
