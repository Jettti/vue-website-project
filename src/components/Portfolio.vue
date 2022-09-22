<template>
  <div class="row portfolio-wrapper row--55 rn-custom-portfolio-wrapper rn-hil-portfolio">
    <v-col lg="4" md="4" sm="6" cols="12" v-for="(content, i) in portfolioContent" :key="i">
      <router-link to="/portfolio-details" class="portfolio-wrap">
        <div class="item-shadow">
          <img :src="content.src" />
        </div>
        <div class="portfolio" :class="content.bgClassName">
          <div class="content">
            <h4 class="title">{{ content.title }}</h4>
            <span class="desc">{{ content.desc }}</span>
          </div>
          <div class="bgDescription"></div>
        </div>
      </router-link>
    </v-col>
    <!-- Start Single Portfoli -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolioContent: [
        {
          bgClassName: "multiverse-1",
          src: require("../assets/img/multiverses/multiverse1-1.png"),
          title: "Mush Buds",
          desc: "Multiverse 1.",
        },
        {
          bgClassName: "multiverse-1",
          src: require("../assets/img/multiverses/multiverse1-2.png"),
          title: "Angelic",
          desc: "Multiverse 2",
        },
        {
          bgClassName: "multiverse-1",
          src: require("../assets/img/multiverses/multiverse1-3.png"),
          title: "Queens",
          desc: "Multiverse 3",
        },
        {
          bgClassName: "colorful-project-bg--4",
          src: require("../assets/img/multiverses/multiverse1-4.png"),
          title: "Modern Mid-Century",
          desc: "Photography",
        },
        {
          bgClassName: "colorful-project-bg--5",
          src: require("../assets/img/project/colorful/work-5.jpg"),
          title: "The continuing",
          desc: "Photography",
        },
        {
          bgClassName: "colorful-project-bg--6",
          src: require("../assets/img/project/colorful/work-6.jpg"),
          title: "palettes for photos",
          desc: "Fashion",
        },
        {
          bgClassName: "colorful-project-bg--7",
          src: require("../assets/img/project/colorful/work-7.jpg"),
          title: "Custom illustrations",
          desc: "Photography",
        },
        {
          bgClassName: "colorful-project-bg--1",
          src: require("../assets/img/project/colorful/work-1.jpg"),
          title: "Buxom serifs",
          desc: "Photography",
        },
        {
          bgClassName: "colorful-project-bg--9",
          src: require("../assets/img/project/colorful/work-9.jpg"),
          title: "Open compositions",
          desc: "Photography",
        },
      ],
    };
  },
};
</script>
