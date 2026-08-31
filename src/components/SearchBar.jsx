import { useRef } from "react";

function SearchBar({ search, setSearch }) {
  const searchInputRef = useRef(null);

  const focusSearch = () => {
    searchInputRef.current?.focus();
  };

  return (
    <div className="search-bar">
      <span>🔍</span>

      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search for a car..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        type="button"
        className="btn btn-primary"
        onClick={focusSearch}
      >
        Focus
      </button>
    </div>
  );
}

export default SearchBar;