<template>
<b-container fluid>
  <div class="page-root">
  <b-row>
    <b-col col md="2">
      <women-all-categories-nav></women-all-categories-nav>
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
            <li class="active"><a href="#">Latest arrivals</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Price: Low to high</a></li>
            <li><a href="#">Price: High to low</a></li>
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
        products: [
          {
            avatar: './static/images/products/women/women-pro1.jpg',
            brandName: 'Balenciaga',
            productName: "Black & White Flannel Coat",
            price: '$1550'
          },
          {
            avatar: './static/images/products/women/women-pro2.jpg',
            brandName: 'Summer BBQ',
            productName: "Lorem ipsum dolor sit amet",
            price: '$1550'
          },
          {
            avatar: './static/images/products/women/women-pro3.jpg',
            brandName: 'Oui oui',
            productName: "Consectetur adipisicing elit",
            price: '$1550'
          },
          {
            avatar: './static/images/products/women/women-pro4.jpg',
            brandName: 'Balenciaga',
            productName: "Black & White Flannel Coat",
            price: '$1550'
          },
          {
            avatar: './static/images/products/women/women-pro2.jpg',
            brandName: 'Summer BBQ',
            productName: "Lorem ipsum dolor sit amet",
            price: '$1550'
          },
          {
            avatar: './static/images/products/women/women-pro4.jpg',
            brandName: 'Oui oui',
            productName: "Consectetur adipisicing elit",
            price: '$1550'
          },
          {
            avatar: './static/images/products/women/women-pro1.jpg',
            brandName: 'Summer BBQ',
            productName: "Lorem ipsum dolor sit amet",
            price: '$1550'
          },
          {
            avatar: './static/images/products/women/women-pro3.jpg',
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