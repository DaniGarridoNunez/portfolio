import React from 'react';

const DownloadButton = () => {
  return (
      <a href="/cv-portfolio.pdf" download="cv-portfolio.pdf">
        <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Download</button>
      </a>
  );
};

export default DownloadButton;
