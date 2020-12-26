!function(t){var a={};function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,a){if(1&a&&(t=e(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)e.d(n,i,function(a){return t[a]}.bind(null,i));return n},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},e.p="",e(e.s=59)}({1:function(t,a){t.exports=lodash},15:function(t,a,e){"use strict";var n=e(2),i=e.n(n);a.a=function(t,a,e){return i.a.ajax({url:rankMath.ajaxurl,type:e||"POST",dataType:"json",data:i.a.extend(!0,{action:"rank_math_"+t,security:rankMath.security},a)})}},18:function(t,a,e){"use strict";var n=e(2),i=e.n(n);a.a=function(t,a,e,n){a=a||"error",n=n||!1;var o=i()('<div class="notice notice-'+a+' is-dismissible"><p>'+t+"</p></div>").hide();e.next(".notice").remove(),e.after(o),o.slideDown(),i()(document).trigger("wp-updates-notice-added"),n&&setTimeout((function(){o.fadeOut((function(){o.remove()}))}),n)}},2:function(t,a){t.exports=jQuery},59:function(t,a,e){"use strict";e.r(a);var n,i=e(2),o=e.n(i),r=e(1),s=e(15),c=e(18);(n=o.a)((function(){window.rankMathOptions={init:function(){this.misc(),this.preview(),this.scCache(),rankMathAdmin.variableInserter(),this.searchEngine.init(),this.addressFormat(),this.siteMap(),this.robotsEvents()},searchEngine:{init:function(){n("#setting-panel-analytics").addClass("exclude"),this.form=n(".rank-math-search-options"),this.wrap=this.form.closest(".rank-math-wrap-settings"),this.input=this.form.find("input"),this.tabs=this.wrap.find(".rank-math-tabs"),this.panels=this.wrap.find(".rank-math-tab:not(.exclude)"),this.ids=["general","titles","sitemap"],this.indexes={},this.buildIndex(),this.events()},events:function(){var t=this,a=t.tabs.find(">.rank-math-tabs-navigation"),e=n('<div class="rank-math-search-dropdown"></div>');t.tabs.find(">.rank-math-tabs-content").prepend('<div class="rank-math-setting-search-empty hidden">No results found.</div>'),t.form.append(e),e.hide().empty();var i=Object(r.debounce)((function(a){t.wrap.addClass("searching"),t.searchIndexes(a,e)}),300);t.form.on("click",".clear-search",(function(e){e.preventDefault(),t.input.val(""),t.clearSearch(a)})),this.ids.forEach((function(a){e.append(t.indexes[a])})),t.input.on("input",(function(){if(""===t.input.val())return t.clearSearch(a,e),!1;i(t.input.val().toLowerCase())})),e.on("click",".cmb-row",(function(){var t=n(this),a=window.location.origin+window.location.pathname+"?page=rank-math-options-"+t.data("settings-id")+"#"+t.closest(".dropdown-tab").data("id");a===window.location.href?window.location.reload():window.location=a}));var o=n(".rank-math-search-options, .rank-math-search-options *, .rank-math-search-dropdown, .rank-math-search-dropdown *");n("body").on("click",(function(t){n(t.target).is(o)||e.hide()}))},searchIndexes:function(t,a){if(!(1>t.trim().length)){var e=a.find(".cmb-row"),i=0;e.hide().each((function(){var a=n(this);a.text().trim().toLowerCase().includes(t)&&(a.show(),++i)})),a.show(),a.toggleClass("empty",0===i)}},clearSearch:function(t,a){a=a||!1,this.wrap.removeClass("searching search-no-results"),n(">a.active",t).trigger("click"),a?a.hide():(n(".cmb-row").show(),n(".rank-math-cmb-dependency",".cmb-form, .rank-math-metabox-wrap").each((function(){rankMathAdmin.loopDependencies(n(this))})))},buildIndex:function(){var t=window.localStorage.getItem("rank-math-option-search-index"),a=void 0===t||t!==rankMath.version;this.ids.forEach((function(t){this.getIndex(t,a)}),this),a&&window.localStorage.setItem("rank-math-option-search-index",rankMath.version)},getIndex:function(t,a){var e=this;a?n("<div/>").load(rankMath.adminurl+"?page=rank-math-options-"+t,(function(a,i){if("error"!==i){var o=n(a).find(".rank-math-tabs-content");o.find(".rank-math-tab").each((function(){var t=n(this);t.removeClass().addClass("dropdown-tab"),t.attr("data-id",t.attr("id")),t.removeAttr("id"),t.find(".rank-math-notice").remove(),t.find(".rank-math-desc").remove()})),o.find(".rank-math-tab").removeClass().addClass("dropdown-tab").removeAttr("id"),o.find(".cmb-row").each((function(){var a=n(this);a.attr("data-settings-id",t),(a.hasClass("cmb-type-title")||a.hasClass("cmb-type-notice")||a.hasClass("rank-math-notice")||a.hasClass("rank-math-desc"))&&a.remove(),a.find(".cmb-td").children(":not(.cmb2-metabox-description)").remove(),a.find("label,.cmb2-metabox-description").unwrap(),a.removeAttr("data-fieldtype")})),o=o.html().replace(/(\r\n\t|\n|\r\t)/gm,""),e.indexes[t]=n(o),window.localStorage.setItem("rank-math-option-"+t+"-index",o)}})):e.indexes[t]=n(window.localStorage.getItem("rank-math-option-"+t+"-index"))}},scCache:function(){n(".console-cache-delete").on("click",(function(t){t.preventDefault();var a=n(this),e=a.data("days"),i=-1===e?"You are about to delete all the previously imported data?":"You are about to delete your 90 days Cache?";window.confirm(i+" Are you sure you want to do this?")&&(a.prop("disabled",!0),Object(s.a)("analytics_delete_cache",{days:e},"GET").always((function(){a.prop("disabled",!1)})).done((function(t){t&&t.success&&(Object(c.a)("Cache deleted.","success",n("h1",".rank-math-wrap-settings")),n(".rank-math-console-db-info").remove(),a.closest(".cmb-td").append(t.message))})))}));var t=n("#console_caching_control"),a=n(".console-cache-delete-custom");t.on("keyup",(function(){var e=t.val();a.data("days",e),a.html(a.attr("title").replace("%d",e))})).trigger("keyup"),n(".console-cache-update-manually").on("click",(function(a){a.preventDefault();var e=n(this),i=t.val();e.prop("disabled",!0),Object(s.a)("analytic_start_fetching",{days:i},"GET").done((function(t){t&&t.success?(Object(c.a)(t.message,"success",n("h1.page-title")),e.text("Fetching in Progress")):Object(c.a)("Unable to update cache due to: "+t.error,"error",n("h1.page-title"))}))}))},addressFormat:function(){var t=n("input[type=text], textarea",".rank-math-address-format");if(t.length){t.attr("autocomplete","off"),t.wrap('<div class="rank-math-variables-wrap"/>');var a=n("body"),e=t.parent(".rank-math-variables-wrap");e.append('<a href="#" class="rank-math-variables-button button button-secondary button-address"><span class="dashicons dashicons-arrow-down-alt2"></span></a>');var i=n("<ul/>"),o=n('<div class="rank-math-variables-dropdown"></div>');n.each({"{address} {locality}, {region} {postalcode}":"(New York, NY 12345)","{address} {postalcode}, {locality} {region}":"(New York 12345, NY)","{address} {locality} {postalcode}":"(New York NY 12345)","{postalcode} {region} {locality} {address}":"(12345 NY New York)","{address} {locality}":"(New York NY)"},(function(t,a){i.append('<li data-var="'+a+'"><strong>'+t+"</strong></li>")})),o.append(i),n("rank-math-variables-wrap:eq(0)").append(o);var r=n(".rank-math-variables-button, .rank-math-variables-button *, .rank-math-variables-dropdown, .rank-math-variables-dropdown *");a.on("click",(function(t){n(t.target).is(r)||o.hide()}));var s=o.find("input"),c=o.find("li");n(e).on("click",".rank-math-variables-button",(function(t){t.preventDefault(),n(this).after(o),c.show(),o.show(),s.val("").focus()})),o.on("click","li",(function(t){t.preventDefault();var a=n(this);a.closest(".rank-math-variables-wrap").find("textarea").val(a.find("strong").text())}))}},misc:function(){void 0!==o.a.fn.select2&&n("[data-s2-pages]").select2({ajax:{url:rankMath.ajaxurl+"?action=rank_math_search_pages",data:function(t){return{term:t.term,security:rankMath.security}},dataType:"json",delay:250},width:"100%",minimumInputLength:3}),n("#htaccess_accept_changes").on("change",(function(){n("#htaccess_content").prop("readonly",!this.checked)})),n(".reset-options").on("click",(function(){return!!window.confirm("Are you sure? You want to reset settings.")&&(n(window).off("beforeunload"),!0)}));var t=n(".rank-math-tabs");setTimeout((function(){window.localStorage.removeItem(t.attr("id"))}),1e3),n(".save-options").on("click",(function(){var a=n("> .rank-math-tabs-navigation > a.active",t);return window.localStorage.setItem(t.attr("id"),a.attr("href")),n(window).off("beforeunload"),!0}));var a=!1;n(window).on("load",(function(){n(".cmb-form").on("change","input:not(.notrack), textarea:not(.notrack), select:not(.notrack)",(function(){a=!0}))})),n(window).on("beforeunload",(function(){if(a)return"Are you sure? You didn't finish the form!"})),n(".custom-sep").on("keyup",(function(){var t=n(this);t.closest("li").find("input.cmb2-option").val(t.text()).trigger("change")}))},preview:function(){n("[data-preview]").on("change",(function(){var t=n(this),a=null,e="";if(t.is(":radio")&&(a=t.closest(".cmb-td")),null!==a)if(a.hasClass("done"))t.is(":checked")&&(e=a.find("h5")).text(e.data("title").format(t.val()));else if(a.addClass("done"),"title"===t.data("preview")){var i="";i+='<div class="rank-math-preview-title" data-title="Preview"><div>',i+='<h5 data-title="'+rankMath.postTitle+" {0} "+rankMath.blogName+'"></h5>',i+="<span>"+rankMath.postUri+"</span>",i+="</div></div>",a.append(i),(e=a.find("h5")).text(e.data("title").format(t.val()))}})).trigger("change")},siteMap:function(){var t=n(".sitemap-nginx-notice");t.length&&t.on("click","a span",(function(a){return a.preventDefault(),t.toggleClass("active"),!1}))},robotsEvents:function(){n(".rank-math-robots-data").each((function(){var t=n(this).find("ul li:first-child input"),a=n(this).find("ul li:nth-child(2) input");t.on("change",(function(){t.is(":checked")&&a.prop("checked",!1).trigger("change")})),a.on("change",(function(){a.is(":checked")&&t.prop("checked",!1)}))}))}},window.rankMathOptions.init()}))}});