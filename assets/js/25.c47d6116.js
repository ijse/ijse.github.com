(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{331:function(t,e,i){"use strict";i.r(e);var s=i(23),c=Object(s.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("p",[t._v("Rime 是一款Hacker级的输入法，有非常强大的定制性及不错的性能，输入法家族的神一般的存在。\nRime 支持不同Win, Mac, Linux三大操作平台，并且分别有不一样的名字：中州韵，小狼毫，鼠须管。\n之前主要用Ubuntu时，Rime是相比iBus, Fcitx 更好用的输入法，现在用Mac之后，也试过其它一些五笔输入法，都有一些不太方便的地方。")]),t._v(" "),i("p",[t._v("Rime没有图形化的配置界面，需要手动修改yml配置文件，但这基本不影响它的简洁强大。\n")]),i("h3",{attrs:{id:"toc_0"}},[t._v("主要目标：")]),t._v(" "),i("ul",[i("li",{staticClass:"task-list-item"},[i("input",{attrs:{checked:"checked",disabled:"disabled",type:"checkbox"}}),t._v(" 五笔输入，编码反查")]),t._v(" "),i("li",{staticClass:"task-list-item"},[i("input",{attrs:{checked:"checked",disabled:"disabled",type:"checkbox"}}),t._v(" 支持临时用拼音")]),t._v(" "),i("li",{staticClass:"task-list-item"},[i("input",{attrs:{checked:"checked",disabled:"disabled",type:"checkbox"}}),t._v(" 中英文切换")]),t._v(" "),i("li",{staticClass:"task-list-item"},[i("input",{attrs:{checked:"checked",disabled:"disabled",type:"checkbox"}}),t._v(" 输入特殊符号")]),t._v(" "),i("li",{staticClass:"task-list-item"},[i("input",{attrs:{checked:"checked",disabled:"disabled",type:"checkbox"}}),t._v(" Shift编码直接上屏")]),t._v(" "),i("li",{staticClass:"task-list-item"},[i("input",{attrs:{checked:"checked",disabled:"disabled",type:"checkbox"}}),t._v(" 输入Emoji表情")]),t._v(" "),i("li",{staticClass:"task-list-item"},[i("input",{attrs:{checked:"checked",disabled:"disabled",type:"checkbox"}}),t._v(" 可以创建自定义词组")]),t._v(" "),i("li",{staticClass:"task-list-item"},[i("input",{attrs:{checked:"checked",disabled:"disabled",type:"checkbox"}}),t._v(" 配置和字库同步")])]),t._v(" "),i("h3",{attrs:{id:"toc_1"}},[t._v("五笔输入， 编码反查")]),t._v("\n默认安装完Rime后是没有五笔输入法的，但添加非常简单："),i("p"),t._v(" "),i("p",[t._v("修改"),i("code",[t._v("~/Library/Rime/default.custom.yml")]),t._v(" 文件：\n"),i("pre",[i("code",{staticClass:"language-yml"},[t._v("patch:\nschema_list:\n- schema: wubi_pinyin\n")])]),t._v("\n把其它无用的schema都删掉了。\n这里也可以使用"),i("code",[t._v("wubi86")]),t._v("， 如果你只想输入五笔。\n默认支持编码反查。\n")]),i("h3",{attrs:{id:"toc_2"}},[t._v("临时用拼音")]),t._v("\n因为用了wubi_pinyin 这套方案，所以是可以五笔拼音混输的。\n另外，还发现Rime输入法是支持五笔整行输入的，只要不重码，可以一直输入完整段话。\n"),i("h3",{attrs:{id:"toc_3"}},[t._v("输入特殊符号")]),t._v("\n在"),i("code",[t._v("symbols.yaml")]),t._v("文件中有定义一些特殊符号，同样可以像配置Emoji一样,将不同词库结合起来.\n修改"),i("code",[t._v("wubi_pinyin.custom.yaml")]),t._v("文件，添加如下两行配置：\n"),i("code",[t._v("yaml\n'punctuator/import_preset': symbols\n'recognizer/patterns/punct': \"^/([a-z]+|[0-9])$\"\n")]),t._v("\n比如，可以输入"),i("code",[t._v("/dn")]),t._v("（dian nao)，  ❖ ⌘\n"),i("h3",{attrs:{id:"toc_4"}},[t._v("Shift编码直接上屏")]),t._v(" "),i("pre",[i("code",[t._v("patch:\nascii_composer/switch_key:\nShift_L: commit_code\nShift_R: commit_text\n")])]),t._v(" "),i("h3",{attrs:{id:"toc_5"}},[t._v("输入Emoji表情")]),t._v("\n默认输入Emoji是需要按"),i("code",[t._v("Ctrl + ~")]),t._v("进行切换的, 比较麻烦. Rime 的强大之处在于可以组合词库."),i("p"),t._v(" "),i("p",[t._v("由于我们用的是wubi_pinyin这个词库, 因此创建一个"),i("code",[t._v("wubi_pinyin.custom.yaml")]),t._v("文件,在里面填入:\n"),i("pre",[i("code",{staticClass:"language-yml"},[t._v('patch:\nschema/dependencies:\n- emoji\n- symbols\nreverse_lookup:\ndictionary: emoji\nenable_completion: true\nprefix: "`"\ntips: [emoji]\n')])]),t._v("\n然后重新Deploy. 即可直接输入Emoji了, 非常方便. 😊\n")]),i("h3",{attrs:{id:"toc_6"}},[t._v("可以创建自定义词组")]),t._v("\nRime 默认会自己学习词组, 像其它一些现代输入法一样, 陌生词只要输入一次, 下次就可以用简码输入了.\n"),i("h3",{attrs:{id:"toc_7"}},[t._v("配置和字库同步")]),t._v("\nRime 有简单的本地文件夹同步, 可以把它配置到iCloud上面."),i("p"),t._v(" "),i("p",[t._v("修改"),i("code",[t._v("installation.yaml")]),t._v("文件, 添加:\n"),i("code",[t._v('yaml\nsync_dir: "/Users/ijse/Library/Mobile Documents/com~apple~CloudDocs/Rime"\n')])]),t._v(" "),i("p",[t._v("然后Deploy即可.")])])},[],!1,null,null,null);e.default=c.exports}}]);