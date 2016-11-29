优化weback的方法汇总<br>
===
* 路径复杂的情况下使用`moduledirectories`
* ## babel-loader能者多劳
    对于第三方插件，不使用`babel-loader`进行加载，因为他们其实已经进行了转换，可以通过以下代码进行屏蔽：
    ```Javascript
    exclude: function (path) {
      var isNpmModule = !path.match(Node_modules/)
      return isNpmModule;
    }
    ```
* ## `plugins`的优化
    *使用`cheap-sourse-map`;
    *`OPTIMIZATION` 正式环境再用`UglifyJsPlugin`
    *使用`CommonsChunk`
* 使用`DLL`
