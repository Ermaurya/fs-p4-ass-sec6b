import React from 'react'
import './card2.css'
const Card2 = () => {
  return (
    <div>
      <main class="container">
  <div class="card">
    <img src="https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg" alt="images" class="card__image" />
    <div class="card__text">
      <h2>Alexandra Caulea</h2>
      <p>I enjoy drinking a cup of coffee every day</p>
    </div>
    <ul class="card__info">
      <li>
        <span class="card__info__stats">172</span>
        <span>posts</span>
      </li>
      <li>
        <span class="card__info__stats">47</span>
        <span>followers</span>
      </li>
      <li>
        <span class="card__info__stats">20</span>
        <span>following</span>
      </li>
    </ul>
    <div class="card__action">
      <button class="card__action__button card__action--follow">follow</button>
      <button class="card__action__button card__action--message">message</button>
    </div>
  </div>
</main>
    </div>
  )
}

export default Card2
