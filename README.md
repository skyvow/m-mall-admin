# m-mall-admin
后台管理界面[Demo](https://www.skyvow.cn)用户名/密码：admin/123456

## 项目说明：

- 基于 [Node.js](https://nodejs.org)、[MongoDB](https://www.mongodb.org)、[Redis](http://redis.io) 开发的系统
- 基于 [Express](http://expressjs.com) 提供 RESTful API
- 基于 [apidoc](http://apidocjs.com) 提供接口文档
- 基于 [Angular.js](https://angularjs.org)、[Ionic](http://ionicframework.com)、[Webpack](http://webpack.github.io) 构建前端
- 基于 ECMAScript 6 编码风格

## 目录结构：

```
m-mall-admin/
  |-bin/                      # 启动文件
     |- wwww
  |-common/                   # 公共文件
     |- ...
  |-controllers/              # 控制器
     |- ...
  |-db/                       # 数据库配置
     |- ...
  |-logs/                     # 日志文件
     |- ...
  |-middlewares/              # 中间件
     |- ...
  |-models/                   # 模型
     |- ...
  |-proxy/                    # 代理
     |- ...
  |-public/                   # 静态资源文件
     |- ...
  |-routes/                   # 路由文件
     |- ...
  |-test/                     # 测试文件
     |- ...
  |-views/                    # 视图文件
     |- ...
  |-apidoc.json               # 接口文档配置
  |-app.js                    # 入口文件
  |-config.js                 # 配置文件
  |-...
```

##  安装部署：

克隆文件：
```
git clone git@github.com:skyvow/m-mall-admin.git
cd m-mall-admin
```

后端服务：
```
1. 安装 `Node.js[必须]` `MongoDB[必须]` `Redis[必须]`
2. 启动 MongoDB 和 Redis
3. 进入根目录下执行 `npm install` 安装项目所需依赖包
3. 执行 `npm start` 启动服务
4. 打开浏览器访问 `http://localhost:3000`
```

前端服务：
```
1. 首次启动项目未找到 build 文件
2. 进入 public 目录下执行 `npm install` 安装项目所需依赖包
3. 执行 `npm run build` 编译前端页面相关文件
4. 编译成功后生成 build 文件，位于 public 目录下
```

其他命令:
```
# 生成 API 接口文档
npm run apidoc
# 跑测试用例
npm test
```

##  贡献

有任何意见或建议都欢迎提 issue

##  License

MIT