//抓蝴蝶的声音
function playCaughtSound() {
	var audio = document.createElement("audio");
	if (audio != null && audio.canPlayType && audio.canPlayType("audio/ogg"))
	{
		audio.src = "music/caught.ogg";
		audio.play();
	}
}

//捕获蝴蝶时的声音
function playButtterSound() {
	var audio = document.createElement("audio");
	if (audio != null && audio.canPlayType && audio.canPlayType("audio/ogg"))
	{
		audio.src = "music/butterCaught.ogg";
		audio.play();
	}
}

//捕获蜜蜂时的声音
function playBeeSound() {
	var audio = document.createElement("audio");
	if (audio != null && audio.canPlayType && audio.canPlayType("audio/ogg"))
	{
		audio.src = "music/beeCaught.ogg";
		audio.play();
	}
}

//点击按钮的声音
function playClickSound() {
	var audio = document.createElement("audio");
	if (audio != null && audio.canPlayType && audio.canPlayType("audio/ogg"))
	{
		audio.src = "music/click.ogg";
		audio.play();
	}
}