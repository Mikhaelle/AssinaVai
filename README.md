# AssinaVai
O teste consiste em:
- Deve conter um campo de upload para que recebe arquivos PDF;
- O PDF deve ser apresentado na tela do usuário;
- Deve conter um botão em algum lugar da tela escrito "Criar Assinatura";
- Quando o botão Criar Assinatura for clicado, deve abrir uma modal solicitando a assinatura do nome do usuário. Essa assinatura será feita pelo arraste do mouse, como o Paint;
- A modal deve ter um botão "Assinar". Assim que este for clicado, a assinatura capturada deve ser plotada no rodapé de todas as páginas do arquivo PDF;
- O PDF assinado pode ser visualizado pelo usuário;
- Deve existir alguma forma do usuário fazer download do documento.

Foram utilizadas as seguintes bibliotecas externas:

Para exibição do pdf é utilizado [React-pdf](https://www.npmjs.com/package/react-pdf)

Para fazer a assinatura é utilizado  [react-signature-canvas](https://www.npmjs.com/package/react-signature-canvas)

      
# Rodando a aplicação
      
- Abra paralelamente a pasta client e utilize

      npm install

- Volte para a pasta Assinavai e utilize

      npm install
      sudo npm run dev

# Passo a passo da aplicação

- Faça o upload do documento
- O pdf aparecerá abaixo do upload
- O campo de assinatura aparecerá abaixo do pdf
- Faça a assinatura e clique em upload Assignature
- Uma imagem da assinatura aparecerá logo abaixo
- Clique novamente em upload assignature e um dowload será feito
- Nesse download aparecerá somente a assinatura

# Melhoramentos futuros
Por razões de tempo não foi possível adicionar a feature de colocar a assinatura nos documentos pdfs, pelo o que foi pesquisado seria possível utilizando a biblioteca do (jspdf)[https://medium.com/@shivekkhurana/how-to-create-pdfs-from-react-components-client-side-solution-7f506d9dfa6d]
