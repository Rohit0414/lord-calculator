import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [searchInput, setSearchInput] = useState(query || ""); // Default to query param or empty
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      // Simulated search results
      const simulatedResults = [
        { id: 1, title: "CGPA to Percentage Calculator", link: "/educational-calculator/cgpa-to-percentage-calculator?filter=CGPA+to+percentage" },
        { id: 2, title: "Percentage Calculator", link: "/percentage-calculator" },
        { id: 3, title: "Scientific Calculator", link: "/scientific-calculator" },
      ].filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(simulatedResults);
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchInput)}`);
    }
  };

  return (
    <div className="p-5">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-4 flex items-center">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search for calculators..."
          className="border px-4 py-2 rounded-l w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Search Results */}
      <h2 className="text-2xl font-bold">Search Results for {query}</h2>
      {results.length > 0 ? (
        <ul className="mt-4">
          {results.map((result) => (
            <li key={result.id}>
              <a href={result.link} className="text-blue-500 hover:underline">
                {result.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4">No results found for {query}</p>
      )}
    </div>
  );
};

export default SearchPage;
