onmessage = function(event)

{
	setTimeout(onmessage,150); 
	postMessage(123);
};