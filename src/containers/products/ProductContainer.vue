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
          <b-col col md="3" class="product-item">
            Column
          </b-col>
          <b-col col md="3" class="product-item">Column</b-col>
          <b-col col md="3" class="product-item">Column</b-col>
          <b-col col md="3" class="product-item">Column</b-col>
          <b-col col md="3" class="product-item">Column</b-col>
          <b-col col md="3" class="product-item">Column</b-col>
          <b-col col md="3" class="product-item">Column</b-col>
          <b-col col md="3" class="product-item">Column</b-col>
        </b-row>
      </b-container>
    </b-col>
    <b-col col md="2">
      Products page
    </b-col>
  </b-row>
  </div>
</b-container>
</template>

<script>
export default {
    data: function(){
        return{
            status: 'Products page'
        }
    }
}
</script>
<style lang="scss" scoped src="./ProductContainer.scss" />