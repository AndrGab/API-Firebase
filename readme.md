# API with FIREBASE
>A very simple CRUD application with Firebase/Node.js

## Live Demo
Use your preferred  REST client to test the application.

Example:

**CRUD**

*Create*
[https://us-central1-go-inventory.cloudfunctions.net/app/create-item](https://us-central1-go-inventory.cloudfunctions.net/app/create-item)
body = JSON
 {
	"cod" : 5,
	"nome" : "Solus",
	"contato" : "Rafael",
	"telefone" : "(43) 9999-9999"
}

*Read*
[https://us-central1-go-inventory.cloudfunctions.net/app/read-item/9](https://us-central1-go-inventory.cloudfunctions.net/app/read-item/5)

*Update*
[https://us-central1-go-inventory.cloudfunctions.net/app/update-item/5](https://us-central1-go-inventory.cloudfunctions.net/app/update-item/5)
body=JSON
 {
	"nome" : "Updated Name",
	"contato" : "Updated Contact",
	"telefone" : "(43) 9999-9999"
}

*Delete*
[https://us-central1-go-inventory.cloudfunctions.net/app/delete-item/5](https://us-central1-go-inventory.cloudfunctions.net/app/delete-item/5)

---
*Application based on Andrew Evan's [Article](https://indepth.dev/building-an-api-with-firebase/)*