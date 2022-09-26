import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiFolder } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { FiGitBranch } from "react-icons/fi";
import style from "../components/Project.css";
export function Project() {
  const [repo1, setRepo1] = useState({
    name: "",
    description: "",
    url: "",
    language: "",
  });
  const [repo2, setRepo2] = useState({
    name: "",
    description: "",
    url: "",
    language: "",
  });
  useEffect(() => {
    axios
      .get("https://api.github.com/users/letFlavinho/repos")
      .then((response) => response.data)
      .then(
        (data) =>
          setRepo1({
            name: data[6].name,
            description: data[6].description,
            url: data[6].html_url,
            language: data[6].language,
          }) &
          setRepo2({
            name: data[10].name,
            description: data[10].description,
            url: data[10].html_url,
            language: data[10].language,
          })
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="brothers">
      <div className="Project">
        <div className="title">
          <FiFolder size={20} className="svg" />
          <a target="_blank" href={repo1.url}>
            {repo1.name}
          </a>
        </div>

        <p>{repo1.description}</p>
        <div className="left"></div>
        <div className="interactions">
          <FiStar size={18} className="svg" />
          <span>100</span>

          <FiGitBranch size={18} className="svg" />
          <span>100</span>

          <div className="right">
            <span className="mainLanguage">{repo1.language}</span>
          </div>
        </div>
      </div>

      <div className="Project">
        <div className="title">
          <FiFolder size={20} className="svg" />
          <a target="_blank" href={repo2.url}>
            {repo2.name}
          </a>
        </div>

        <p>{repo2.description}</p>
        <div className="left"></div>
        <div className="interactions">
          <FiStar size={18} className="svg" />
          <span>100</span>

          <FiGitBranch size={18} className="svg" />
          <span>100</span>

          <div className="right">
            <span className="mainLanguage">{repo2.language}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
