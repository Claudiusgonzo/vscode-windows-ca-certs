var https = require('https')
var x = require('./enumsync')

https.get('https://ya.ru')

var ca = https.globalAgent.options
ca = ca.ca || (ca.ca = [])

console.time('cas')
x(function(pem)
{
  ca.push(pem)
})
console.timeEnd('cas')

https.get('https://ekb.ru', got)

function got(resp)
{
  resp.pipe(process.stdout)
}