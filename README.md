# img-error-autofill

自动填充网页上外链失效图片为默认图片

*version: 1.2*

### example

<img src='https://cdn.jsdelivr.net/gh/fz6m/Private-picgo@moe/img/20201220021200.png' width='30%'>

<br>

<img src='https://cdn.jsdelivr.net/gh/fz6m/Private-picgo@moe/img/20201220021215.png' width='50%'>


### usage

```html
<head>

  <!-- ...... -->
  <script src="https://cdn.jsdelivr.net/gh/fz6m/img-error-autofill@1.2/dist/img-error-autofill.min.js"></script>

</head>
```

### development

##### custom image

在 `src/styles/style.scss` 中 `background` 的 `url(...)` 处填充你期望图片的 base64 ，以保证该图一定可以加载。

##### build

```bash
  yarn
  yarn build
```

### other

不支持 `background` 属性的图片