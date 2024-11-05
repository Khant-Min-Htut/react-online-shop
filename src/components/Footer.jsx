import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="px-4 mt-auto">
      <div className="bg-black text-white text-center p-3">
        <div>
          © {date}
          <a href="https://mmsit.com/" className="underline ml-1">
            MMS IT
          </a>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
