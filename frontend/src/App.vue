<template>
    <div id="app">
        <router-view name="header"></router-view>
        <main >
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
        </main>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  },
  methods: {
    geolocation(position) {
      const _position = {};
      _position.latitude = position.coords.latitude;
      _position.longitude = position.coords.longitude;
      this.$store.commit("retrievePosition", _position);
      // https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAA6lG7YOtVnOgAurljGshkjB4pGvcO9DGOXRqKtPc681qptm4KmPMUPixiZeWNzQIuOHYwZK2h6r3sUykgyLwnt41unrTWTTEXyCREiiSL07PQhIZaXjd2UZhaPiheXSclEhDbpRFKWug09F2fqXuliNw8GhQEWgSMLvxc5xKmtTngL6LzM6jukA&key=AIzaSyDLM_8zXIjzv3eGyUkmpEKhcGUDhRzNHvI
    }
  },
  beforeMount() {
    navigator.geolocation.getCurrentPosition(this.geolocation);
  }
};
</script>
<style>
</style>
