import useSWR from "swr";

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
 * GitHub Pinned Repositories of an user
 * @param username - The GitHub username to fetch pinned repos for
 * @returns An SWRResponse fulfilled with an array of pinned github repos
 */
export function useGitHubPinnedRepos(username: string) {
  const resp = useSWR<GitHubPinnedRepo[], Error>(
    `https://gh-pinned-repos.egoist.sh/?username=${username}`
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
