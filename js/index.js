//获取年份
			var dt = new Date();
			document.getElementById("year").innerHTML = dt.getFullYear();
			document.getElementById("cpyear").innerHTML = dt.getFullYear();
			//必应搜索
			function search() {
				if (document.getElementById("search_input").value != "") {
					window.location.href = "https://cn.bing.com/search?q=" + document.getElementById("search_input").value;
					document.getElementById("search_input").value = "";
				}
				return false;
			}
			//一言
			var xhr = new XMLHttpRequest();
			xhr.open('get', 'https://v1.hitokoto.cn/?c=b');
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					var data = JSON.parse(xhr.responseText);
					var hitokoto = document.getElementById('hitokoto');
					var fromm = document.getElementById("from")
					fromm.innerText = data.from;
					hitokoto.innerText = data.hitokoto;
				}
			}
			xhr.send();
			//获取日期
			var ThisNowDate = new Date();
			if (document.getElementById("date")) {
				if (ThisNowDate.getDay() == 1)
					var Weeks = '星期一'
				else if (ThisNowDate.getDay() == 2)
					var Weeks = '星期二'
				else if (ThisNowDate.getDay() == 3)
					var Weeks = '星期三'
				else if (ThisNowDate.getDay() == 4)
					var Weeks = '星期四'
				else if (ThisNowDate.getDay() == 5)
					var Weeks = '星期五'
				else if (ThisNowDate.getDay() == 6)
					var Weeks = '星期六'
				else if (ThisNowDate.getDay() == 0)
					var Weeks = '星期日'
				document.getElementById('date').innerHTML = ThisNowDate.getMonth() + 1 +
					'月' +
					ThisNowDate.getDate() + '日' + ' ' +
					Weeks;
			}
			//鼠标点击特效
			var a_idx = 0;
			jQuery(document).ready(function($) {
				$("body").click(function(e) {
					var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
					var $i = $("<span/>").text(a[a_idx]);
					a_idx = (a_idx + 1) % a.length;
					var x = e.pageX,
						y = e.pageY;
					$i.css({
						"z-index": 100000000,
						"top": y - 20,
						"left": x,
						"position": "absolute",
						"font-weight": "bold",
						"color": "#ff6651"
					});
					$("body").append($i);
					$i.animate({
						"top": y - 180,
						"opacity": 0
					}, 1500, function() {
						$i.remove();
					});
				});
			});
