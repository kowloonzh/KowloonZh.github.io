import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as d,e as s}from"./app-86ed435e.js";const i={},a=s(`<p>k8s 中容器的标准输出位置为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/var/log/pods/\${podname}/\${contained-name}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
$ cd /var/log/pods/xcloud_xcloud-stack-api-7bd667ccdf-jjjmt_233f05b6-314a-4bde-860e-cbdf4f4d14c0/manager

$ ls -l
total 14768
-rw-r----- 1 root root  4620831 Dec  1 18:47 0.log
-rw-r----- 1 root root 10487096 Dec  1 12:57 0.log.20231201-125747

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[a];function t(c,r){return n(),d("div",null,l)}const _=e(i,[["render",t],["__file","k8s容器里标准输出的位置.html.vue"]]);export{_ as default};
