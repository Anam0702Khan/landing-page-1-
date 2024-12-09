import React from "react";
import {
    FacebookIcon,
    InstagramIcon,
    LinkedInIcon,
    YoutubeIcon,
  } from "../CustomIcons";

function Icon() {
  return (
    <>
      <div className="flex flex-row bg-blue-600 justify-around items-center  mb-3">
        <div className="flex flex-row">
          <p>billing@venderengine.com</p>
          <br />
          <p>sun-fri (08AM -10PM)</p>
        </div>
        <div className="space-x-8" >
          <div className="flex space-x-4 justify-center items-center ">
            
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-800"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-6 h-6" />
            </a>

        
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>

            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-6 h-6" />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800"
              aria-label="YouTube"
            >
                <YoutubeIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Icon;
