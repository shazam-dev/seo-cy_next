import Script from "next/script";

export function Yandex() {
    return (
        <>
            <Script
                type="text/javascript"
                // src="/javascriptYM.js"
                id="my-script"
                // strategy="lazyOnload"
                // async
                // defer
            >
                {`
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
             
                ym(96674488, "init", {
                     clickmap:true,
                     trackLinks:true,
                     accurateTrackBounce:true
                });
                `}
            </Script>
            <noscript>
                <div>
                <img src="https://mc.yandex.ru/watch/96674488" style={{position: 'absolute', left:'-9999px'}} alt="" />
                </div>
            </noscript>
        </>
    );
}
