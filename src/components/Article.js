import React from 'react'

function Article({title, date = "January 1, 1970", preview}) {
  return (
    <div>
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    </div>
  )
}

export default Article

// [X] - Make an Article component as a child of ArticleList. It should return:

// [X] - an <article> element, with the following elements inside:
// [X] - an <h3> element displaying the title of the article, passed as a prop called title
// [X] - a <small> element displaying the date of the article, passed as a prop called date
// [X] - a default value of "January 1, 1970" should be used if no date is passed as a prop
// [X] - a <p> element displaying the preview of the article, passed as a prop called preview