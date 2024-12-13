
// script.js
async function fetchGitHubRepos() {
    const response = await fetch('https://api.github.com/users/reyanshafi/repos');
    const data = await response.json();
    
    // Display repository data
    const repoContainer = document.getElementById('github-repos');
    data.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.innerHTML = `<h3>${repo.name}</h3><p>${repo.description}</p>`;
        repoContainer.appendChild(repoElement);
    });
}
fetchGitHubRepos();
```
