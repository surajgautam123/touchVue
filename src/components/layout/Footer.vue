<template>
<footer>
  <b-container fluid>
    <b-row>
      <b-col md="3">
        <p class="copyright">&copy; 2019 touch.com</p>
        <b-nav class="f-nav-left">
          <b-nav-item to="/static">Terms & Conditions</b-nav-item>
          <b-nav-item>Privacy Policy</b-nav-item>
        </b-nav>
      </b-col>
      <b-col md="9">
        <ul class="f-social-icons">
          <li><a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="#" title="Twitter"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#" title="Instagram"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#" title="Youtube"><i class="fab fa-youtube"></i></a></li>
        </ul>
        <b-nav class="f-nav-right">
          <b-nav-item>Country: India</b-nav-item>
          <b-nav-item>Newsletter Signup</b-nav-item>
          <b-nav-item>Customer Care</b-nav-item>
          <b-nav-item>Locations</b-nav-item>
          <b-nav-item>Editorial Archive</b-nav-item>
          <b-nav-item>Careers</b-nav-item>
          <b-nav-item>Affiliates</b-nav-item>
          <b-nav-item>Sitemap</b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
  </b-container>
</footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer{
  padding: 12px 0 17px 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  position: relative;
  z-index: 100;
  min-height: 35px;
  .container-fluid{
    padding-left: 55px;
    padding-right: 55px;
  }
  .copyright{
    margin: 4px  0;
    float: left;
    color: #888;
  }
  .nav.f-nav-left{
    .nav-link{
      color: #888;
      padding: 4px 12px;
    }
  }
  .f-nav-right{
    text-transform: uppercase;
    float: right;
    .nav-link{
      padding: 4px 12px;
    }
  }
  .f-social-icons{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0 0 0 10px;
    float: right;
    li{
      padding: 2px 7px;
      &:last-child{
        padding-right: 0;
      }
      .fa-instagram{
        font-size: 12px;
      }
      .fa-youtube{
        font-size: 15px;
      }
    }
  }
}
</style>
