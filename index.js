const searchBtn = document.getElementById('search-button');
const searchInput = document.getElementById('search-bar');

searchBtn.addEventListener('click', fetchUser);
searchInput.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        fetchUser();
    }
});

async function fetchUser() {
    const username = searchInput.value;

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json()

    console.log(data);

    document.getElementById('name').textContent = data.name;
    document.getElementById('username').textContent = "@" + data.login;
    document.getElementById('bio').textContent = data.bio;
    document.getElementById('repo-count').textContent = data.public_repos;
    document.getElementById('follower-count').textContent = data.followers;
    document.getElementById('following-count').textContent = data.following;
    document.getElementById('location').textContent = data.location;

    document.querySelector('#avatar img').src = data.avatar_url;


    const link = document.getElementById('github-link');
    link.href = data.html_url;
    link.textContent = data.html_url;
    // document.querySelector('#url a').href = data.html_url;
    // document.getElementById('url').textContent = data.html_url;
}

