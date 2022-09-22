<template>
  <div class="freelancer-page">
    <HeaderTwo>
      <img slot="logo" src="assets/logo.png" />
    </HeaderTwo>
    <SliderOne />
    <!-- Start Portfolio Area -->
    <div class="rn-portfolio-area section-ptb-xl" id="portfolio">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="section-title-2 text-center">
              <h2>Yuarn</h2>
              <p>Creative Portfolio</p>
            </div>
          </v-col>
        </v-row>
        <Portfolio />
      </v-container>
    </div>
    <!-- End Portfolio Area -->

    <Awards />
    <News />
    <Footer />
  </div>
</template>


<!-- script for importing the home page of the website  -->
<script>
import HeaderTwo from "./components/HeaderTwo.vue";
import SliderOne from "./components/SliderOne.vue";
import Portfolio from "./components/Portfolio.vue";
import News from "./components/News.vue";
import Footer from "./components/Footer.vue";

//this is to export default components into website
//SINGLE FILE COMPONENTS
export default {
  components: {
    HeaderTwo,
    SliderOne,
    Portfolio,
    News,
    Footer,
  },
  data() {
    return {};
  },

};
</script>

//

<style lang="scss" scoped>
.freelancer-page .logo {
  img {
    @media only screen and (max-width: 575px) {
      max-width: 80%;
    }
  }
}
</style>
