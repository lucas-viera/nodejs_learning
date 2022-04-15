We read directory contents using:
```javascript
fs.readdir('/home/lucas/Downloads', (err, data) => {
    console.log(data);
});
```

We get the output:
```
[ 'aws',
  'awscliv2.zip',
  'blockchain and smart contracts.pdf',
  'postman-9.15.2-linux-x64',
  'postman-9.15.2-linux-x64.tar.gz' ]
```
