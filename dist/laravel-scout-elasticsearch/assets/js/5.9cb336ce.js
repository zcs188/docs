(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{153:function(a,s,t){"use strict";t.r(s);var n=t(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("composer require baijunyao/laravel-scout-elasticsearch\n")])])]),t("p",[a._v("添加 Provider ；"),t("br"),a._v("\nconfig/app.php")]),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{attrs:{class:"token single-quoted-string string"}},[a._v("'providers'")]),a._v(" "),t("span",{attrs:{class:"token operator"}},[a._v("=")]),t("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n\n    "),t("span",{attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n\n    "),t("span",{attrs:{class:"token comment"}},[a._v("/**\n     * Elasticsearch全文搜索\n     */")]),a._v("\n    Laravel\\"),t("span",{attrs:{class:"token package"}},[a._v("Scout"),t("span",{attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("ScoutServiceProvider")]),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{attrs:{class:"token keyword"}},[a._v("class")]),t("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    Baijunyao\\"),t("span",{attrs:{class:"token package"}},[a._v("LaravelScoutElasticsearch"),t("span",{attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("ElasticsearchServiceProvider")]),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{attrs:{class:"token keyword"}},[a._v("class")]),t("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),t("p",[a._v("发布配置项;")]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan vendor:publish --provider"),t("span",{attrs:{class:"token operator"}},[a._v("=")]),t("span",{attrs:{class:"token string"}},[a._v('"Laravel\\Scout\\ScoutServiceProvider"')]),a._v("\n")])])]),t("p",[a._v("增加配置项；"),t("br"),a._v("\n.env ;")]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("SCOUT_DRIVER"),t("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v("elasticsearch\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);