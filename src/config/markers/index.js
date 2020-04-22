export default {
  RecordCount : () => import(/* webpackChunkName: "RecordCount" */ '@/markers/RecordCount.vue'),
  RecordCountConfig : () => import(/* webpackChunkName: "RecordCountConfig" */ '@/markers/RecordCountConfig.vue'),
  CollectionCount : () => import(/* webpackChunkName: "CollectionCount" */ '@/markers/CollectionCount.vue'),
  CollectionCountConfig : () => import(/* webpackChunkName: "CollectionCountConfig" */ '@/markers/CollectionCountConfig.vue'),
  AlleleCount : () => import(/* webpackChunkName: "AlleleCount" */ '@/markers/AlleleCount.vue'),
  AlleleCountConfig : () => import(/* webpackChunkName: "AlleleCountConfig" */ '@/markers/AlleleCountConfig.vue')
};
