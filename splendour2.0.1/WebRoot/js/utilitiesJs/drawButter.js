onmessage = function(event)

{
	setTimeout(onmessage,200); 
	postMessage(123);
};