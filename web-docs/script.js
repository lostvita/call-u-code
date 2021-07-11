import Navigo from 'navigo';
import 'quill'
const router = new Navigo('/', { hash: true, noMatchWarning: true })

router.navigate(`/document/${Date.now()}`)
router.on('/', (match) => {
  console.log('root >> ', match)
})
router.on('/document/:id', (match) => {
  const $container = document.getElementById('container')
  const $editor = document.createElement('div')
  $container.append($editor)
  var quill = new Quill($editor, {
    theme: 'snow'
  });
});

router.resolve();