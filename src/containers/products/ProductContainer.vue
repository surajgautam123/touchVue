<template>
<b-container fluid>
  <div class="page-root">
  <b-row>
    <b-col col md="2">
      <div class="side-navigation">
        <nav class="all-categories section">
          <ul class="nav" id="category-list">
            <li>
              <h2>
                <a href="#" class="text-uppercase bold">All categories</a>
              </h2>
            </li>
            <li>
              <a href="#">ACCESSORIES</a>
              <ul class="nav nav--stacked sublevel"><!----></ul>
            </li>
            <li>
              <a href="/en-in/men/bags">BAGS</a>
              <ul class="nav nav--stacked sublevel"><!----></ul>
            </li>
            <li>
              <a href="/en-in/men/clothing">CLOTHING</a>
              <ul class="nav nav--stacked sublevel"><!----></ul>
            </li>
            <li>
              <a href="/en-in/men/shoes">SHOES</a>
              <ul class="nav nav--stacked sublevel"><!----></ul>
              </li>
          </ul>
        </nav>
        <nav class="all-designers section">
          <ul id="designer-list" class="nav nav--stacked">
            <li>
              <h2><a href="/en-in/men" class="text-uppercase bold">All designers</a></h2>
            </li>
          </ul>
        </nav>
      </div>
    </b-col>
    <b-col col md="8">
      <b-container class="product-list">
        <b-row>
          <b-col col md="3" class="product-item" v-for="(product, index) in products" :key="`item-${index}`">
            <a href="#">
              <div class="product-box">
                <div class="product-item-img">
                  <img :src="product.avatar" />
                </div>
                <div class="product-item-text">
                  <p class="brand-name" v-html="product.brandName"></p>
                  <p class="product-name" v-html="product.productName"></p>
                  <p class="price" v-html="product.price"></p>
                </div>
              </div>
            </a>
          </b-col>
        </b-row>
      </b-container>
    </b-col>
    <b-col col md="2">
      <div class="sortby">
        <a href="#" class="trigger text-uppercase bold">Sort</a>
        <div class="section">
          <ul>
            <li class="active"><a href="/en-in/men">Latest arrivals</a></li>
            <li><a href="/en-in/men?sort=popularity-desc">Trending</a></li>
            <li><a href="/en-in/men?sort=price-asc">Price: Low to high</a></li>
            <li><a href="/en-in/men?sort=price-desc">Price: High to low</a></li>
          </ul>
        </div>
      </div>
    </b-col>
  </b-row>
  </div>
</b-container>
</template>

<script>
export default {
    data: function(){
        return {
        title: 'Feed',
        products: [
          {
            avatar: './static/images/products/men/men-pro1.jpg',
            brandName: 'Balenciaga',
            productName: "Black & White Flannel Coat",
            price: '$1550'
          },
          {
            avatar: './static/images/products/men/men-pro2.jpg',
            brandName: 'Summer BBQ',
            productName: "Lorem ipsum dolor sit amet",
            price: '$1550'
          },
          {
            avatar: './static/images/products/men/men-pro1.jpg',
            brandName: 'Oui oui',
            productName: "Consectetur adipisicing elit",
            price: '$1550'
          },
          {
            avatar: './static/images/products/men/men-pro2.jpg',
            brandName: 'Balenciaga',
            productName: "Black & White Flannel Coat",
            price: '$1550'
          },
          {
            avatar: './static/images/products/men/men-pro1.jpg',
            brandName: 'Summer BBQ',
            productName: "Lorem ipsum dolor sit amet",
            price: '$1550'
          },
          {
            avatar: './static/images/products/men/men-pro2.jpg',
            brandName: 'Oui oui',
            productName: "Consectetur adipisicing elit",
            price: '$1550'
          },
          {
            avatar: './static/images/products/men/men-pro1.jpg',
            brandName: 'Summer BBQ',
            productName: "Lorem ipsum dolor sit amet",
            price: '$1550'
          },
          {
            avatar: './static/images/products/men/men-pro2.jpg',
            brandName: 'Oui oui',
            productName: "Consectetur adipisicing elit",
            price: '$1550'
          }
        ]
      }
    }
}
</script>
<style lang="scss" scoped src="./ProductContainer.scss" />