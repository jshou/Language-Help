var languagehelp = {}

languagehelp.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ languagehelp.showFirefoxContextMenu(e); }, false);
};

languagehelp.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-languagehelp").hidden = !gContextMenu.isTextSelected;
};

window.addEventListener("load", languagehelp.onFirefoxLoad, false);

languagehelp.onMenuItemCommand = function(event) {
    var prefs = Components.classes["@mozilla.org/preferences-service;1"]
                          .getService(Components.interfaces.nsIPrefService).getBranch("extensions.languagehelp.");
    var urlPrefix = prefs.getCharPref("dictionary");

    var query = content.getSelection();
    var tab = gBrowser.addTab(urlPrefix + encodeURIComponent(query));
    gBrowser.selectedTab = tab;
};
