(async()=>{async function r(e){function c(a){return new Promise(e=>{const t=new Image;t.onload=()=>e(t),t.src=function(e){let t=e.style.backgroundImage;return t&&((e=t.trim().match(/(?!^)".*?"/g))&&0!==e.length||(t=null),t=e[0].replaceAll('"',"")),t}(a)})}try{return(await async function(e){var t=document.querySelector(e);if(t instanceof HTMLCanvasElement)return t;let a;if(a=t instanceof HTMLImageElement?t:await c(t))return(t=document.createElement("canvas")).width=a.naturalWidth,t.height=a.naturalHeight,t.getContext("2d").drawImage(a,0,0),t;throw Error("failed to get image element for "+e)}(e)).toDataURL("image/jpeg").split(";base64,")[1]}catch(e){return null}}let l=null;async function e(){var e,t,a,c,n=(e=500,await new Promise(t=>{let a=!1;const c=setInterval(async()=>{if(!a){a=!0;var e=await BG.exec("Settings.get");if(e.textcaptcha_auto_solve){e=await r(e.textcaptcha_image_selector);if(e&&l!==e)return l=e,clearInterval(c),a=!1,t({image_data:e})}a=!1}},e)}))["image_data"],i=await BG.exec("Settings.get");i.enabled&&i.textcaptcha_auto_solve&&(c=Time.time(),{job_id:t,data:n}=await NopeCHA.post({captcha_type:IS_DEVELOPMENT?"textcaptcha_dev":"textcaptcha",image_data:[n],key:i.key}),n)&&(a=(a=parseInt(i.textcaptcha_solve_delay_time))||100,0<(a=i.textcaptcha_solve_delay?a-(Time.time()-c):0)&&await Time.sleep(a),n)&&0<n.length&&(c=document.querySelector(i.textcaptcha_input_selector))&&!c.value&&(c.value=n[0])}for(;;){await Time.sleep(1e3);var t,a=await BG.exec("Settings.get");a&&a.enabled&&(t=await Location.hostname(),a.disabled_hosts.includes(t)||a.textcaptcha_auto_solve&&function(e){try{var t;return document.querySelector(e.textcaptcha_image_selector)?!(!(t=document.querySelector(e.textcaptcha_input_selector))||t.value):void 0}catch(e){}}(a)&&await e())}})();