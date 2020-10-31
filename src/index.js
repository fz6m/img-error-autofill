import './styles/style.scss'

const load = () => {
  const imgs = document.getElementsByTagName('img')
  for (let i = 0, length = imgs.length; i < length; i++) {
    imgs[i].setAttribute(
      'onerror',
      "this.classList.add('u-img-error-autofill')"
    )
  }
}

load()
