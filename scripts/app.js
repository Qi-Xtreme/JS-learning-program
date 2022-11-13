window.onload = function () {
  /* onload 当加载的时候 */
  document.getElementById("btn-hello").onclick = function () {
    /* onclick点击事件  获取按钮 */
    var msg = "hello javascript";
    for (var i = 0; i < 3; i++) {
      msg += "!";
    }
    alert(msg); //警告框
    console.log(msg); //控制台日志输出
    console.log(window);
  };
};
/* 文档注释 */

/**
 * 加法函数用于计算两个数之和
 * @param {*} a 一个加数，数值
 * @param {*} b 另一个加数，数值
 * @returns 两数之和
 */
function add(a, b) {
  return a + b;
}

add();
