var container;
var i = 0;
var intervalId;

function pageInit() {
	container = document.getElementById("container");
	// container.innerHTML="Hello JavaScript";

	// timerHandler();

	//setTimeout(timerHandler2,1000,"小吴");

	//以一定的时间间隔重复执行某个动作
	intervalId=setInterval(timerHandler1,1000);
}

function timerHandler() {
	container.innerHTML = i;
	i++;

	//延时调用方法
	//clearTimeout 取消setTimeout延时执行
	if (i <= 10) {
		setTimeout(timerHandler, 1000);
	};
}

function timerHandler1() {
	container.innerHTML = i;
	i++;
	
	if (i > 10) {
		clearInterval(intervalId);
	};
}

function timerHandler2(name) {
	container.innerHTML = "Hello " + name;
}
