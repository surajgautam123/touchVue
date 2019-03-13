<template>
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
</template>

<script>
export default {
    data: function(){
        return {
        title: 'Feed',
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