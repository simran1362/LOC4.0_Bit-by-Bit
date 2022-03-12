import React from 'react'

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d79c67a8-7603-46e4-b56f-fb9967f82eb2/debqlqh-e16d6b49-becb-430a-a9cb-258cd382cbca.jpg/v1/fill/w_1280,h_720,q_75,strp/black_mountains_dark_theme_wallpapers_by_mayankgorecha_debqlqh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZDc5YzY3YTgtNzYwMy00NmU0LWI1NmYtZmI5OTY3ZjgyZWIyXC9kZWJxbHFoLWUxNmQ2YjQ5LWJlY2ItNDMwYS1hOWNiLTI1OGNkMzgyY2JjYS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zWTmfYJc66Y81eVdi-jIzAV2YQSihmuAIsvrPhAPkwU" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.itl.cat/pngfile/big/319-3196923_rock-lee-wallpaper.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://image.shutterstock.com/image-photo/young-man-on-treadmill-gym-600w-1250295559.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
  )
};

export default Carousel;
