// write your code here
const gramUrl = 'http://localhost:3000/images/1'

const gramImage = document.getElementById('card-image')
const gramTitle = document.getElementById('card-title')
const likeCount = document.getElementById('like-count')
const commentList = document.getElementById('comments-list')

fetch(gramUrl)
.then(resp => resp.json())
.then(renderGrami)



let likes
document.getElementById('like-button').addEventListener('click', () => {
    data.likes +=1
})

document.getElementById('comment-form').addEventListener('submit', addGramComment)


function renderGrami(data){
    likes = data.likes
    gramImage.src = data.image
    gramTitle.innerText = data.title 
    renderGramLikes()
    renderGramComments(data.comments)
}
function renderGramLikes(){
    document.getElementById('like-count').textContent = `${likes} likes`
}

function addGramComment(event){
    event.preventDefault()
    const gramCommentText = event.target.comment.value 
    renderGramComment({content: gramCommentText})
}
function renderGramComments(comments){
    commentList.innerHTML =""
    comments.forEach(renderGramComment)
}

function renderGramComment(comment){
    const li = document.createElement('li')
    li.innerText = comment.content
    commentList.append(li)
}