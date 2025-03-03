# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

import { useState } from 'react';

function SearchableVideoList({ videos }) {
  const [searchText, setSearchText] = useState('');
  const foundVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search videos..."
        className="border p-2 rounded w-full mb-4"
      />

      {foundVideos.length === 0 ? (
        <h2>No matches for “{searchText}”</h2>
      ) : (
        <ul>
          {foundVideos.map((video) => (
            <li key={video.id}>{video.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default SearchableVideoList;

