import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
    const postsList = posts.map(post => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
    })
    return (
        <div>
            <main>
                {postsList}
            </main>
        </div>
    )
}

export default ArticleList

// [X] - Make an ArticleList component as a child of App. It should return:

// [X] - a <main> element with the following components inside:
// [X] - an array of Article components (one component for each of the posts passed down as props to ArticleList)
// [X] - make sure to assign a unique key attribute to each Article