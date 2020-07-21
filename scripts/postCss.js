const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const postcssCustomProperties = require('postcss-custom-properties')
const removeRules = require('postcss-remove-rules')
const comments = require('postcss-discard-comments')
const fs = require('fs')

fs.readFile('src/auro-radio.css', (err, css) => {
  postcss([autoprefixer, postcssCustomProperties, comments])
    .use(comments({
      remove: function(comment) { return comment[0] == "@"; }
    }))
    .use(removeRules({
      rulesToRemove: {
        ':root': '*'
      }
    }))
    .process(css, { from: 'src/auro-radio.css', to: 'src/auro-radio.css' })
    .then(result => {
      fs.writeFile('src/auro-radio.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('src/auro-radio.map', result.map, () => true)
      }
    })
})

fs.readFile('src/auro-radio-group.css', (err, css) => {
  postcss([autoprefixer, postcssCustomProperties, comments])
    .use(comments({
      remove: function(comment) { return comment[0] == "@"; }
    }))
    .use(removeRules({
      rulesToRemove: {
        ':root': '*'
      }
    }))
    .process(css, { from: 'src/auro-radio-group.css', to: 'src/auro-radio-group.css' })
    .then(result => {
      fs.writeFile('src/auro-radio-group.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('src/auro-radio-group.map', result.map, () => true)
      }
    })
})
