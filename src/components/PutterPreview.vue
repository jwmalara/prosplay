<template>
    <div 
        class="item"
        :style="{ backgroundImage: 'url(' + data.images[0].src + ')' }"
        :class="{ 'is-shown': isShown }"
        @click="show"
    >
        <div v-if="!data.availableForSale" class="sold-flag">Sold</div>
        <div class="detail">
            <h4>{{ data.title }}</h4>
            <div 
                class="description"
                v-html="data.descriptionHtml"
            />
            <div>
                ...
            </div>
            <span class="price">${{ data.variants[0].price }}</span>
            <div v-if="data.availableForSale">
                <router-link :to="'/shop/' + data.id">View Details</router-link>
            </div>
            <div v-else>
                <a class="sold">SOLD</a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'PutterPreview',
    data () {
      return {
        isShown: false
      };
    },
    methods: {
        show() {
            if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
                this.isShown = true;
            }
        }
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    }
  };
</script>

<style lang="scss" scoped>

@import '~@/styles/fonts';
@import '~@/styles/colors';
@import '~@/styles/helpers';

.item {
    width: 33%;
    height: 340px;
    display: inline-block;
    background-size: 95% auto;
    background-repeat: no-repeat;
    background-position: center;
    margin: 40px 0;
    vertical-align: top;
    @media screen and (max-width: 1170px) {
        width: 50%;
    }
    @media screen and (max-width: 800px) {
        width: 100%;
        margin: 0;
    }
    .sold-flag {
        background-color: $red;
        display: inline-block;
        text-transform: uppercase;
        font-family: $oswald;
        padding: 4px 7px;
        position: absolute;
        font-size: 13px;
        margin: 55px 20px;
        border-radius: 4px;
        box-shadow: 0 2px 2px 0px rgba(0,0,0,.05);
        @media screen and (max-width: 1170px) {
            margin: 70px 25px;
        }
    }
    .detail {
        background-color: rgba(0,0,0,.75);
        opacity: 0;
        height: 300px;
        transition: opacity .2s;
        will-change: opacity;
        padding: 30px 50px;
        pointer-events: none;
        a {
            border: 2px solid $red;
            border-radius: 4px;
            display: block;
            line-height: 47px;
            text-align: center;
            color: #fff;
            text-decoration: none;
            font-size: 18px;
            padding-top: 2px;
            margin-top: 40px;
            transition: background-color .15s;
            &.sold {
                border-color: rgba(255,255,255,0);
                color: #fff;
                background-color: rgba(255,255,255,.15);
            }
            &:hover:not(.sold) {
                background-color: $red;
            }
            &:active:not(.sold) {
                transform: translateY(1px);
            }
        }
        h4 {
            font-size: 32px;
            padding-bottom: 18px;
        }
        .description {
            font-size: 16px;
            text-transform: uppercase;
            line-height: 1.25em;
            max-height: 2.5em;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .price {
            display: inline-block;
            padding-top: 15px;
            color: $red;
            font-size: 16px;
        }
    }
    &:hover {
        .detail {
            opacity: 1;
            pointer-events: auto;
        }
    }
    &.is-shown {
        .detail {
            opacity: 1;
            pointer-events: auto;
        }
    }
}

</style>
