# `use-github`

### [View Demo](https://codesandbox.io/s/use-github-example-2231zu)

React Hooks for the [GitHub Rest API](https://docs.github.com/en/rest) :shitpit:

It's easy to use and fully typed. It returns an [swr](https://swr.vercel.app) `SWRHook`, but if you don't know what that means, here's an example 👇

```tsx
import { useGitHubUser } from "use-github";

export const UserCard = (username: string) => {
  const { data: userData } = useGitHubUser(username);

  return <>...</>;
};
```

## Installation ∙ [![npm](https://img.shields.io/npm/v/use-github?color=blue&style=flat-square)](https://www.npmjs.com/package/use-github)

```console
# npm
npm install use-github

# yarn
yarn add use-github

# pnpm
pnpm add use-github
```

## TODO

Currently this package only exposes `useGitHubUser` and `useGitHubPinnedRepos`, there are a lot more endpoints to cover!

Pull Request and Issues are more than welcome!

## Docs

- For examples you can check [`examples/`](./examples) 📂

- API Docs ▶ https://use-github.js.org

## Notes

Originally Done for my website 👇

https://ultirequiem.com

[Join my Discord Server!](https://ultirequiem.com/discord)

## License

Licensed under the MIT License.
