<template>
<b-container fluid>
  <b-row class="justify-content-md-center">
    <b-col md="11">
      <b-row>
        <b-col>
          <div class="article-box">
            <div class="article-box-img">
              <b-img src="./static/images/SSENSE-Office-Killer-Spaces-Montreal-13.jpg" fluid alt="Responsive image" />
            </div>
            <div class="article-box-text">
              <h4 class="text-uppercase">
                <label>Market</label><span>Cinephiles: Sneakers</span>
              </h4>
              <p>Behind the Scenes with Vans, Nike, Reebok, Miyazaki</p>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="article-box">
            <div class="article-box-img">
              <b-img src="./static/images/SSENSE_MTL_Level-1_Room-1_1.jpg" fluid alt="Responsive image" />
            </div>
            <div class="article-box-text">
              <h4 class="text-uppercase">
                <label>Fashion</label><span>From Offset to Arca: Pihakapi Designer Vejas Kruszewski is Revolutionizing Leather</span>
              </h4>
              <p>The Youngest-Ever LVMH Winner on Bugs, Business, and Dressing the Part</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <div class="article-box">
        <div class="article-box-img">
          <b-img src="./static/images/2015-05-01_SCD-Boutiques_GGiguere_0045_LR1.jpg" fluid alt="Responsive image" />
        </div>
        <div class="article-box-text">
          <h4 class="text-uppercase">
            <label>Recent</label><span>100x: Skeletons in the Closet</span>
          </h4>
          <p class="categoryDate">
            <label>Fashion</label>
            <time>Mar 8</time>
          </p>
        </div>
      </div>
    </b-col>
    <b-col>
      <div class="article-box">
        <div class="article-box-img">
          <b-img src="./static/images/David_Chipperfield_SSENSE-07.jpg" fluid alt="Responsive image" />
        </div>
        <div class="article-box-text">
          <h4 class="text-uppercase">
            <label>Recent</label><span>Cinephiles: Sneakers</span>
          </h4>
          <p class="categoryDate">
            <label>Fashion</label>
            <time>Mar 8</time>
          </p>
        </div>
      </div>
    </b-col>
    <b-col>
      <div class="article-box">
        <div class="article-box-img">
          <b-img src="./static/images/img_5601.jpg" fluid alt="Responsive image" />
        </div>
        <div class="article-box-text">
          <h4 class="text-uppercase">
            <label>Recent</label><span>Cinephiles: Sneakers</span>
          </h4>
          <p class="categoryDate">
            <label>Fashion</label>
            <time>Mar 8</time>
          </p>
        </div>
      </div>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
  data (){
    return{
      //img: './static/images/SSENSE-Office-Killer-Spaces-Montreal-13.jpg'
    }
  }
}
</script>
<style lang="scss" scoped src="./HomeContainer.scss" />