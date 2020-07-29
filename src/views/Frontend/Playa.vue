<template>
    <div class="container-fulid">
      <div class="row m-0">
        <nav class="col-12 _c_navbar d-flex jc-center ai-center">
          <ul class="d-flex">
            <li>
                <router-link to="/Playa/index"
                class="_c_menu-link color-basic-w fz-xs fw-bold">首頁</router-link>
            </li>
            <li>
                <router-link to="/Playa/about"
                class="_c_menu-link mr-1 color-basic-w fz-xs fw-bold">ABOUT</router-link>
            </li>
            <li>
              <router-link to="/Playa/products"
              class="_c_menu-link mr-1 color-basic-w fz-xs fw-bold">PRODUCTS</router-link>
            </li>
            <li>
              <router-link to="/Playa/cart">
                <span class="material-icons color-basic-w">shopping_cart</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <router-view/>
      </main>
    </div>

</template>
