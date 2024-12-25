import React from "react";
import githubIcon from "./images/github.svg";
import bitbucketIcon from "./images/bitbucket.svg";
import azureIcon from "./images/azure.svg";
import gitlabIcon from "./images/gitlab.svg";
import { useNavigate } from "react-router-dom";

const LoginOptions = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/repositories');
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <button 
        onClick={handleNavigation}
        className="flex items-center justify-center gap-2 p-3 text-[#171717] font-[600] border border-gray-300 w-full max-w-[444px] rounded-lg hover:bg-gray-50"
      >
        <img src={githubIcon} alt="GitHub" className="h-5 w-5" />
        <span>Sign in with Github</span>
      </button>
      <button 
        onClick={handleNavigation}
        className="flex items-center justify-center gap-2 p-3 text-[#171717] font-[600] border border-gray-300 w-full max-w-[444px] rounded-lg hover:bg-gray-50"
      >
        <img src={bitbucketIcon} alt="Bitbucket" className="h-5 w-5" />
        <span>Sign in with Bitbucket</span>
      </button>
      <button 
        onClick={handleNavigation}
        className="flex items-center justify-center gap-2 p-3 text-[#171717] font-[600] border border-gray-300 w-full max-w-[444px] rounded-lg hover:bg-gray-50"
      >
        <img src={azureIcon} alt="Azure DevOps" className="h-5 w-5" />
        <span>Sign in with Azure DevOps</span>
      </button>
      <button 
        onClick={handleNavigation}
        className="flex items-center justify-center gap-2 p-3 text-[#171717] font-[600] border border-gray-300 w-full max-w-[444px] rounded-lg hover:bg-gray-50"
      >
        <img src={gitlabIcon} alt="GitLab" className="h-5 w-5" />
        <span>Sign in with GitLab</span>
      </button>
    </div>
  );
};

export default LoginOptions;