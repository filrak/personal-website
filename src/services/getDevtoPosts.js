async function getDevtoPosts () {
    const response = await fetch('https://dev.to/api/articles?username=filrakowski')
    let posts = await response.json()
    // adjust to common format
    posts = posts.map(post => ({ ...post, source: 'devto', readable_date: post.readable_publish_date}))
    return posts
}

export { getDevtoPosts }