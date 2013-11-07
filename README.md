# Exemple de login/register simple avec Node.js, express, jade et mongoDB
## L'application
Le but de cette application est de montrer de manière simple une façon de se logger ou de s'enregistrer.
Elle est composé d'une page de login sur laquelle il est possible de se logger ou de s'enregistrer.
### Utilisation d'express
#### Déclaration des ressources statiques.
Express permet de gérer des ressources statiques pour son application, pour cela il suffit de mettre ses ressources statiques dans un dossier (par convention "/public"), et d'indiquer à express l'emplacement de ce dossier :
	app.use(express.static(__dirname + '/public'));
Ainsi nous pourrons faire référence aux fichier statique en utilisant le chemin :
	/public/chemin_vers_mon_fichier
Par exemple :
	link(rel="stylesheet", type="text/css", href="/public/css/bootstrap.css")
### Utilisation de jade
#### Déclaration des vues
De la même manière que pour les ressources statiques, nous devons indiqué à express où se trouvent les vues :
	app.set('views', __dirname + '/public/views');
Nous devons également indiqué à express que nous allons utiliser le moteur de rendu jade :
  	app.set('view engine', 'jade');
#### Les vues
[jade](http://jade-lang.com/) est un moteur de template. Son utilisation n'étant pas le but de cet exemple je ne détaillerai pas son utilisation. Pour plus d'information vous pouvez vous rendre sur le site de [jade](http://jade-lang.com/).
### Utilisation de MongoDB
#### mongojs
mongojs est un module Node.js facilitant l'utilisation de l'api mongoDB de Node.js. Son utilisation est très simple, voir le github de [mongojs](https://github.com/mafintosh/mongojs)