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
![create](https://user-images.githubusercontent.com/57791712/79853497-85bc4100-839e-11ea-85cb-1003496f3ea6.png)


*Read*

[https://us-central1-go-inventory.cloudfunctions.net/app/read-item/9](https://us-central1-go-inventory.cloudfunctions.net/app/read-item/5)

![read](https://user-images.githubusercontent.com/57791712/79853606-a5ec0000-839e-11ea-8c45-c8f1a60d8d34.png)

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
![delete](https://user-images.githubusercontent.com/57791712/79853577-9ec4f200-839e-11ea-9db6-93c714aae7c2.png)

List All Data*

[https://us-central1-go-inventory.cloudfunctions.net/app/read-itens](https://us-central1-go-inventory.cloudfunctions.net/app/read-itens)
![read-all](https://user-images.githubusercontent.com/57791712/79853623-ab494a80-839e-11ea-9d97-cac26efc70cf.png)

---
*Application based on Andrew Evan's [Article](https://indepth.dev/building-an-api-with-firebase/)*
