// src/services/githubService.js
import axios from "axios";

export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  // Build the query string
  let query = username ? `${username} in:login` : "";
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}&per_page=10`; // limit results for demo

  const response = await axios.get(url);

  // GitHub Search API returns only basic user info in search
  // To get location or repo count, we need extra requests per user
  const detailedUsers = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(user.url); // user.url gives full user info
      return userDetails.data;
    })
  );

  return { items: detailedUsers };
};
