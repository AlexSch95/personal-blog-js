// Schritt 1: Elemente aus dem HTML "greifen".
const postsContainer = document.getElementById('posts-container');

// Schritt 2: Deine Blog-Posts. Erfinde hier gleich 1-2 eigene Post-Ideen!
let posts = [
    { id: 1, title: "Mein erster Beitrag", content: "Das ist der Inhalt meines ersten Beitrags. Hier steht viel Text, der später gekürzt wird, damit er in die Vorschau passt." },
    { id: 2, title: "Warum Programmieren Spaß macht", content: "Programmieren ist wie Rätsel lösen. Man hat ein Problem und sucht nach einer kreativen Lösung. Das Gefühl, wenn der Code endlich funktioniert, ist unbezahlbar." }
];

// Schritt 3: Funktion, die alle Posts als Karten darstellt.
function renderPosts() {
    postsContainer.innerHTML = '';
    for (let currentPost = 0; currentPost < posts.length; currentPost++) {
        const postCardHTML = `
            <div class="col-md-6 mb-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${posts[currentPost].title}</h5>
                        <p class="card-text">${posts[currentPost].content.substring(0, 100)}...</p>
                        <a href="#" class="btn btn-secondary" onclick="showFullPost(${currentPost})">Ganzen Beitrag lesen</a>
                    </div>
                </div>
            </div>
        `;
        postsContainer.innerHTML += postCardHTML;
    }
}

function showNewPostModal() {
    const fullModal = document.getElementById('newPostModal');
    const cancelButton = document.getElementById("newPostCancel");
    const sendButton = document.getElementById("newPostSend");
    let newPostTitle = document.getElementById("newPostTitle").value;
    let newPostContent = document.getElementById("postContent").value;
    newPostTitle = "";
    newPostContent = "";
    fullModal.style.display = 'flex';
    cancelButton.onclick = function() {
        fullModal.style.display = 'none';
    }
    sendButton.onclick = function() {
        fullModal.style.display = 'none';
        addPost(newPostTitle, newPostContent);
    }

}

function showFullPost(id) {
    console.log("success");
    const fullPost = document.getElementById('fullPostModal');
    const cancelButton = document.getElementById("fullPostClose");
    const postTextContainer = document.getElementById("postText");
    const postTitleContainer = document.getElementById("postTitle");
    postTextContainer.textContent = posts[id].content;
    postTitleContainer.textContent = posts[id].title;
    fullPost.style.display = 'flex';
    cancelButton.onclick = function() {
        fullPost.style.display = 'none';
    }
}

function addPost(newPostTitle, newPostContent) {
    console.log(newPostTitle, newPostContent);
    const newPost = {
        id: posts[posts.length - 1].id + 1, 
        title: newPostTitle,
        content: newPostContent
        }
    posts.push(newPost);
    renderPosts();
}

// Initialer Aufruf
renderPosts();