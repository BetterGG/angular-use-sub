# angularCommonSubtreeOne
angular项目的subtree

# 尝试公共组件

## 添加子项目

命令：
```
git subtree add --prefix=<存放子项目的相对路径> <子项目git地址> <分支> --squash
```

例如：
```
git subtree add --prefix=src/Common https://github.com/M76chao/Common.git master
```
问题：
遇见报错Working tree has modifications.  Cannot add.
先commit当前更改，再重新执行上述命令


遇见报错：SSL certificate problem: unable to get local issuer certificate
管理员命令行，执行`git config --system http.sslverify false`


## 修改子项目代码
在原项目中直接commit就行，无需其他特殊配置，建议子项目代码单独commit，不要跟外围代码一起提交

## 推送子项目代码 push

命令：
```
git subtree push --prefix=<存放子项目的相对路径> <子项目git地址> <分支> --squash
```

例如：
```
git subtree push --prefix=src/Common https://github.com/M76chao/Common.git master
```

## 拉取子项目最新代码 pull
命令：
```
git subtree pull --prefix=<存放子项目的相对路径> <子项目git地址> <分支> --squash
```

例如：
```
git subtree pull --prefix=src/Common https://github.com/M76chao/Common.git master
```

## 其他 git subtree split
命令：
```
git subtree split --prefix=<存放子项目的相对路径> --rejoin
```

例如：
```
git subtree split --prefix=src/Common --rejoin
```


## vite模块联邦问题总结
1. 不支持热更新，因为vite开发时类似于运行时，并没有打包，也就没有打包所拥有的目录结构
2. 插件本身的问题，打包的组件不能出现text node，否则会消失。
3. 层级引用问题，app1 引用的 app2 ，如果app2没有导出，则直接失效

都有的问题：
. 主要就是编辑器的类型提示
