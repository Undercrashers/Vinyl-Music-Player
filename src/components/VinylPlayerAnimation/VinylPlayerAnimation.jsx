"use client";

import Image from "next/image";
import { useState, useRef, use, useEffect } from "react";

import DiskImage from "/public/cd.png";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(useGSAP);

const VinylPlayerAnimation = ({ textPrimary, textSecondary, coverImg }) => {
  const container = useRef();

  useEffect(() => {
    document
      .getElementById("def-1")
      .setAttribute("d", document.getElementById("path-1").getAttribute("d"));

    document
      .getElementById("def-2")
      .setAttribute("d", document.getElementById("path-2").getAttribute("d"));
  }, []);

  useGSAP(
    () => {
      const animateText = (selector, delay) => {
        gsap.to(selector, {
          duration: 6,
          delay: delay,
          attr: { startOffset: "100%" },
          repeat: -1,
          ease: "linear",
        });
      };

      animateText("#Text1", 0);
      animateText("#Text2", 2);
      animateText("#Text3", 4);

      gsap.to(".disk", {
        rotation: 360,
        repeat: -1,
        duration: 6,
        ease: "linear",
      });
    },
    { scope: container }
  );

  return (
    <div className="container" ref={container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350 350"
        width="800px"
        height="600px"
        id="text-primary"
      >
        <defs>
          <path id="def-1" />
        </defs>
        <path
          id="path-1"
          d="M -393 405 C -53 405 -73 5 177 5 C 427 5 407 405 747 405"
        />
        <text>
          {textPrimary.map((text, index) => (
            <textPath
              key={index}
              id={`Text${index + 1}`}
              xlinkHref="#def-1"
              startOffset="-25%"
            >
              {text}
            </textPath>
          ))}
        </text>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350 350"
        width="600px"
        height="600px"
        id="text-secondary"
      >
        <defs>
          <path id="def-2" />
        </defs>
        <path
          id="path-2"
          d="M -393 60 C -53 60 -70 365 180 365 C 421 352 407 60 725 56"
        />
        <text x="50%" y="50%" dominantBaseline="end" textAnchor="middle">
          <textPath id="Text5" xlinkHref="#def-2" startOffset="37%">
            {textSecondary}
          </textPath>
        </text>
      </svg>

      <div className="disk">
        <Image src={DiskImage} alt="Disk Image" />
        <div className="cover-img">
          <Image src={coverImg} alt="Album Cover" />
        </div>
      </div>
    </div>
  );
};

export default VinylPlayerAnimation;
