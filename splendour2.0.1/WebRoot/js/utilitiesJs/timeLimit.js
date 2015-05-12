onmessage = function(event)

{
	setTimeout(onmessage, 600000);
	postMessage(123);
};