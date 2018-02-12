// 下面是初始化瓦片的代码
VanillaTilt.init(document.querySelector(".your-element"), {
  max: 25,
  speed: 100
})
// 切换页面
let indexButton = e('#id-button-indexPage')
let designButton = e('#id-button-design')
bindEvent(indexButton, 'click', function(event){
  removeClassAll('guaActive')
  e('#id-page-index').classList.add('guaActive')
})
bindEvent(designButton, 'click', function(event){
  removeClassAll('guaActive')
  e('#id-page-design').classList.add('guaActive')
})
// 初始化 tabs
let tabs = new Tabs('.xxx')
let tabsVertical = new TabsVertical('.yyy')
// // markdown code
// let sourceContent = e('#id-source')
// let contentWrapper = e('#id-content')
// let md = new Remarkable()
// bindEvent(sourceContent, 'keyup', function(event){
//   let src = '```\n' + sourceContent.value
//   let content = md.render(src)
//   contentWrapper.innerHTML = content
// })
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
