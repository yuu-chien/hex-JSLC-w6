<template>
<div>
    <loading :active.sync="isLoading"></loading>
    <h2>Hello 單一產品頁</h2>
    <h3>{{ product.title }}</h3>
    <p>{{ product.category }}</p>
    <p>{{ product.content }}</p>
    <p>{{ product.description }}</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      isLoading: false,
      fullPage: true,
    };
  },
  created() {
    this.isLoading = true;
    // 取得產品 id
    const { id } = this.$route.params;
    const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`;
    this.$http.get(url)
      .then((res) => {
        this.product = res.data.data;
        // console.log('sign this.product', this.product);
        this.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
