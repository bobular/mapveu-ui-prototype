export default {
  ViewInfo :  () => import(/* webpackChunkName: "ViewInfo" */ '@/panels/ViewInfo.vue'),
  InfoTable : () => import(/* webpackChunkName: "InfoTable" */ '@/panels/InfoTable.vue'),
  SpecialGenotypeViz : () => import(/* webpackChunkName: "SpecialGenotypeViz" */ '@/panels/SpecialGenotypeViz.vue')
};
