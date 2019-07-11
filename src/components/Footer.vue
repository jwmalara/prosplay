<template>
  <div class="footer">
    <nav>
        <a v-if="false" target="_blank" href="https://artofputting.myshopify.com/policies/terms-of-service">Store Policy & Payment Methods</a>
        <a v-if="false" target="_blank" href="https://artofputting.myshopify.com/policies/refund-policy">Return/Refund Policy</a>
        <a v-if="false" target="_blank" href="https://artofputting.myshopify.com/policies/shipping-policy">Shipping Policy</a>
        <router-link v-if="false" to="/faq">Frequently Asked Questions</router-link>
    </nav>
    <img src="@/assets/scotty.svg" alt="">
    <h3 v-if="false">Join Our Newsletter</h3>
    <form v-if="false">
        <input type="email" placeholder="Your Email Address">
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
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
  @import '~@/styles/fonts';
  @import '~@/styles/colors';
  
  .footer {
    text-align: center;
    background-color: #4A4A4A;
    background-image: url('~@/assets/footer.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 400px;
    nav {
        padding: 70px;
        margin-bottom: 30px;
        @media screen and (max-width: 870px) {
            padding: 50px 0 20px 0;
        }
        a {
            padding: 10px 10px;
            margin: 0 20px;
            display: inline-block;
            color: #fff;
            text-decoration: none;
            font-size: 14px;
            @media screen and (max-width: 870px) {
                display: block;
                margin: 0;
            }
        }
    }
    h3 {
        padding-top: 60px;
        text-transform: uppercase;
        font-size: 18px;
        padding-bottom: 15px;
    }
    input {
        background-color: transparent;
        color: #fff;
        font-family: $ropa;
        font-size: 18px;
        outline: none;
        border: 2px solid $red;
        border-radius: 4px;
        text-align: center;
        padding: 10px;
        width: 230px;
    }
  }

</style>
