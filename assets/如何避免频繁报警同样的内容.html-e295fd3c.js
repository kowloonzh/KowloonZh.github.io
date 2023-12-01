import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as a,a as e,b as n,d as r,e as d}from"./app-86ed435e.js";const o={},c=e("h2",{id:"背景",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#背景","aria-hidden":"true"},"#"),n(" 背景")],-1),u=e("p",null,"最近晚上总是频繁收到同一个工单的失败告警信息，很烦。",-1),v=e("h2",{id:"解决方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#解决方法","aria-hidden":"true"},"#"),n(" 解决方法")],-1),_=e("p",null,"本质上是需要对告警做一个收敛，如果是同一个工单同一个节点的失败告警，应该只发送一次就可以了。",-1),h={href:"https://github.com/golang/sync/blob/cd5d95a43a6e21273425c7ae415d3df9ea832eeb/singleflight/singleflight.go#L33",target:"_blank",rel:"noopener noreferrer"},m=d(`<ul><li>golang/sync/singleflight.Group.Do — 同步等待的方法；</li><li>golang/sync/singleflight.Group.DoChan — 返回 Channel 异步等待的方法；</li></ul><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var sfg singleflight.Group

func ApplyNodePass() {
    // 业务代码...
    err := apply.ApplyNodePass(ctx, applyNo, nodeId)
    if err != nil {
			key := fmt.Sprintf(&quot;%s:%s&quot;, applyNo, nodeId)

			// 同一个工单同一个节点只发送一次报警
			sfg.Do(key, func() (interface{}, error) {
				go Alarm(ctx, &quot;工单通过异常&quot;, &quot;alarm detail here...&quot;)
				return nil, nil
			})

			// 两小时后释放 key
			time.AfterFunc(2*time.Hour, func() {
				sfg.Forget(key)
			})
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function g(f,b){const i=l("ExternalLinkIcon");return s(),a("div",null,[c,u,v,_,e("p",null,[n("我想到了 go 自带的同步原语 "),e("a",h,[n("golang/sync/singleflight"),r(i)]),n("，它提供了两个用于抑制相同处理的方法：")]),m])}const y=t(o,[["render",g],["__file","如何避免频繁报警同样的内容.html.vue"]]);export{y as default};
