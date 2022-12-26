
async function getPosts () {
    const response = await fetch('https://dev.to/api/articles?username=filrakowski')
    const posts = await response.json()
    return posts
}

export { getPosts }