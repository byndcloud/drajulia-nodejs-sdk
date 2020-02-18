# Dra Julia SDK tool to use with Node.js

## Install
```
npm i drajulia-nodejs-sdk
```

## Usage
```
const drajulia = require('drajulia-nodejs-sdk')

// get all document models
drajulia.documentModels.list().then(models => {
    console.log(models)
})

// generate pdf/docx files for an existing document
drajulia.document.generateFiles(
    "GnZ6RpdjSRx9aIVybD8x",
    {
		"responsavel": "Almir",
		"Aluno": "José",
		"cpf": "1029380912830",
		"matricula": "10100192",
		"quitacoes": [
			{
				"col0": "123123123123",
				"col1": "123123123123",
				"col2": "123123123123",
				"col3": "123123123123"
			},
			{
				"col0": "123123123123",
				"col1": "123123123123",
				"col2": "123123123123",
				"col3": "123123123123"
			}
		]
    },
    {}
).then(result => {
    console.log(result)
})
```

## Supported classes and methods

### 1. documentModels
    list
### 2. document
    generateFiles(docId, itemsForReplace, othersOptionContent)
    
    create(
        creationToken,
        newDocName,
        parentModelId,
        onFilesGeneratedCallbackUrl
    )