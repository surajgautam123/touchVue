<template>
  <header class="fixed-top">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5">
          <b-nav class="nav-left">
            <b-nav-item active>Men</b-nav-item>
            <b-nav-item>Women</b-nav-item>
            <b-nav-item>Search</b-nav-item>
          </b-nav>
        </div>
        <div class="col-md-2">
          <div class="header-logo"><router-link to="/"><img src="../../assets/images/ssense_logo_v2.svg" /></router-link></div>
        </div>
        <div class="col-md-5">
          <b-nav class="nav-right">
              <b-nav-item>English</b-nav-item>
              <b-nav-item>Login</b-nav-item>
              <b-nav-item>Wishlist</b-nav-item>
              <b-nav-item>Shopping Bag (0)</b-nav-item>
          </b-nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>
<!-- carousel-1.vue -->