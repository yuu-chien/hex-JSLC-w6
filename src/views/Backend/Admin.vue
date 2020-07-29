<template>
  <div class="container-fulid">
    <div class="row m-0">
        <nav class="col-2 pt-xs bgc-primary _c_admin-menu">
          <!-- logo -->
          <div class="mb-1">
            <img src="" alt="" class="">
            <h1 class="mt-tiny fz-m fw-bold ta-center"></h1>
          </div>
          <!-- 功能選單 -->
          <ul>
            <li class="pt-tiny pb-tiny">
              <router-link to="/admin/products"
              class="d-flex ai-center fz-xs fw-bold _c_menu-link color-tertiary">
                <span class="material-icons mr-tiny">view_list</span>
                <p class="">產品列表</p>
              </router-link>
            </li>
            <li class="pt-tiny pb-tiny">
              <router-link to="/admin/orders"
              class="d-flex ai-center fz-xs fw-bold _c_menu-link color-tertiary">
                <span class="material-icons mr-tiny">assignment</span>
                <p class="">訂單系統</p>
              </router-link>
            </li>
            <li class="pt-tiny pb-tiny">
              <router-link to="/admin/coupons"
              class="d-flex ai-center fz-xs fw-bold _c_menu-link color-tertiary">
                <span class="material-icons mr-tiny">confirmation_number</span>
                <p class="">優惠券管理</p>
              </router-link>
            </li>
            <li class="pt-tiny pb-tiny">
              <router-link to="/admin/images"
              class="d-flex ai-center fz-xs fw-bold _c_menu-link color-tertiary">
                <span class="material-icons mr-tiny">image</span>
                <p class="">圖片儲存列表</p>
              </router-link>
            </li>
          </ul>
        </nav>
        <main class="col-10 pt-xs bgc-basic-w">
          <router-view/>
        </main>
    </div>
  </div>
</template>
