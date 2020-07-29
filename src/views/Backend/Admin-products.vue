<template>
  <div class="d-flex flex-wrap">
    <loading :active.sync="isLoading"></loading>
    <div class="_c_card _c_card_product mb-4 col-4 d-flex"
    v-for="item in products" :key="item.id">
      <div class="_c_card-img-wrap">
        <img :src="item.imageUrl" alt="">
      </div>
      <div class="card-body d-flex flex-d-col jc-space-between ai-flex-start">
        <h5 class="card-title color-primary fw-bold ta-left">{{ item.title }}</h5>
        <div class="ta-left">
          <p class="fz-xxs mb-tiny">{{ item.category }}</p>
          <p class="fz-ets mb-tiny color-secondary"
          style="text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;">{{ item.content }}</p>
          <p class="fz-xxs">{{ item.price | thousands }}</p>
        </div>
        <div class="d-flex jc-flex-end">
          <a href="#" @click.prevent="getAllProducts(item)">
            <span class="material-icons _c_icon mr-3" data-toggle="modal"
            data-target="#productModal">
              visibility
            </span>
          </a>
          <span class="material-icons _c_icon" data-toggle="modal" data-target="#delModal">
            delete
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="module">

export default {
  data() {
    return {
      products: [],
      isLoading: false,
      fullPage: true,
    };
  },
  methods: {
    getAllProducts(product) {
      this.$router.push(`product/${product.id}`);
    },
  },
  created() {
    this.isLoading = true;
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.products = res.data.data;
        this.isLoading = false;
      });
  },
};

</script>
