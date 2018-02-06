# i42n
Do you want a simple internationalization solution for you pages without complex configurations and that can run simply on client-side?

i42n provides a very simple solution by just adding the library and your translation file. To setup i42n in your page just add the following code to your head section.

## Jquery initialization

```
<head>
  ...
  <script src="../dist/i42n-min.js"></script>
  <script src="js/locations.js"></script>
  <script>
    $(document).ready(function(){
      i42nInit();
    })
  </script>
  ...
</head>
```

## Vanilla initialization

```
<head>
  ...
  <script src="../dist/i42n-min.js"></script>
  <script src="js/locations.js"></script>
  <script>
    window.onload = i42nInit("en-US");
  </script>
  ...
</head>
```


The file `locations.js` is a custom file with a js object that contains texts translated to each language option. For each language a list of tuples with the id of a HTML element and its content is defined.

```
i42n = {
  "pt-BR": {
    "title": "Olá mundo",
    "text": "Este é um texto de exemplo do uso da biblioteca i42n."

  },
  "en-US": {
    "title": "Hello world",
    "text": "This is a sample text to show how to use i42n library"
  }
}
```

The HTML elements that will be translated must have the same id as defined in `locations.js` and the class i42n.

```
<body>
  <div id="content">
    <h1 id="title" class="i42n">	</h1>
    <div id="text" class="i42n otherClasses">	</div>
  </div>
</body>
```


By default i42n will load the client's default browser language. To change the default language a valid parameter is passed in i42n initialization.

```
<head>
  ...
  <script>
    $(document).ready(function(){
      i42nInit("en-US");
    })
  </script>
  ...
</head>
```
It's also possible to create links that will update the page contents with a new translation when it is clicked.

```
<a href="#" class="i42n-action" data-lang="pt-BR">pt-BR</a>
```
