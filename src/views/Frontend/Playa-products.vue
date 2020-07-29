<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <section class="enter-banner _c_banner-products">
      <h2 class="font-primary fz-lg">MEN</h2>
    </section>
    <section>
      <div class="container">
        <div class="row  pt-xs">
          <ul class="col-2 list-group list-group-flush">
            <li class="list-group-item">TOP</li>
            <li class="list-group-item">Swimwear</li>
            <li class="list-group-item">T-shirt</li>
            <li class="list-group-item">Shirt</li>
            <li class="list-group-item">Pants</li>
            <li class="list-group-item">Socks</li>
          </ul>
          <main class="col-10 d-flex flex-wrap">
              <div class="col-4 _c_card _c_card_index_product mb-4"
              v-for="item in products" :key="item.id">
                <div class="_c_card-img-wrap">
                  <img :src="item.imageUrl" alt="">
                </div>
                <div class="card-body d-flex flex-d-col jc-space-between ai-flex-start">
                  <h5 class="card-title color-primary fw-bold ta-left">{{ item.title }}</h5>
                  <div class="d-flex ta-left">
                    <del class="mr-1 fz-ets color-secondary">
                      {{ item.origin_price | thousands }}
                    </del>
                    <p class="fw-bold">
                      {{ item.price | thousands }}
                    </p>
                  </div>
                  <div class="d-flex jc-flex-end">
                    <a href="#" class="fz-xxs _c_menu-link" @click.prevent="getAProducts(item)">
                      MORE
                    </a>
                  </div>
                </div>
              </div>
          </main>
        </div>
      </div>
    </section>
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
    getAProducts(product) {
      this.$router.push(`product/${product.id}`);
    },
  },
  created() {
    this.isLoading = true;
    this.$http.get(`https://course-ec-api.hexschool.io/api/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.products = res.data.data;
        this.isLoading = false;
      });
  },
};

</script>
