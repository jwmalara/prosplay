<template>
  <div class="detail">
    <div class="constrict">
        <div v-if="isLoading" class="loading-container">
            <div class="loading"></div>
        </div>
        <div v-else>
            <div class="columns">
                <div class="columns-left">
                    <p class="breadcrumbs">
                        <router-link to="/">Home</router-link>
                        <span>/</span>
                        <router-link to="/">Store</router-link>
                        <span>/</span> 
                        {{ putter.title }}
                    </p>
                    <h2 class="name">{{ putter.title }}</h2>
                    <h3>${{ putter.variants[0].price }}</h3>
                    <div
                      class="description" 
                      v-html="putter.descriptionHtml"
                    />
                    <div>
                      <a 
                        @click="checkout"
                        class="buy"
                        :class="{ 'is-loading': checkoutLoading }"
                        v-if="putter.availableForSale"
                      >
                        <div class="loading" v-if="checkoutLoading" />
                        Buy Now
                      </a>
                      <a 
                        class="sold"
                        v-else
                      >
                        SOLD
                      </a>
                    </div>
                </div>
                <div class="columns-right">
                    <div class="carousel">
                        <div class="carousel-left" @click="prevPic"><img src="@/assets/chevron-left.svg"></div>
                        <div class="carousel-center">
                            <div class="image">
                                <img :src="pics[picsIndex].src">
                            </div>
                        </div>
                        <div class="carousel-right" @click="nextPic"><img src="@/assets/chevron-right.svg"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import Client from 'shopify-buy';
  import detail1 from '@/assets/detail.png';
  import detail2 from '@/assets/detail2.png';
  import _ from 'lodash';

  export default {
    name: 'Detail',
    methods: {
        prevPic() {
            if (this.picsIndex === 0) {
                this.picsIndex = this.pics.length - 1;
                return;
            }
            this.picsIndex--;
        },
        nextPic() {
            if (this.picsIndex === this.pics.length - 1) {
                this.picsIndex = 0;
                return;
            }
            this.picsIndex++;
        },
        checkout() {
          if (this.checkoutLoading) {
            return;
          }

          this.checkoutLoading = true;

          this.client.checkout.create().then((checkout) => {
            this.client.checkout.addLineItems(checkout.id, { variantId: this.putter.variants[0].id, quantity: 1 }).then((checkout) => {
              window.location.href = checkout.webUrl;
            });
          });
        }
    },
    data() {
        return {
            isLoading: true,
            pics: [ detail1, detail2 ],
            picsIndex: 0,
            putter: null,
            client: null,
            checkoutLoading: false
        }
      },
      mounted() {
        this.client = Client.buildClient({
          domain: 'prosplay.myshopify.com',
          storefrontAccessToken: '25865fda41e363a7e365960ef5bef30f'
        });

        this.client.product.fetch(this.$route.params.putter).then((product) => {
          this.putter = product;
          this.pics = product.images;
          _.forEach(this.pics, (pic) => {
            let image = new Image();
            image.src = pic.src;
          });
          this.isLoading = false;
        });
      }
  };
</script>

<style lang="scss" scoped>
  @import '~@/styles/colors';
  @import '~@/styles/helpers';
  @import '~@/styles/fonts';

  .loading-container {
    padding: 200px 0;
    text-align: center;
  }

  .carousel {
      display: flex;
      align-items: center;
      padding-bottom: 100px;
      .image {
          min-height: 460px;
          @media screen and (max-width: 1200px) {
            min-height: 0;
          }
          img {
              width: 100%;
              height: auto;
          }
      }
      &-center {
          flex-grow: 1;
      }
      &-left {
          width: 60px;
          text-align: center;
          cursor: pointer;
          height: 50px;
          line-height: 50px;
          border-radius: 4px;
          user-select: none;
          @media screen and (max-width: 800px) {
             width: 120px;
          }
          &:hover {
            background-color: rgba(255,255,255,.075);
          }
          &:active {
            transform: translateY(1px);
          }
          img {
              width: 50%;
              height: auto;
              display: inline-block;
              vertical-align: middle;
          }
      }
      &-right {
          width: 60px;
          text-align: center;
          cursor: pointer;
          height: 50px;
          line-height: 50px;
          border-radius: 4px;
          user-select: none;
          @media screen and (max-width: 800px) {
             width: 120px;
          }
          &:hover {
            background-color: rgba(255,255,255,.075);
          }
          &:active {
            transform: translateY(1px);
          }
          img {
              width: 50%;
              height: auto;
              display: inline-block;
              vertical-align: middle;
          }
      }
  }

  .columns {
      display: flex;
      width: 100%;
      @media screen and (max-width: 850px) {
        display: block;
      }
      &-left {
          width: 400px;
          padding-right: 60px;
          padding-bottom: 50px;
          @media screen and (max-width: 850px) {
            width: auto;
            padding-right: 0;
            padding: 0 30px 30px 30px;
          }
      }
      &-right {
          flex-grow: 1;
          @media screen and (min-width: 850px) {
            padding-top: 55px;
          }
      }
  }

  .buy {
      font-size: 20px;
      text-transform: uppercase;
      text-decoration: none;
      color: #fff;
      border: 2px solid $red;
      border-radius: 4px;
      padding: 16px 0 14px 0;
      display: block;
      text-align: center;
      transition: background-color .15s;
      cursor: pointer;
      &.is-loading {
        font-size: 0px;
        color: rgba(255,255,255,.0);
        cursor: default;
        .loading {
          display: inline-block;
          height: 20px;
          transform: scale(.7) translateY(-13px);
        }
      }
      &:hover:not(.is-loading) {
          background-color: $red;
      }
      &:active {
          transform: translateY(1px);
      }
  }

  .sold {
      font-size: 20px;
      text-transform: uppercase;
      text-decoration: none;
      color: #fff;
      border: 2px solid rgba(255,255,255,0);
      border-radius: 4px;
      padding: 16px 0 14px 0;
      display: block;
      text-align: center;
      transition: background-color .15s;
      cursor: default;
      background-color: rgba(255,255,255,.1);
  }

  .detail {
      padding-bottom: 50px;
  }

  h2 {
      font-size: 40px;
      padding-top: 35px;
  }
  h3 {
      font-size: 24px;
      color: $red;
      padding: 3px 0 30px 0;
  }

  .description {
      line-height: 1.7em;
      font-size: 15px;
      padding-bottom: 60px;
  }

  .breadcrumbs {
      font-size: 14px;
      white-space: nowrap;
      a {
          color: #fff;
          text-decoration: none;
          transition: color .2s;
          &:hover {
              color: $red;
          }
          &:active {
              display: inline-block;
              transform: translateY(1px);
          }
      }
      span {
          margin: 0 10px;
      }
  }
</style>

