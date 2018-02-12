














































































/* 下面就是一段该被扔进代码仓库的代码 */


// let r = localStorage.r2
// let ro = JSON.parse(r)
// log('r', ro, 'typeof r', typeof ro)
// for (var i = 0; i < ro.length; i++) {
//   let codeSegmetItem = ro[i]
//   let codeSegment = codeSegmetItem.codeSegment
//   let d = new Date(codeSegmetItem.createdTime * 1000)
//   let createdTime = d.toLocaleString()
//   let t = `
//     <li>
//       @${createdTime}
//     </li>
//   `
//   $('#id-codeSegmentList').html(t)
// }

//
var APP_ID = 'EVhrQcN6xjuNdt9vfjk6r8DK-gzGzoHsz';
var APP_KEY = 'UzxUEMjnvkPLREQ0rQRe5PAf';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})
log('初始化远程数据库完成')

const insertCreatedTime = function(createdTime) {
  let $createdTimeList = $('.tabs-vertical.yyy .tabs-vertical-bar')
  let d = new Date(createdTime * 1000)
  let date = d.toLocaleString()
  let t = `
    <li>${date}</li>
  `
  $createdTimeList.append(t)
}
const insertCodeSegmentContent = function(codeSegmentContent) {
  let $codeSegmentList = $('.tabs-vertical.yyy .tabs-vertical-content')
  let md = new Remarkable()
  let src = '```\n' + codeSegmentContent
  let content = md.render(src)
  let t = `
    <li>${content}</li>
  `
  $codeSegmentList.append(t)
}
const insertCodeSegmetItem = function(codeSegmetItem) {
  let createdTime = codeSegmetItem.createdTime
  insertCreatedTime(createdTime)
  let codeSegmentContent = codeSegmetItem.codeSegmentContent
  insertCodeSegmentContent(codeSegmentContent)
}
!function(){
  if(localStorage.xxx) {
    let xxxPre = localStorage.xxx
    let xxx = JSON.parse(xxxPre) //
    for (var i = 0; i < xxx.length; i++) {
      let codeSegmetItem = xxx[i]
      insertCodeSegmetItem(codeSegmetItem)
    }
  } else {
    log('之前没存过')
  }
}.call()


$('#postCodeSegment').on('submit', (event) => {
  event.preventDefault()
  let codeSegmentContent = $('#id-content').val()
  // 校验
  if(codeSegmentContent.trim() === ''){
    alert('存个空的干什么呀同学！')
    return
  }
  //
  let createdTime = Math.floor(new Date() / 1000)
  let codeSegmentItem = {
    createdTime,
    codeSegmentContent,
  }
  //
  let codeSegmentArray = []
  if (localStorage.xxx) {
    xxxPre = localStorage.xxx
    codeSegmentArray = JSON.parse(xxxPre)
  }
  codeSegmentArray.push(codeSegmentItem)
  localStorage.xxx = JSON.stringify(codeSegmentArray)

  let CodeSegment = AV.Object.extend('CodeSegment')
  let codeSegment = new CodeSegment()
  codeSegment.save(codeSegmentItem)
    .then(function(object) {
      alert('保存成功')
      insertCodeSegmetItem(codeSegmentItem)
    },function(r){
      log('没有成功', r)
    })
  $('#id-content').val('')
})
$('#requestCodeSegments').on('click', function(){
  // log('发起一次宝贵的请求')
  // 先把请求的东西存起来
  var query = new AV.Query('CodeSegment');
  query.find().then(function (r) {
    // 成功获得实例
    // typeof r // object
  }, function (error) {
    // 异常处理
    log(error)
  });
})
//
