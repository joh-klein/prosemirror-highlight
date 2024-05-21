import lowlightCode from './lowlight?raw'
import refractorCode from './refractor?raw'
import { setupView } from './setup'
import shikiLazyCode from './shiki-lazy?raw'
import shikiCode from './shiki?raw'
import shikijiLazyCode from './shikiji-lazy?raw'
import shikijiCode from './shikiji?raw'
import sugarHighCode from './sugar-high?raw'

function getOrCreateElement(id: string): HTMLElement {
  const container = document.getElementById('container')
  if (!container) {
    throw new Error('Container not found')
  }

  let element = document.getElementById(id)
  if (!element) {
    element = document.createElement('div')
    element.id = id
    element.classList.add('editor')
    element.setAttribute('spellcheck', 'false')
    container.appendChild(element)
  }
  return element
}

function main() {
  void setupView({
    mount: getOrCreateElement('editor-shiki'),
    plugin: () => import('./shiki').then((mod) => mod.shikiPlugin),
    title: 'Shiki',
    code: shikiCode,
  })

  void setupView({
    mount: getOrCreateElement('editor-shikiji'),
    plugin: () => import('./shikiji').then((mod) => mod.shikijiPlugin),
    title: 'Shikiji',
    code: shikijiCode,
  })

  void setupView({
    mount: getOrCreateElement('editor-lowlight'),
    plugin: () => import('./lowlight').then((mod) => mod.lowlightPlugin),
    title: 'Lowlight',
    code: lowlightCode,
  })

  void setupView({
    mount: getOrCreateElement('editor-refractor'),
    plugin: () => import('./refractor').then((mod) => mod.refractorPlugin),
    title: 'Refractor',
    code: refractorCode,
  })

  void setupView({
    mount: getOrCreateElement('editor-sugar-high'),
    plugin: () => import('./sugar-high').then((mod) => mod.sugarHighPlugin),
    title: 'Sugar High',
    code: sugarHighCode,
  })

  void setupView({
    mount: getOrCreateElement('editor-shiki-lazy'),
    plugin: () => import('./shiki-lazy').then((mod) => mod.shikiLazyPlugin),
    title: 'Shiki (Lazy language loading)',
    code: shikiLazyCode,
  })

  void setupView({
    mount: getOrCreateElement('editor-shikiji-lazy'),
    plugin: () => import('./shikiji-lazy').then((mod) => mod.shikijiLazyPlugin),
    title: 'Shikiji (Lazy language loading)',
    code: shikijiLazyCode,
  })
}

main()
