<template>
    <section class="section section-lg pt-lg-0">
            <div id="container" class="container contshop ">
                <div class="row justify-content-center">
                    
                        <div class="row row-grid">
                            <div v-for="shop in preferredShops" :key="shop.id"  class="col-lg-3 card-group shop col-md-3 col-sm-3 col-xs-12">
                                <card class="border-0" hover shadow body-classes="py-2">
                                    <h6 class="text-primary text-uppercase">{{shop.name}}</h6>
                                    <img v-if="shop.photos" :src="`${shop.photos}`" id="" alt="Shop Image" class="" style="width:100%">
                                    
                                    <p class="description mt-3">{{shop.vicinity}}</p>
                                    <base-button @click="removeShop(shop._id)" tag="a" href="#"  type="warning" class="mt-4">
                                        Remove 
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
  methods: {
    removeShop(id) {
      this.$store.dispatch("removeShop", id);
    }
  },
  created() {},
  computed: {
    preferredShops() {
      return this.$store.getters.preferredShops;
    }
  }
};
</script>

<style>
.shop {
  padding-top: 2rem;
}
#card {
  width: 100%;
  height: 15vw;
  height: 15rem;
  object-fit: cover;
}
</style>
