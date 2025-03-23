async function fetchData() {
  const response = await fetch("/posts"); // fetch all data from posts endpoint
  const data = await response.json();
  return data;
}

function sortByAscRating(data) {
  return data.sort((a, b) => b.rating - a.rating);
}

function sortByDescRating(data) {
  return data.sort((a, b) => a.rating - b.rating);
}

function sortByNameAZ(data) {
  return data.sort((a, b) => a.name.localeCompare(b.name));
}

function sortByNameZA(data) {
  return data.sort((a, b) => b.name.localeCompare(a.name));
}

function sortByRecent(data) {
  return data.sort((a, b) => b.updatedAt - a.updatedAt);
}

function sortByOldest(data) {
  return data.sort((a, b) => a.updatedAt - b.updatedAt);
}

async function sortByTag(data, tagsArray) {
  return data.filter((post) => {
    return post.tags.some((tag) => tagsArray.includes(tag));
  });
}
