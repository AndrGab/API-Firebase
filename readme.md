# API with FIREBASE
>A very simple CRUD application with Firebase/Node.js

## Live Demo
Use your preferred  REST client to test the application.

Example:

**CRUD**

*Create*
[https://us-central1-go-inventory.cloudfunctions.net/app/create-item](https://us-central1-go-inventory.cloudfunctions.net/app/create-item)

```json
{
	"cod" : 5,
	"nome" : "EMPRESA",
	"contato" : "Rafael",
	"telefone" : "(43) 9999-9999"
	
}
```

*Read*
[https://us-central1-go-inventory.cloudfunctions.net/app/read-item/9](https://us-central1-go-inventory.cloudfunctions.net/app/read-item/5)

*Update*
[https://us-central1-go-inventory.cloudfunctions.net/app/update-item/5](https://us-central1-go-inventory.cloudfunctions.net/app/update-item/5)

```json
{
	"nome" : "UPDATED",
	"contato" : "UPDATED",
	"telefone" : "(43) 9999-9999"
	
}
```

*Delete*
[https://us-central1-go-inventory.cloudfunctions.net/app/delete-item/5](https://us-central1-go-inventory.cloudfunctions.net/app/delete-item/5)

*List All Data*
[https://us-central1-go-inventory.cloudfunctions.net/app/read-itens](https://us-central1-go-inventory.cloudfunctions.net/app/read-itens)

---
*Application based on Andrew Evan's [Article](https://indepth.dev/building-an-api-with-firebase/)*
