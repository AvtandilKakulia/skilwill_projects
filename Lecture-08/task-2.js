/*
2. fetch ფუნქციის გამოყენებით წამოიღე მონაცემები მისამართიდან (https://jsonplaceholder.typicode.com/posts) და გამოიტანე DOM-ში პოსტის სახით.
*/

const postsDiv = document.querySelector('.posts');

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok

        ) {
            throw new Error('error');
        }

        const postsArr = await response.json();
        const fragment = document.createDocumentFragment();

        postsArr.forEach(post => {
            fragment.appendChild(createPost(post))
        });

        postsDiv.appendChild(fragment);

    } catch (error) {
        console.error('Error fetching posts:', error);
        displayError();
    }
}

function displayError() {
    const body = document.body;
    const h1 = document.querySelector('.wrapper h1');

    body.classList.add('error-page');
    h1.textContent = 'Error 404: Page not found!';
}


function createPostElement(type, className, content) {
    const element = document.createElement(type);
    if (className) element.classList.add(className);
    if (content) element.textContent = content;
    return element;
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function createPost(post) {
    const color = getRandomColor()

    const postCard = createPostElement('div', 'post-card');
    const postHeader = createPostElement('div', 'post-header');
    const spanPostId = createPostElement('span', 'postId', `Post ID: ${post.id}`);
    const spanUserId = createPostElement('span', 'user-id', `User ID: ${post.userId}`);
    const h2 = createPostElement('h2', 'post-title', post.title);
    const p = createPostElement('p', 'post-body', post.body);
    const buttonDiv = createPostElement('div', 'btn');
    const button = createPostElement('button', '', 'Read More');

    h2.style.color = color;
    button.style.backgroundColor = color;

    postHeader.append(spanPostId, spanUserId);
    buttonDiv.append(button);
    postCard.append(postHeader, h2, p, buttonDiv);

    button.addEventListener('click', () => openModal(post, color));

    return postCard;
}

function openModal(post, color) {
    const body = document.body;
    const modal = document.createElement('div');

    modal.classList.add('overlay');
    modal.innerHTML = `
        <div class="post-card_big">
            <div class="post-header">
                <span class="postId">Post ID: ${post.id}</span>
                <span class="user-id">User ID: ${post.userId}</span>
            </div>
            <h2 class="post-title_big" style="color: ${color}">${post.title}</h2>
            <p class="post-body_big">${post.body}</p>
            <div class="btn_big">
                <button style="background-color: ${color}">Close</button>
            </div>
        </div>
    `;

    body.appendChild(modal);
    body.style.overflow = 'hidden';

    const closeBtn = modal.querySelector('button');
    closeBtn.addEventListener('click', () => {
        modal.remove();
        body.removeAttribute('style');
    });
}

fetchPosts()



