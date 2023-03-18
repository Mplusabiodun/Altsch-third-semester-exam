<template>
  <div>
    <ul v-if="products && products.length > 0">
      <router-link
        v-for="product in products"
        :key="product.id"
        :product="product"
        :to="`/products/${product.id}`"
      >
        <li>
          <img :src="product.image" alt="" />
          <h1>{{ product.name }}</h1>
          <p>{{ product.description }}</p>
          <p>&#8358; {{ product.price }}</p>
        </li>
      </router-link>
    </ul>
    <p style="text-align: center" v-else>There's no product yet</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["products"]),
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
li {
  list-style: none;
  padding: 0;
  background-color: rgb(191, 252, 247);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.24);
  margin-top: 1.5rem;
  padding: 2.5rem;
}
img {
  max-width: 10rem;
}
</style>