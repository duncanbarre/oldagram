const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 212
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const contentSection = document.getElementById("content")

for (let i = 0; i < posts.length; i++) {
    //Avatar
    let postAvatar = document.createElement('img')
    postAvatar.setAttribute('src', posts[i].avatar)
    postAvatar.setAttribute('class', 'user-avatar')

    //Username
    let postUserName = document.createElement('p')
    postUserName.innerText = posts[i].name
    postUserName.setAttribute('class', 'strong-text user-post-text')

    //Userplace
    let postUserPlace = document.createElement('p')
    postUserPlace.innerText = posts[i].location
    postUserPlace.setAttribute('class', 'normal-text user-post-text')

    //Username/place div
    let postUserInfo = document.createElement('div')
    postUserInfo.append(postUserName)
    postUserInfo.append(postUserPlace)
    postUserInfo.setAttribute('class', 'user-post-info')

    //Post header
    let postHeader = document.createElement('div')
    postHeader.setAttribute('class', 'post-header')
    postHeader.append(postAvatar)
    postHeader.append(postUserInfo)

    //Post image
    let postImage = document.createElement('img')
    postImage.setAttribute('src', posts[i].post)
    postImage.setAttribute('class', 'post-img')

    //Like, comment, share
    let like = document.createElement('img')
    like.setAttribute('src', './images/icon-heart.png')
    like.setAttribute('class', 'icon')
    let comment = document.createElement('img')
    comment.setAttribute('src', './images/icon-comment.png')
    comment.setAttribute('class', 'icon')
    let share = document.createElement('img')
    share.setAttribute('src', './images/icon-dm.png')
    share.setAttribute('class', 'icon')
    let interaction = document.createElement('div')
    interaction.append(like)
    interaction.append(comment)
    interaction.append(share)
    interaction.setAttribute('class', 'interaction')

    //likes caption
    let likesCaption = document.createElement('div')
    let likes = document.createElement('p')
    let caption = document.createElement('p')
    let userNameCaption = document.createElement('span')

    likes.innerText = `${posts[i].likes} likes`
    likes.setAttribute('class', 'likes')

    userNameCaption.innerText = posts[i].username
    userNameCaption.setAttribute('class', 'likes')

    caption.append(userNameCaption)
    caption.append(` ${posts[i].comment}`)
    caption.setAttribute('class', 'caption')

    likesCaption.append(likes)
    likesCaption.append(caption)
    likesCaption.setAttribute('class', 'likes-caption')

    //Adding to DOM
    contentSection.append(postHeader)
    contentSection.append(postImage)
    contentSection.append(interaction)
    contentSection.append(likesCaption)


}
