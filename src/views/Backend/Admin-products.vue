<template>
  <div>
    <h2>後台產品列表頁</h2>
    <table class="table table-hover bg-light">
      <thead class="text-center">
        <tr>
          <!-- <th scope="col">#</th> -->
          <th scope="col">產品名稱</th>
          <th scope="col">產品分類</th>
          <th scope="col">原價</th>
          <th scope="col">售價</th>
          <th scope="col">狀態</th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="(product, index) in products" :key="index">
          <!-- <th scope="row">{{ product.id }}</th> -->
          <td>{{ product.title }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.origin_price }}</td>
          <td>{{ product.price }}</td>
          <!-- 使用三原運算子判斷 boolean -->
          <td>{{ product.enabled ? "上架中": "下架中" }}</td>
          <td>
            <span class="material-icons _c_icon" data-toggle="modal" data-target="#productModal">
              edit
            </span>
            <span class="material-icons _c_icon" data-toggle="modal" data-target="#delModal">
              delete
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getAllProducts() {},
  },
  created() {
    console.log('process.env.VUE_APP_UUID', process.env.VUE_APP_UUID);
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.products = res.data.data;
        console.log('this.products', this.products);
      });
  },
};
</script>
