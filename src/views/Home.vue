<template>
  <div class="home">
    <div class="hero">
        <div class="constrict">
            <div class="hero-content">
                <h1><span>What The Pros Play</span></h1>
                <div class="hr"></div>
                <p>
                    <span>We here at WTPP are privileged to be a distributor of Scotty Cameron Putters, most of which are Circle T putters. Additionally WTPP offer exquisite products created by Scotty Cameron for golf and every day wear. This includes outerwear to accessories, which are truly unique. WTPP will happily ship world wide for your convenience.</span>
                </p>
            </div>
        </div>
    </div>
    <div class="constrict">
        <div class="loading-container" v-if="isLoading">
            <div class="loading"></div>
        </div>
        <div class="store" v-else>
            <PutterPreview 
                :data="product" 
                v-for="product in products"
                :key="product.id" 
            />
        </div>
    </div>
  </div>
</template>

<script>
import Client from 'shopify-buy';
import PutterPreview from '@/components/PutterPreview';
import _ from 'lodash';

export default {
  name: 'home',
  data() {
    return {
        isLoading: true,
        products: null
    }
  },
  components: {
    PutterPreview
  },
  mounted() {
    const client = Client.buildClient({
      domain: 'prosplay.myshopify.com',
      storefrontAccessToken: '25865fda41e363a7e365960ef5bef30f'
    });

    client.product.fetchAll().then((products) => {
      this.products = _.orderBy(products, 'availableForSale', 'desc');
      this.isLoading = false;
    });
  }
}
</script>

<style lang="scss">
    @import '~@/styles/fonts';
    @import '~@/styles/colors';
    @import '~@/styles/helpers';
    
    .loading-container {
        padding: 120px 0 110px 0;
        text-align: center;
    }
    
    .hero {
        height: 620px;
        background-color: #000;
        background-image: url('~@/assets/hero.png');
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: right center;
        color: #fff;
        line-height: 620px;
        @media screen and (max-width: 570px) {
            line-height: 1.5em;
            height: auto;
            padding: 50px 0 0px 0;
        }
        &-content {
            display: inline-block;
            vertical-align: middle;
            line-height: 1em;
            padding-left: 150px;
            @media screen and (max-width: 860px) {
                padding-left: 20px;
                padding-right: 20px;
            }
        }
        h1 {
            font-family: $oswald;
            font-weight: 200;
            font-size: 60px;
            text-transform: uppercase;
            line-height: 1.3em;
            span {
               background-color: rgba(0,0,0,.6);
            }
            @media screen and (max-width: 570px) {
                font-size: 36px;
            }
        }
        .hr {
            height: 4px;
            background-color: $red;
            width: 46px;
            border-radius: 2px;
            margin: 20px 0;
        }
        p {
           max-width: 500px; 
           font-size: 18px;
           line-height: 1.7em;
           padding-bottom: 50px;
           span {
               background-color: rgba(0,0,0,.6);
           }
        }
    }
    .store {
        padding: 60px 0;
        width: 1170px;
        margin: 0 auto;
        @media screen and (max-width: 1170px) {
            width: auto;
        }
    }
</style>
