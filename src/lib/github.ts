import { GitHubRepo, GitHubUser } from "@/types/github";

const GITHUB_USERNAME = "riddhishah09";
const BASE = "https://api.github.com";

const headers: Record<string, string> = {
  Accept: "application/vnd.github+json",
};

export async function getGitHubUser(): Promise<GitHubUser | null> {
  try {
    const res = await fetch(`${BASE}/users/${GITHUB_USERNAME}`, {
      headers,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `${BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=public`,
      { headers, next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const repos: GitHubRepo[] = await res.json();
    return repos.filter((r) => !r.fork);
  } catch {
    return [];
  }
}

export const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C++": "#f34b7d",
  Go: "#00ADD8",
  Rust: "#dea584",
  default: "#8b5cf6",
};

export const GRAD_PALETTES = [
  "from-violet-900/40 via-purple-900/40 to-fuchsia-900/40",
  "from-indigo-900/40 via-blue-900/40 to-cyan-900/40",
  "from-rose-900/40 via-pink-900/40 to-fuchsia-900/40",
  "from-purple-900/40 via-violet-900/40 to-indigo-900/40",
  "from-sky-900/40 via-blue-900/40 to-indigo-900/40",
  "from-fuchsia-900/40 via-pink-900/40 to-rose-900/40",
];
