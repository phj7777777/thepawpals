var en = require("./translations.en.json");
var zh = require("./translations.zh.json");

const i18n = {
    translations: {
        en: en.i18n,
        zh: zh.i18n,
    },
    defaultLang: "en",
    useBrowserDefault: true,
};

module.exports = i18n;
