export async function getGitHubStats(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub stats');
    }

    const data = await response.json();

    return {
      followers: data.followers || 0,
      publicRepos: data.public_repos || 0,
      // Note: Total stars requires fetching all repos, so we'll estimate or fetch separately
      stars: 0 // We'll calculate this separately
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return {
      followers: 0,
      publicRepos: 0,
      stars: 0
    };
  }
}

export async function getGitHubStars(username: string) {
  try {
    // Fetch all repositories
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repositories');
    }

    const repos = await response.json();

    // Sum up all the stars
    const totalStars = repos.reduce((sum: number, repo: any) => sum + (repo.stargazers_count || 0), 0);

    return totalStars;
  } catch (error) {
    console.error('Error fetching GitHub stars:', error);
    return 0;
  }
}
