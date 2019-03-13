<template>
  <header class="fixed-top">
    <b-container fluid>
      <b-row>
        <b-col md="5">
          <b-nav class="nav-left">
            <b-nav-item to="/products">Men</b-nav-item>
            <b-nav-item to="/women">Women</b-nav-item>
            <b-nav-item>Search</b-nav-item>
          </b-nav>
        </b-col>
        <b-col md="2">
          <div class="header-logo"><router-link to="/">Touch</router-link></div>
        </b-col>
        <b-col md="5">
          <b-nav class="nav-right">
              <b-nav-item>English</b-nav-item>
              <b-nav-item to="/login">Login</b-nav-item>
              <b-nav-item>Wishlist</b-nav-item>
              <b-nav-item>Shopping Bag (0)</b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header{
  background: #FFF;
  text-transform: uppercase;
  .container-fluid{
    padding-left: 55px;
    padding-right: 55px;
  }
  .header-logo{
    text-align: center;
    a{
      font-size: 30px;
      font-weight: bold;
      display: inline-block;
      margin: 5px 0 5px 0;
      &:hover{
        color:#000;
        text-decoration: none;
      }
    }
    img{width: 104px;}
  }
  .nav-link{
    padding: 0.5rem 12px;
  }
  .nav.nav-left{
    padding: 12px 0 0 0;
    .nav-item:first-child{
      .nav-link{
        padding-left: 0;
      }
    }
  }
  .nav.nav-right{
    padding: 12px 0 0 0;
    float: right;
    .nav-item:last-child{
      .nav-link{
        padding-right: 0;
      }
    }
  }
}
</style>