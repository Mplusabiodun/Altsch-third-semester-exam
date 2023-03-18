<template>
  <div>
    <router-link to="/products"><p class="back">Back</p></router-link>
  </div>
   
  <!-- <p v-else>
    Product not Found
    <router-link to="/products">Please go back to /products</router-link>
  </p> -->
<main v-if="currentProduct" class="container">
 
  <!-- Left Column / Image -->
  <div class="left-column">
    <img :src="currentProduct.image" alt="" />
  </div>
 
 
  <!-- Right Column -->
  <div class="right-column">
 
    <!-- Product Description -->
    <div class="product-description">
      <h1>{{ currentProduct.name }}</h1>
      <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
    </div>
 
    <!-- Product Pricing -->
    <div class="product-price">
      <span>&#8358; {{ currentProduct.price }}</span>
      <a href="#" class="cart-btn">Add to cart</a>
    </div>
  </div>
</main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      product: null,
    };
  },
  computed: {
    ...mapGetters(["currentProduct"]),
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("setProduct", id);
  },
};
</script>


<style scoped>
 .back {
  font-size: 26px;
  font-weight: 300;
  margin-top: 20px;
}
 
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
}

/* Columns */
.left-column {
  width: 60%;
  height: 35rem;
}
 
.right-column {
  width: 40%;
  margin-top: 60px;
}

/* Left Column */
.left-column img {
  width: inherit;
  height: inherit;
  object-fit: cover;
  opacity: 1;
  transition: all 0.3s ease;
}

/* Product Description */
.product-description {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}
.product-description span {
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}
.product-description h1 {
  font-weight: 300;
  padding-bottom: 2rem;
  font-size: 52px;
  color: #43484D;
  letter-spacing: -2px;
}
.product-description p {
  font-size: 16px;
  font-weight: 300;
  color: #86939E;
  line-height: 24px;
}

/* Product Color */
.product-color {
  margin-bottom: 30px;
}
 
.color-choose div {
  display: inline-block;
}
 
 /* Product Price */
.product-price {
  display: flex;
  align-items: center;
}
 
.product-price span {
  font-size: 26px;
  font-weight: 300;
  color: #43474D;
  margin-right: 20px;
}
</style>