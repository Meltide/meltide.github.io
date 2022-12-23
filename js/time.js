function getTime() {
                var date = new Date();
                var year = date.getFullYear(); //获取年份
                var month = date.getMonth() + 1; //获取月份
                var day = date.getDate(); //获取日期
                var hour = date.getHours(); //获取小时
                hour = hour < 10 ? '0' + hour : hour;
                var minute = date.getMinutes(); // 获取分
                minute = minute < 10 ? '0' + minute : minute;
                var seconds = date.getSeconds(); //获取秒
                seconds = seconds < 10 ? '0' + seconds : seconds;
                return year + '-' + month + '-' + day + '&nbsp;' + hour + ':' + minute + ':' + seconds;
            }
     
            setInterval(function() {
                document.querySelector('.box').innerHTML = getTime();
            }, 1000) 
