import { Octokit } from "octokit";

export function createOctokit(): Octokit {
	const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;
	return new Octokit(token ? { auth: token } : {});
}
