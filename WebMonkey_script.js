/**
 * Use this script inside the WebMonkey Chrome Extension
 */
if (window.location.href.indexOf("ui/v1/signin") > -1) {
    var defn = "#js-mainContainer.container{background-image:url('https://p-a-g-e-h-u-b.github.io/images/Gradient-Red-Blue-02.webp') !important;}";
    var stl = document.createElement("style");
    stl.type = "text/css";
    stl.appendChild(document.createTextNode(defn));
    document.querySelector("head").appendChild(stl);
}
