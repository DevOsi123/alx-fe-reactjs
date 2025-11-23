import React, { useState } from "react";
import Search from "./components/Search";
import { fetchUsers } from "./services/githubService";
import "./index.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (criteria) => {
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const items = await fetchUsers(criteria);

      if (items.length === 0) {
        setError("No users found");
        return;
      }

      // Fetch user details for location and repos
      const detailedUsers = await Promise.all(
        items.map(async (user) => {
          const res = await fetch(user.url);
          return res.json();
        })
      );

      setUsers(detailedUsers);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while fetching users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">GitHub Advanced User Search</h1>

      <Search onSearch={handleSearch} />

      {loading && <p className="text-gray-500 mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded-lg p-4 shadow-md text-left"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mb-2"
            />
            <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
            {user.location && <p>Location: {user.location}</p>}
            <p>Public Repos: {user.public_repos}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 underline mt-1 inline-block"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
