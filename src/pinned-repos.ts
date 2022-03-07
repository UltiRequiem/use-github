import useSWR from "swr";

import { fetcher } from "./utils";

export interface GitHubPinnedRepo {
  owner: string;
  repo: string;
  description: string;
  language: string;
  languageColor: string;
  stars: string;
  forks: string;
}

/**
 * Get the GitHub Pinned Repositories of an user
 * @param username - The GitHub username to fetch
 * @returns The array of pined repos
 */
export function useGitHubPinnedRepos(username: string) {
  const resp = useSWR<GitHubPinnedRepo[], Error>(
    `https://gh-pinned-repos.egoist.sh/?username=${username}`,
    fetcher
  );

  return {
    ...resp,
    data: resp.data?.map((item) => {
      const data: GitHubPinnedRepo & { url: string } = {
        ...item,
        url: `https://github.com/${item.owner}/${item.repo}`,
      };

      return data;
    }),
  };
}
