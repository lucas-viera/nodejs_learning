We must add `app.get` in `server.js` just like that:

```javascript
app.get('/messages', (request, response) => {
    response.send('hello');
});
```

Now we can visit `http://localhost:3000/messages`