function ContextOpen(url) {
	resultDialog = window_open(url, "result","width=500, height=500, resizable=yes, scrollbars=yes, toolbar=yes");
	resultDialog.focus();
	return void(0);
};

function ContextResize()
{
    if(window.formWide == true)
        return;
	var newHeight = document.getElementById("content_table").clientHeight + 150;
	var newWidth = document.getElementById("content_table").clientWidth + 100;


	if(newHeight + 400 > screen.height)
		newHeight = screen.height - 400;

	//if(newWidth + 400 > screen.height)
	//	newHeight = screen.height - 400;
	
	window.resizeTo(newWidth, newHeight);//500
}

function WideContextOpen(url)
{
    var resultDialog = window_open(url, "result",
        "width=" + (window.top.document.body.clientWidth - 300) + 
        ", height=" + (window.top.document.body.clientHeight - 60) + 
        ", resizable=no, scrollbars=1");
    resultDialog.formWide = true;
    resultDialog.focus();
    return void(0);
}