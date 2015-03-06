function redir1()
{
//var newurl = 'http://www.google.com';
    chrome.tabs.getSelected(null, function(tab) {
        var url = tab.url;
        var shareurl = url.split("&");
        shareurl = shareurl.join("%26");
        
        var fullurl = 'http://service.weibo.com/share/share.php?url=' + shareurl;
        chrome.tabs.create({url: fullurl});
    });	
}
document.addEventListener('DOMContentLoaded', function () {
  redir1();
  });
