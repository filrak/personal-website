function sortPostsByDate(posts) {
    return posts.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateb = new Date(b.created_at);
    
        if ( dateA.getTime() < dateb.getTime()) return 1;
        if ( dateA.getTime() == dateb.getTime()) return 0;
        if ( dateA.getTime() > dateb.getTime()) return -1;
    })
}

export { sortPostsByDate }