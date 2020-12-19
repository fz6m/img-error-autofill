# img-error-autofill

自动填充网页上外链失效图片为默认图片

*version: 1.1*

### 使用

```html
<head>

  <!-- ...... -->
  <script src="https://cdn.jsdelivr.net/gh/fz6m/img-error-autofill@1.1/dist/img-error-autofill.min.js"></script>

</head>
```

### 开发

##### 自定义图片

在 `src/styles/style.scss` 中 `background` 的 `url(...)` 处填充你期望图片的 base64 ，以保证该图一定可以加载。

##### Build

```bash
  yarn
  yarn build
```

### 其他

不支持 lazyload 与 `background` 属性的图片