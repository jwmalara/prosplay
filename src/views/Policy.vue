<template>
  <div class="faq">
  </div>
</template>

<script>
  import Client from 'shopify-buy';

  export default {
    name: 'Policy',
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
    @import '~@/styles/helpers';
    
    .faq {
        padding-top: 30px;
        padding-bottom: 30px;
        h3 {
            font-family: $oswald;
            font-weight: 200;
            font-size: 30px;
            padding-bottom: 10px;
            line-height: 1.4em;
            @media screen and (max-width: 750px) {
                font-size: 24px;
            }
        }
        p {
            font-size: 15px;
            line-height: 1.65em;
            max-width: 800px;
        }
    }
    
    .hero {
        font-size: 60px;
        font-family: $oswald;
        text-transform: uppercase;
        font-weight: 200;
        height: 286px;
        line-height: 286px;
        background-image: url('~@/assets/faqbg.png');
        background-size: auto 100%;
        background-position: right center;
        background-repeat: no-repeat;
        margin: 0;
        @media screen and (max-width: 900px) {
            line-height: 1.5em;
            height: auto;
            padding-top: 30px;
            padding-bottom: 30px;
            h2 {
                text-align: center;
                padding: 0;
                font-size: 26px;
            }
        }
    }

    h2 {
        padding: 0 100px;
    }

    .faqs {
        padding: 60px 130px;
        @media screen and (max-width: 750px) {
            padding: 60px 30px;
        }
    }

  .faq {
  }

</style>
