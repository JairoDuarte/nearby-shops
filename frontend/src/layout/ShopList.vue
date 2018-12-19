<template>
    <section class="section section-lg pt-lg-0">
            <div id="container" class="container contshop ">
                <div class="row justify-content-center">
                    
                        <div class="row row-grid">
                            <div v-for="shop in shops" :key="shop._id"  class="col-lg-3 shop col-md-3 col-sm-3 col-xs-12">
                                <card class="border-0" hover shadow body-classes="py-2">
                                    <h6 class="text-primary text-uppercase">{{shop.name}}</h6>
                                    <img src="img/brand/zara.jpg" alt="Avatar" style="width:100%">
                                    <p class="description mt-3">{{shop.description}}</p>
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
      activeItem: "todos",
      active: true,
      query: ""
    };
  },
  methods: {
    modalshow() {
      this.active = !this.active;
    },
    isActive: function(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function(menuItem) {
      this.activeItem = menuItem; // no need for Vue.set()
    }
  },
  computed: {
    search: function() {
      var query = this.query;
      var categoria = this.activeItem;
      return this.eventos.filter(function(item) {
        return item.name.includes(query) && item.categoria === categoria;
      });
    }
  }
};
</script>

<style>
.shop {
  padding-top: 2rem;
}
</style>
