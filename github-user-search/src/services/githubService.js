// src/services/githubService.js
import axios from "axios";

/**
 * Fetch users from GitHub using advanced search.
 * @param {Object} params
 * @param {string} params.username - GitHub username
 * @param {string} params.location - User location
 * @param {number|string} params.minRepos - Minimum number of repos
 * @returns {Promise<{items: Array}>} - Array of user objects
 */
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  // Build GitHub search query
  let query = username ? `${username} in:login` : "";
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  // GitHub Search API endpoint
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}&per_page=10`; // limit results for demo

  const response = await axios.get(url);

  // Search API returns limited info, fetch full user data for each user
  const detailedUsers = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(user.url);
      return userDetails.data;
    })
  );

  return { items: detailedUsers };
};
