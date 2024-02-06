import React from "react";

import Image from "next/image";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { TbSql } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
import { FaPhp } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io5";
const skills = [
  {
    name: "JAVASCRIPT",
    icon: <IoLogoJavascript style={{ fontSize: "4rem" }} />,
  },
  { name: "HTML", icon: <IoLogoHtml5 style={{ fontSize: "4rem" }} /> },
  { name: "CSS", icon: <IoLogoCss3 style={{ fontSize: "4rem" }} /> },
  { name: "REACTJS", icon: <IoLogoReact style={{ fontSize: "4rem" }} /> },

  { name: "PHP", icon: <FaPhp style={{ fontSize: "4rem" }} /> },
  { name: "FIGMA", icon: <IoLogoFigma style={{ fontSize: "4rem" }} /> },
  { name: "SQL", icon: <TbSql style={{ fontSize: "4rem" }} /> },
  { name: "NEXTJS", icon: <TbBrandNextjs style={{ fontSize: "4rem" }} /> },
  { name: "GIT", icon: <FaGitAlt style={{ fontSize: "4rem" }} /> },
  {
    name: "RESPONSIVE DESIGN ",
    icon: <DiResponsive style={{ fontSize: "4rem" }} />,
  },
  {
    name: "SASS",
    icon: <FaSass style={{ fontSize: "4rem" }} />,
  },
  {
    name: "PYTHON",
    icon: <IoLogoPython style={{ fontSize: "4rem" }} />,
  },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <div>
      <div className="mt-8 flex justify-center items-center">
        <p className="text-gray-900 inline border-b-4 border-cyan-600 hover:text-cyan-600 uppercase text-4xl font-bold mb-4">
          SKILLS
        </p>
      </div>
      <div className=" grid grid-rows-4 md:grid-rows-3 sm:grid-rows-3 grid-flow-col gap-4 justify-center">
        {skills.map((skill, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 180,
              paddingRight: 10,
              textAlign: "center",

              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              ":hover": {
                backgroundColor: "cyan",
              },
            }}
          >
            <CardContent
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia>{skill.icon}</CardMedia>
              <Typography variant="body2" color="text.secondary">
                {skill.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
