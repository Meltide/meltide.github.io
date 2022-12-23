var xhr = new XMLHttpRequest();
            xhr.open('get', 'https://v1.hitokoto.cn/?c=b');
            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                var data = JSON.parse(xhr.responseText);//获得字符串形式的响应数据。
                var hitokoto = document.getElementById('hitokoto');
                var fromm=document.getElementById("from")
                fromm.innerText=data.from;
                hitokoto.innerText = data.hitokoto;
              }
            }
            xhr.send(); 
