<template>
    <section class="section section-lg pt-lg-0">
            <div id="container" class="container contshop ">
                <div class="row justify-content-center">
                    
                        <div class="row row-grid">
                            <div v-for="shop in filteredShops" :key="shop.id"  class="col-lg-3 card-group shop col-md-3 col-sm-3 col-xs-12">
                                <card class="border-0" hover shadow body-classes="py-2">
                                    <h6 class="text-primary text-uppercase">{{shop.name}}</h6>
                                    <img v-if="shop.photos" :src="`https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=${shop.photos[0].photo_reference}&key=AIzaSyDLM_8zXIjzv3eGyUkmpEKhcGUDhRzNHvI`" id="" alt="Shop Image" class="" style="width:100%">
                                    <img v-if="!shop.photos" :src="`https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=&key=AIzaSyDLM_8zXIjzv3eGyUkmpEKhcGUDhRzNHvI`" id="" alt="Shop Image" class="" style="width:100%">
                                    
                                    <p class="description mt-3">{{shop.vicinity}}</p>
                                    <base-button tag="a" href="#" type="warning" class="mt-4">
                                        Dislike 
                                    </base-button>
                                   
                                     <base-button tag="a" href="#" type="success" class="mt-4">
                                        Like 
                                    </base-button>
                                </card>
                            </div>
                        </div>
                </div>
            </div> 
    </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      shops: [
        {
          _id: "5b3d1fe6bd9ea70388fd12af",
          name: "festival da Kianda",
          address: "Boulevard Al Massira Al Khadra, Casablanca 20250",
          data: "2018-07-04 19:28:38",
          organizador: "Unitel",
          categoria: "concerto",
          description:
            "Chaîne de mode espagnole proposant sa propre marque de prêt-à-porter, chaussures et accessoires tendance.",
          banner: {
            fileName:
              "c19e2820806511e8975dc9c06b982d60_bg_site_tmj_jan2011.jpg",
            filePath: "../Home/img/concerto.jpg"
          }
        },
        {
          _id: "5b3d1fe6bd9ea70388fd12af",
          name: "festival da Kianda",
          address: "Boulevard Al Massira Al Khadra, Casablanca 20250",
          data: "2018-07-04 19:28:38",
          organizador: "Unitel",
          categoria: "concerto",
          description:
            "Chaîne de mode espagnole proposant sa propre marque de prêt-à-porter, chaussures et accessoires tendance.",
          banner: {
            fileName:
              "c19e2820806511e8975dc9c06b982d60_bg_site_tmj_jan2011.jpg",
            filePath: "../Home/img/concerto.jpg"
          }
        },
        {
          _id: "5b3d1fe6bd9ea70388fd12af",
          name: "festival da Kianda",
          address: "Boulevard Al Massira Al Khadra, Casablanca 20250",
          data: "2018-07-04 19:28:38",
          organizador: "Unitel",
          categoria: "concerto",
          description:
            "Chaîne de mode espagnole proposant sa propre marque de prêt-à-porter, chaussures et accessoires tendance.",
          banner: {
            fileName:
              "c19e2820806511e8975dc9c06b982d60_bg_site_tmj_jan2011.jpg",
            filePath: "../Home/img/concerto.jpg"
          }
        },
        {
          _id: "5b3d1fe6bd9ea70388fd12af",
          name: "festival da Kianda",
          address: "Boulevard Al Massira Al Khadra, Casablanca 20250",
          data: "2018-07-04 19:28:38",
          organizador: "Unitel",
          categoria: "concerto",
          description:
            "Chaîne de mode espagnole proposant sa propre marque de prêt-à-porter, chaussures et accessoires tendance.",
          banner: {
            fileName:
              "c19e2820806511e8975dc9c06b982d60_bg_site_tmj_jan2011.jpg",
            filePath: "../Home/img/concerto.jpg"
          }
        },
        {
          _id: "5b3d1fe6bd9ea70388fd12af",
          name: "festival da Kianda",
          address: "Boulevard Al Massira Al Khadra, Casablanca 20250",
          data: "2018-07-04 19:28:38",
          organizador: "Unitel",
          categoria: "concerto",
          description:
            "Chaîne de mode espagnole proposant sa propre marque de prêt-à-porter, chaussures et accessoires tendance.",
          banner: {
            fileName:
              "c19e2820806511e8975dc9c06b982d60_bg_site_tmj_jan2011.jpg",
            filePath: "../Home/img/concerto.jpg"
          }
        },
        {
          _id: "5b3d1fe6bd9ea70388fd12af",
          name: "festival da Kianda",
          address: "Boulevard Al Massira Al Khadra, Casablanca 20250",
          data: "2018-07-04 19:28:38",
          organizador: "Unitel",
          categoria: "concerto",
          description:
            "Chaîne de mode espagnole proposant sa propre marque de prêt-à-porter, chaussures et accessoires tendance.",
          banner: {
            fileName:
              "c19e2820806511e8975dc9c06b982d60_bg_site_tmj_jan2011.jpg",
            filePath: "../Home/img/concerto.jpg"
          }
        },
        {
          _id: "5b3d1fe6bd9ea70388fd12af",
          name: "festival da Kianda",
          address: "Boulevard Al Massira Al Khadra, Casablanca 20250",
          data: "2018-07-04 19:28:38",
          organizador: "Unitel",
          categoria: "concerto",
          description:
            "Chaîne de mode espagnole proposant sa propre marque de prêt-à-porter, chaussures et accessoires tendance.",
          banner: {
            fileName:
              "c19e2820806511e8975dc9c06b982d60_bg_site_tmj_jan2011.jpg",
            filePath: "../Home/img/concerto.jpg"
          }
        },
        {
          _id: "5b3d1fe6bd9ea70388fd12af",
          name: "festival da Kianda",
          address: "Boulevard Al Massira Al Khadra, Casablanca 20250",
          data: "2018-07-04 19:28:38",
          organizador: "Unitel",
          categoria: "concerto",
          description:
            "Chaîne de mode espagnole proposant sa propre marque de prêt-à-porter, chaussures et accessoires tendance.",
          banner: {
            fileName:
              "c19e2820806511e8975dc9c06b982d60_bg_site_tmj_jan2011.jpg",
            filePath: "../Home/img/concerto.jpg"
          }
        },
        {
          _id: "5b3d1fe6bd9ea70388fd12af",
          name: "festival da Kianda",
          address: "Boulevard Al Massira Al Khadra, Casablanca 20250",
          data: "2018-07-04 19:28:38",
          organizador: "Unitel",
          categoria: "concerto",
          description:
            "Chaîne de mode espagnole proposant sa propre marque de prêt-à-porter, chaussures et accessoires tendance.",
          banner: {
            fileName:
              "c19e2820806511e8975dc9c06b982d60_bg_site_tmj_jan2011.jpg",
            filePath: "../Home/img/concerto.jpg"
          }
        }
      ],
    };
  },
  methods: {
    modalshow() {
      this.active = !this.active;
    },
    geolocation(position) {
      const _position = {};
      _position.latitude = position.coords.latitude;
      _position.longitude = position.coords.longitude;
      this.$store.commit("retrievePosition", _position);
      this.$store.dispatch('retrieveShops')
   }
  },
   created() {
     navigator.geolocation.getCurrentPosition(this.geolocation);
  },
  computed: {
   filteredShops() {
      return this.$store.getters.filteredShops
    }
  }
};
</script>

<style>
.shop {
  padding-top: 2rem;
}
#card{
  width: 100%;
    height: 15vw;
    height: 15rem;
    object-fit: cover;
}
</style>
