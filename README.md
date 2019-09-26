# AssinaVai
O teste consiste em:
- Deve conter um campo de upload para que recebe arquivos PDF;
- O PDF deve ser apresentado na tela do usuário;
- Deve conter um botão em algum lugar da tela escrito "Criar Assinatura";
- Quando o botão Criar Assinatura for clicado, deve abrir uma modal solicitando a assinatura do nome do usuário. Essa assinatura será feita pelo arraste do mouse, como o Paint;
- A modal deve ter um botão "Assinar". Assim que este for clicado, a assinatura capturada deve ser plotada no rodapé de todas as páginas do arquivo PDF;
- O PDF assinado pode ser visualizado pelo usuário;
- Deve existir alguma forma do usuário fazer download do documento.

Para o upload de arquivos foi utilizado como base esse (tutorial)[https://malcoded.com/posts/react-file-upload/]
Para exibição do pdf é utilizado [React-pdf](https://www.npmjs.com/package/react-pdf)
Para adição de assinatura é utilizado  [react-signature-canvas](https://www.npmjs.com/package/react-signature-canvas)


# Instalão de componentes dentro da pasta server
      
 [Express.js](https://expressjs.com)
 
      npm install express
      
 [CORS](https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/)
 
      npm install cors

[Formidable](https://www.npmjs.com/package/formidable)

      npm install formidable
      
# Rodando a aplicação

- Vá para a pasta server e utilize

      node server.js
      
- Abra paralelamente a pasta app e utilize

      npm start
