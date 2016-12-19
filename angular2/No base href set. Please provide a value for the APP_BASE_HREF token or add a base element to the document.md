# No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document的解决办法

    跟着angular2的文档做英雄编辑器过程中，添加路由后，devtools一直报错如下：
    
    Unhandled Promise rejection: No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document. ; Zone: <root> ; Task: Promise.then ; Value: Error: No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.
    at new PathLocationStrategy (common.umd.js:697) [angular]
    at provideLocationStrategy (router.umd.js:5295) [angular]
    at AppModuleInjector.get (module.ngfactory.js:141) [angular]
    at AppModuleInjector.get (module.ngfactory.js:146) [angular]
    at AppModuleInjector.get (module.ngfactory.js:194) [angular]
    at AppModuleInjector.createInternal (module.ngfactory.js:239) [angular]
    at AppModuleInjector.NgModuleInjector.create (core.umd.js:8897) [angular]
    at NgModuleFactory.create (core.umd.js:8871) [angular]
    at eval (core.umd.js:8443) [angular]
    at Object.onInvoke (core.umd.js:4405) [angular]
    at Zone.run (zone.js:113) [<root> => angular]
    at NgZone.run (core.umd.js:4274) [<root>] Error: No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.
    at new PathLocationStrategy (http://localhost:3000/node_modules/@angular/common/bundles/common.umd.js:697:23) [angular]
    at provideLocationStrategy (http://localhost:3000/node_modules/@angular/router/bundles/router.umd.js:5295:11) [angular]
    at AppModuleInjector.get (/AppModule/module.ngfactory.js:141:77) [angular]
    at AppModuleInjector.get (/AppModule/module.ngfactory.js:146:84) [angular]
    at AppModuleInjector.get (/AppModule/module.ngfactory.js:194:151) [angular]
    at AppModuleInjector.createInternal (/AppModule/module.ngfactory.js:239:60) [angular]
    at AppModuleInjector.NgModuleInjector.create (http://localhost:3000/node_modules/@angular/core/bundles/core.umd.js:8897:80) [angular]
    at NgModuleFactory.create (http://localhost:3000/node_modules/@angular/core/bundles/core.umd.js:8871:22) [angular]
    at eval (http://localhost:3000/node_modules/@angular/core/bundles/core.umd.js:8443:65) [angular]
    at Object.onInvoke (http://localhost:3000/node_modules/@angular/core/bundles/core.umd.js:4405:41) [angular]
    at Zone.run (http://localhost:3000/node_modules/zone.js/dist/zone.js:113:43) [<root> => angular]
    at NgZone.run (http://localhost:3000/node_modules/@angular/core/bundles/core.umd.js:4274:66) [<root>]
解决办法：

down vote
accepted
https://angular.io/docs/ts/latest/guide/router.html

Add the base element just after the <head> tag. If the app folder is the application root, as it is for our application, set the href value exactly as shown here.
The <base href="/"> tells the Angular router what is the static part of the URL. The router then only modifies the remaining part of the URL.

<head>
  <base href="/">
  ...
</head>
Alternatively add
