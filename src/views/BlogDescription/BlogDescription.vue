<template>
  <div>
    <div class="container">
      <div class="row gx-0 mb-5 justify-content-center">
        <div class="col-3 d-none d-lg-flex fixedSideRight">
          <div class="ps-5 mt-5 pe-5">
            <p class="fw-normal display-6">Recents posts</p>
            <nav class="nav flex-column dw-bold display-6">
              <a class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7" href="">Webhook APis are
                Rest APIS perfect side kick!</a>
              <a class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7" href="">The 4 use cases
                for webhook api</a>
              <a class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7" href="">Getting started
                with webhookie</a>
              <a class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7" href="">Visual update</a>
            </nav>
          </div>
        </div>
        <div class="col-lg-6 col-md-auto">
          <div class="row gx-0">
            <div class="pt-5 row">
              <div v-for="tag in article.tags" class="col-3 ">
                <div class="blogbtn text-icon mt-1 px-2 text-white text-center py-2" style="">
                  {{ tag.name }}
                </div>
              </div>
              <div class="">
                <p class="fw-bold display-9 mt-3 mt-4">
                  {{ article.MainTitle }}
                </p>
                <p class="fw-lighter display-7">{{ article.Author }}</p>

                <img :src="article.ArticlePic" class="mt-3 pb-2" style="max-width: 100%" />

                <div v-for="item in article.Paragraph">
                  <div :id="item.NavigationTag" class="mb-5 pb-4"></div>
                  <p class="fw-bold display-9 my-5">{{ item.Title }}</p>

                  <div v-for="items in item.Body">
                    <p class="fw-lighter display-5 lh-base pb-3">
                      {{ items.Para }}
                    </p>
                  </div>

                  <img :src="item.ImageName" class="mt-3 pb-4" style="max-width: 100%" />

                  <div v-if="item.Child" :id="item.Child.NavigationTag">
                    <p class="fw-light display-10 mt-3">
                      {{ item.Child.Title }}
                    </p>
                    <div v-for=" items in item.Child.Body">
                      <p class="fw-lighter display-5 lh-base py-3"> {{ items.Para }}</p>
                    </div>
                    <ul v-for="list in item.Child.List">
                      <li class="fw-lighter display-5 lh-base pb-3 ms-4">
                        {{ list.item }}
                      </li>
                    </ul>
                    <img :src="item.Child.ImageName" class="mt-3 pb-4" style="max-width: 100%" />
                  </div>
                </div>
              </div>
              <a href="/Blog">
                <button type="button" class="btn btn-outline-btnsearch fw-lighter display-6 my-4">
                  Recents Posts
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="col-3 d-none d-lg-block fixedSideleft">
          <div class="mt-5 pe-5">
            <nav class="nav flex-column dw-bold display-6">
              <div v-for="item in article.Paragraph">
                <a class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7"
                  :href="'#' + item.NavigationTag">{{ item.Title }}</a>
                <div v-if="item.Child">
                  <a class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7 ps-4"
                    :href="'#' + item.Child.NavigationTag">{{ item.Child.Title }}</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <Downloadnow class="my-5 " />
  </div>
</template>
<script>
import Downloadnow from "../../components/Downloadnow.vue";
import articles from "./newArticle.json";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const article = articles.find(x => x.id == route.params.id);
    return {
      article
    };
  },
  components: { Downloadnow },
  data() {
    return {
    };
  },
  mounted() {
    console.log(this.article.Paragraph[0].Body)
  },
};
</script>
<style scoped>
p:empty {
  display: none;
}
ul:empty {
  display: none;
}
li:empty {
  display: none;
}
.fixedSideleft{
  position: fixed;
  top: 70px;
  right: 5%;
  max-width: 400px ;
}
.fixedSideRight{
  position: fixed;
  top: 70px;
  left: 10%;
  max-width: 400px ;
}
</style>
