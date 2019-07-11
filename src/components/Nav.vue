<template>
  <div class="nav">
    <div class="constrict">
        <router-link to="/"><img class="logo" src="@/assets/logo.png" alt="WTPP"></router-link>
        <nav>
            <router-link to="/">Shop</router-link>
            <router-link v-if="false" to="/faq">FAQ</router-link>
            <router-link v-if="false" to="/contact">Contact</router-link>
        </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
    data () {
      return {

      };
    },
    components: {

    },
    props: {

    },
    mounted () {

    }
  };
</script>

<style lang="scss" scoped>

  @import '~@/styles/colors';
  @import '~@/styles/helpers';

  .nav {
    height: 100px;
    line-height: 100px;
    background-color: #000;
    padding: 0 15px;
    img {
        height: 60px;
        width: auto;
        vertical-align: middle;
        border-radius: 5px;
    }
    nav {
        float: right;
        a {
            color: #fff;
            text-transform: uppercase;
            font-size: 15px;
            text-decoration: none;
            display: inline-block;
            padding: 0 5px;
            margin: 0 15px;
            transition: color .2s;
            &:hover {
                color: $red;
            }
            &:active {
                transform: translateY(1px);
            }
            &.router-link-exact-active {
                color: $red;
            }
            @media screen and (max-width: 400px) {
                margin: 0 5px;
            }
        }
    }
  }

</style>
