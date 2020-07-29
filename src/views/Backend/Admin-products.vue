<template>
  <div class="d-flex flex-wrap">
    <div class="_c_card _c_card_product mb-4 col-4 d-flex"
    v-for="item in products" :key="item.id">
      <div class="_c_card-img-wrap">
        <img :src="item.imageUrl" alt="">
      </div>
      <div class="card-body d-flex flex-d-col jc-space-between">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">{{ item.price | total }}</p>
        <div class="d-flex jc-flex-end">
          <span class="material-icons _c_icon mr-3" data-toggle="modal" data-target="#productModal">
            edit
          </span>
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
    };
  },
  methods: {
    getAllProducts(product) {
      this.$router.push(`product/${product.id}`);
    },
  },
  created() {
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.products = res.data.data;
      });
  },
};

</script>
