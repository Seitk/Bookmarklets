/** 
 * Create a panel for injecting javascript into current website by URL
 **/

// Minified
!function(){function e(e,t){var n=document.createElement("script");n.src=e;var o=document.getElementsByTagName("head")[0],i=!1;n.onload=n.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,t(),n.onload=n.onreadystatechange=null,o.removeChild(n))},o.appendChild(n)}function t(){o.innerHTML="Paste the url and press enter:<br/><input id='script-src'>",i.appendChild(o);var t=document.getElementById("script-src");t.style.width="100%",t.addEventListener("keyup",function(i){if(13===i.keyCode){var d=t.value;e(d,function(){return msg="Script "+d+" loaded",n()})}else 27===i.keyCode&&(t.removeEventListener("keyup",this),o.remove())})}function n(){o.innerHTML=msg,i.appendChild(o),window.setTimeout(function(){"undefined"==typeof jQuery?i.removeChild(o):(jQuery(o).fadeOut("slow",function(){jQuery(this).remove()}),otherlib&&($jq=jQuery.noConflict()))},2500)}var o=document.createElement("div"),i=document.getElementsByTagName("body")[0];otherlib=!1,msg="",o.style.position="fixed",o.style.height="50px",o.style.width="220px",o.style.marginLeft="-110px",o.style.top="0",o.style.left="50%",o.style.padding="5px 10px",o.style.zIndex=9999,o.style.fontSize="12px",o.style.color="#222",o.style.backgroundColor="#fff",o.style.boxShadow="0px 5px 5px rgba(0,0,0,0.2)",window.showScriptDialog=t,showScriptDialog()}();

// Source
(function() {
    var el=document.createElement('div'),
    b=document.getElementsByTagName('body')[0];
    otherlib=false,
    msg='';
    el.style.position='fixed';
    el.style.height='50px';
    el.style.width='220px';
    el.style.marginLeft='-110px';
    el.style.top='0';
    el.style.left='50%';
    el.style.padding='5px 10px';
    el.style.zIndex = 9999;
    el.style.fontSize='12px';
    el.style.color='#222';
    el.style.backgroundColor='#fff';
    el.style.boxShadow= "0px 5px 5px rgba(0,0,0,0.2)";

    // more or less stolen form jquery core and adapted by paul irish
    function getScript(url,success){
            var script=document.createElement('script');
            script.src=url;
            var head=document.getElementsByTagName('head')[0],
            done=false;
        // Attach handlers for all browsers
        script.onload=script.onreadystatechange = function(){
            if ( !done && (!this.readyState
                || this.readyState == 'loaded'
                || this.readyState == 'complete') )
            {
                done=true;
                success();
                script.onload = script.onreadystatechange = null;
                head.removeChild(script);
            }};
        head.appendChild(script);
    }

    window.showScriptDialog = showDialog;
    function showDialog() {
        el.innerHTML="Paste the url and press enter:<br/><input id='script-src'>";
        b.appendChild(el);

        var input = document.getElementById("script-src");
        input.style.width='100%';
        input.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                var url = input.value;
                getScript(url ,function() {
                    msg='Script '+url+" loaded";
                    return showMsg();
                });
            } else if (event.keyCode === 27) {
                input.removeEventListener("keyup", this);
                el.remove();
            }
        });
    }

    showScriptDialog(); 

    function showMsg() {
        el.innerHTML=msg;
        b.appendChild(el);
        window.setTimeout(function() {
            if (typeof jQuery=='undefined') {
                b.removeChild(el);
            } else {
                jQuery(el).fadeOut('slow',function() {
                    jQuery(this).remove();
                });
                if (otherlib) {
                    $jq=jQuery.noConflict();
                }
            }
        } ,2500);
    }
})();