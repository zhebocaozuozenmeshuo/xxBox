class TabsVertical {
  constructor(selector) {
    this.element = $(selector)
    this.init()
    this.bindEvents()
  }
  init() {
    this.element.each(function(index, element){
      $(element).children('.tabs-vertical-bar').children('li').eq(0).addClass('active')
      $(element).children('.tabs-vertical-content').children('li').eq(0).addClass('active')
    })
  }
  bindEvents() {
    this.element.on('click', '.tabs-vertical-bar > li', function(event){
      var $li = $(event.currentTarget)
      $li.addClass('active').siblings().removeClass('active')
      let index = $li.index()
      let $content = $li.closest('.tabs').find('.tabs-vertical-content > li').eq(index)
      $content.addClass('active').siblings().removeClass('active')
    })
  }
}
