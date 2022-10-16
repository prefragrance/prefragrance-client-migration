import React from "react";
import { Avatar as AvatarPrimitive } from "flowbite-react";

interface IAvatar {
  alt?: string;
  img?: string;
  rounded?: boolean;
  size?: string;
  placeholder?: boolean;
}

const Avatar = ({
  alt = "",
  img,
  rounded = true,
  size,
  placeholder,
}: IAvatar) => {
  return (
    <>
      {placeholder ? (
        <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute -left-1 w-12 h-12 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      ) : (
        <AvatarPrimitive alt={alt} img={img} rounded={rounded} size={size} />
      )}
    </>
  );
};

export default Avatar;
