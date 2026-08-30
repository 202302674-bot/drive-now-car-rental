function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <span aria-hidden="true">🔍</span>

      <input
        type="text"
        aria-label="Search cars"
        placeholder="Search for a car..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
