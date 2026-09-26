// 依瀏覽器語言在中文（根目錄）與英文（/en/）之間切換，並記住使用者手動選擇的語言。
// 路徑以本檔案所在位置為網站根目錄計算，所以放在 GitHub Pages 子路徑（/heartroom-web/）或自訂網域都能運作。
// 語言偏好只存在瀏覽器的 localStorage，不會傳送到任何地方。
(function () {
  'use strict';

  var STORAGE_KEY = 'heartroom_lang_pref';
  var script = document.currentScript;
  var rootPath = script ? new URL('.', script.src).pathname : '/';

  function getStoredPref() {
    try {
      var value = window.localStorage.getItem(STORAGE_KEY);
      return value === 'en' || value === 'zh' ? value : null;
    } catch (error) {
      return null;
    }
  }

  function setStoredPref(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* 私密瀏覽等情況無法儲存時，只是不記住偏好 */
    }
  }

  function preferredLangFromBrowser() {
    var langs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || ''];
    for (var i = 0; i < langs.length; i++) {
      if (/^zh/i.test(langs[i])) return 'zh';
    }
    return 'en';
  }

  function targetPathForLang(lang, path) {
    if (path.indexOf(rootPath) !== 0) return null;
    var relative = path.slice(rootPath.length);
    var currentlyEn = relative === 'en' || relative.indexOf('en/') === 0;
    if (lang === 'en' && !currentlyEn) return rootPath + 'en/' + relative;
    if (lang === 'zh' && currentlyEn) return rootPath + relative.replace(/^en\/?/, '');
    return null;
  }

  (function redirectIfNeeded() {
    var stored = getStoredPref();
    var lang = stored || preferredLangFromBrowser();
    if (!stored) setStoredPref(lang);
    var target = targetPathForLang(lang, window.location.pathname);
    if (target) {
      window.location.replace(target + window.location.search + window.location.hash);
    }
  })();

  document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.lang-switch[data-lang]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (event) {
        setStoredPref(event.currentTarget.getAttribute('data-lang'));
      });
    }
  });
})();
