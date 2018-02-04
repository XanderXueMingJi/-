var arr = [];

//csdn  前端简单说
arr.push.apply(arr, Array.prototype.slice.call(document.getElementsByClassName('csdn-toolbar-skin-black')));
arr.push.apply(arr, Array.prototype.slice.call(document.getElementsByClassName('pulllog-box')));
arr.push.apply(arr, Array.prototype.slice.call(document.getElementsByTagName("aside")));
arr.filter(function (value){
   value.style.display = 'none';
});

