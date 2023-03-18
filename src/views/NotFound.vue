<template>
  <div class="cover">
    <h1>Oops!</h1>
    <h2  class="error">404 - PAGE NOT FOUND </h2>
    <p class="text"> The page you are looking for might have been removed
    had its name changed or is temporarily unavailable.</p>
    <router-link to="/products"><button class='button'>GO TO HOMEPAGE</button></router-link>
  </div>
</template>

<style scoped>
 .cover {
    text-align: center;
    width: 45%;
    height: 80vh;
    margin: 10px auto ;
} 

h1 {
  font-size: 13rem;
  color: #00008B;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.error {
  font-size: 2rem;
  font-family:sans-serif;
}

.text {
  font-size: 1.3rem;
  margin: 1rem 0;
}

.button {
  background-color: #00008B;
  border: none;
  font-weight: bold;
  padding: 0.8rem 2.3rem;
  color: #fff;
  border-radius: 15px;
  font-size: 17px;
}

</style>