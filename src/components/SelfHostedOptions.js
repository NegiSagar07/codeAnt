import React from "react";
import { useNavigate } from "react-router-dom";
import GitlabIcon from "./images/gitlab.svg";
import SsoIcon from "./images/sso.svg";

const SelfHostedOptions = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/repositories');
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button 
        onClick={handleNavigation}
        className="flex items-center justify-center gap-2 p-3 text-[#171717] font-[600] border border-gray-300 w-full max-w-[444px] rounded-lg hover:bg-gray-50"
      >
        <img src={GitlabIcon} alt="GitLab" className="h-5 w-5" />
        <span>Self Hosted GitLab</span>
      </button>
      <button 
        onClick={handleNavigation}
        className="flex items-center justify-center gap-2 p-3 text-[#171717] font-[600] border border-gray-300 w-full max-w-[444px] rounded-lg hover:bg-gray-50"
      >
        <img src={SsoIcon} alt="SSO" className="h-5 w-5" />
        <span>Sign in with SSO</span>
      </button>
    </div>
  );
};

export default SelfHostedOptions;