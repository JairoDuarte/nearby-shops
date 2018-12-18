<template>

<base-nav  type="primary" effect="dark"
                  expand
                  title="Nearby Shops"
                  class=""
                  :content-id="`navbar-${menu.type}`"
                  @title-click="titleclick">
      <ul class="navbar-nav ml-lg-auto">
        <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'prefered' }">My prefered Shops
                <span class="sr-only">(current)</span> 
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'signout' }">Sign out </router-link>
        </li>
    </ul>
</base-nav>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
export default {
  components: {
    BaseNav,
    CloseButton
  },
  methods: {
    titleclick() {
      this.$router.push({ name: "home" });
    }
  },
  data() {
    return {
      menu: { type: "primary", title: "Nearby Shops" }
    };
  }
};
</script>
<style>
</style>
