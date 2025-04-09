import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as n,o as l}from"./app-CrX1MDbP.js";const h={};function k(e,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="git常用命令汇总" tabindex="-1"><a class="header-anchor" href="#git常用命令汇总"><span>Git常用命令汇总</span></a></h1><h2 id="一、git安装后-指定名称和邮箱" tabindex="-1"><a class="header-anchor" href="#一、git安装后-指定名称和邮箱"><span>一、Git安装后-指定名称和邮箱</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user.name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Your Name&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user.email</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;email@example.com&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user.name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">           //查看用户名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user.password</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">       //查看密码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user.email</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          //查看邮箱</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --list</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              //查看配置信息</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、创建本地仓库" tabindex="-1"><a class="header-anchor" href="#二、创建本地仓库"><span>二、创建本地仓库</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> learngit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	//创建</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> learngit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	    //使用</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pwd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	            //查看当前目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	        //初始化，生成.git文件</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">若该文件隐藏，则使用ls</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -ah</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、添加和提交" tabindex="-1"><a class="header-anchor" href="#三、添加和提交"><span>三、添加和提交</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test.txt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	                 //添加</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;wrote a test file&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	//提交</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;add 3 files.&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		//一次性提交多个文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   命令用于查看项目的当前状态。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --all</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 添加项目根目录下的所有改动内容</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 只添加当前目录已经子目录下的改动内容</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、版本控制" tabindex="-1"><a class="header-anchor" href="#四、版本控制"><span>四、版本控制</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> log</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	                //查看提交历史记录，从最近到最远，可以看到3次</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> log</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --pretty=oneline</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	//加参，简洁查看</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reflog</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	            //查看每一次修改历史</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test.txt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	            //查看文件内容</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	            //查看工作区中文件当前状态</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> HEAD^</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">           //</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 回退所有内容到上一个版本</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> HEAD^</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hello.php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> //</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 回退</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hello.php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 文件的版本到上一个版本</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  reset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  052e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          //</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 回退到指定版本</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、删除文件" tabindex="-1"><a class="header-anchor" href="#五、删除文件"><span>五、删除文件</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">//直接删除</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;remove test.txt&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">//删错了，恢复</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、远程仓库" tabindex="-1"><a class="header-anchor" href="#六、远程仓库"><span>六、远程仓库</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ssh-keygen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rsa</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;youremail@example.com&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	//创建SSH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Key</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git@github.com:Daisy/AKgit.git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	//关联</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	//将本地内容推送到远程仓库（第一次）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	//将本地内容推送到远程仓库（之后）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        //查看远程仓库信息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	//删除远程仓库（解绑）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git@github.com:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Daisy/AKgit.git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	//克隆远程仓库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">//克隆之后使用和查看</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gitskills</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ls</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	//查看远程库的信息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	//查看远程库的详细信息</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、多人协作" tabindex="-1"><a class="header-anchor" href="#七、多人协作"><span>七、多人协作</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	         //创建并切换到分支dev</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   //创建并切换到分支dev，同上</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	             //创建</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	             //切换</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">//新版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> switch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	             //创建并切换到分支dev</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> switch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	             //直接切换分支</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		                //查看当前分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> merge</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	（--no-ff）</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)     </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">//合并，把dev分支的工作成果合并到master分支上</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	                //删除dev分支</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master（dev）</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	    //推送分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin/dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	//创建远程origin的dev分支到本地</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	                        //抓取分支（解决冲突）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --set-upstream-to=origin/dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      //指定本地与远程dev的链接</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rebase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	                     //把本地未push的分叉提交历史整理成直线</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">origin就是远程仓库的一个别名，当然也可以写成项目完整地址，但是这样显然比较麻烦</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、远程仓库本地仓库关联" tabindex="-1"><a class="header-anchor" href="#八、远程仓库本地仓库关联"><span>八、远程仓库本地仓库关联</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">1、首先创建本地分支，并切换到本地分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 本地分支名</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">2、提交本地分支到远程仓库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 将本地分支提交到了</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 远程dev分支</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  也就是创建了dev分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">3、本地分支与远程分支相关联</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> –set-upstream</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 本地分支名</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin/远程分支名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">fatal:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;--set-upstream&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> option</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> no</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> longer</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> supported.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Please</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;--track&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;--set-upstream-to&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> instead.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --set-upstream-to=origin/dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const d=i(h,[["render",k]]),r=JSON.parse('{"path":"/note/Git%E4%BD%BF%E7%94%A8/Git%E5%91%BD%E4%BB%A4%E6%B1%87%E6%80%BB.html","title":"Git常用命令汇总","lang":"zh-CN","frontmatter":{},"git":{"createdTime":1744205285000,"updatedTime":1744205285000,"contributors":[{"name":"Chains","username":"Chains","email":"dropthechains@qq.com","commits":1,"url":"https://github.com/Chains"}]},"readingTime":{"minutes":2.85,"words":856},"filePathRelative":"note/Git使用/Git命令汇总.md","localizedDate":"2025年4月9日","excerpt":"\\n<h2>一、Git安装后-指定名称和邮箱</h2>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --global</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> user.name</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"Your Name\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">$</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --global</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> user.email</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"email@example.com\\"</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> user.name</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">           //查看用户名</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> user.password</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">       //查看密码</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> user.email</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">          //查看邮箱</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --list</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">              //查看配置信息</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{d as comp,r as data};
