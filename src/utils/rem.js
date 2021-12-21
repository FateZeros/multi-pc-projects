/**
 * 初始化屏幕分辨率
 */
const screen = {
  designWidth: 1920, // 设计稿屏幕宽度
  designHeight: 1080, // 设计稿屏幕高度
  minHeight: 620, // laptop高度
  resize: function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 19.2 + 'px'
  }
}

screen.resize()
addEventListener('resize', screen.resize)
