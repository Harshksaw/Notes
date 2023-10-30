function openAddBlogModel() {
    const model = document.getElementById('model')
    document.body.style.overflow = "hidden"
    model.style.display = "flex"
}

function closeBlogModel() {
    const model = document.getElementById('model')
    model.style.display = "none"
    clearAddBlogForm()
}

function clearAddBlogForm() {
    document.getElementById('img-url').value = ""
    document.getElementById('blog-title').value = ""
    document.getElementById('blog-dec').value = ""
    document.getElementById('content').value = ""
}

function saveBlogsToLocalStorage(blogsData) {
    localStorage.setItem("blogs", JSON.stringify(blogsData))
}

function getBlogsFromLocalStorage() {
    const blogsData = JSON.parse(localStorage.getItem("blogs",)) || []
    return blogsData
}

function displayBlogs() {
    const blogsData = getBlogsFromLocalStorage()
    const blogList = document.getElementById('blog-list')

    blogList.innerHTML = ""

    blogsData.forEach((blog) => {
        const blogElement = createBlogElement(blog)
        blogList.appendChild(blogElement)
    });
}

function createBlogElement(blog) {
    const newBlog = document.createElement("div")
    newBlog.classList.add("blogs")
    newBlog.innerHTML = `
    <img src="${blog.imgUrl}" alt="Blog Image" class="blog-img">
    <h3 class="blog-title">${blog.title}</h3>
    <span class="blog-dec">${blog.description}</span>
    <button class="read-blog">Read</button>
    `

    newBlog.querySelector('.read-blog').addEventListener("click", () => {
        sessionStorage.setItem("currentBlog", JSON.stringify(blog))
        window.location.href = './blog.html'
    })
    return newBlog
}

function addBlog(e) {
    e.preventDefault()

    const imgUrl = document.getElementById('img-url').value
    const title = document.getElementById('blog-title').value
    const description = document.getElementById('blog-dec').value
    const content = document.getElementById('content').value


    const newBlog = {
        imgUrl,
        title,
        description,
        content
    }

    const blogsData = getBlogsFromLocalStorage()
    blogsData.push(newBlog)
    saveBlogsToLocalStorage(blogsData)
    displayBlogs()
    closeBlogModel()
}

document.getElementById('addNewBlog').addEventListener('click', openAddBlogModel)
document.getElementById('close').addEventListener('click', closeBlogModel)
document.getElementById('addBlog').addEventListener('click', addBlog)
window.addEventListener('load', () => {
    displayBlogs();
});