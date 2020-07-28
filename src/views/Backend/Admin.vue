<template>
  <div class="container-fulid">
    <div class="row">
        <nav class="col-2 pt-xs bgc-primary _c_menu-wrap">
          <!-- logo -->
          <div class="mb-1">
            <img src="" alt="" class="_c_logo">
            <h1 class="mt-tiny  fz-m fw-bold ta-center">Playa</h1>
          </div>
          <!-- 功能選單 -->
          <ul>
            <li class="pt-tiny pb-tiny">
              <router-link to="/admin/products">
                <a class="d-flex ai-center fz-xs fw-bold _c_menu-link" href="#">
                  <span class="material-icons mr-tiny">view_list</span>
                  <p class="">產品列表</p>
                </a>
              </router-link>
            </li>
            <li class="pt-tiny pb-tiny">
              <router-link to="/admin/orders">
                <a class="d-flex ai-center fz-xs fw-bold _c_menu-link" href="#">
                  <span class="material-icons mr-tiny">assignment</span>
                  <p class="">訂單系統</p>
                </a>
              </router-link>
            </li>
            <li class="pt-tiny pb-tiny">
              <router-link to="/admin/coupons">
                <a class="d-flex ai-center fz-xs fw-bold _c_menu-link" href="#">
                  <span class="material-icons mr-tiny">confirmation_number</span>
                  <p class="">優惠券管理</p>
                </a>
              </router-link>
            </li>
            <li class="pt-tiny pb-tiny">
              <router-link to="/admin/images">
                <a class="d-flex ai-center fz-xs fw-bold _c_menu-link" href="#">
                  <span class="material-icons mr-tiny">image</span>
                  <p class="">圖片儲存列表</p>
                </a>
              </router-link>
            </li>
            <li class="pt-tiny pb-tiny">
              <a class="d-flex ai-center fz-xs fw-bold _c_menu-link" href="#">
                <span class="material-icons mr-tiny">settings</span>
                <p class="">後台設定</p>
              </a>
            </li>
          </ul>
        </nav>
        <main class="col-10">
          <router-view/>
        </main>
    </div>
  </div>
</template>
