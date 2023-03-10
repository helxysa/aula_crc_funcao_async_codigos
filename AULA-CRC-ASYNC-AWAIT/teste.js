
//
async function getUser(userId) {
  let response = await fetch(`https://api.com/api/user/${userId}`);
  let userData = await response.json();
  return userData.name; //vai estar retornando o nome
 }
 getUser(1);

 // assíncronas são aquelas que acessam ou buscam algum tipo de recurso em um dispositivo externo, como por exemplo um banco de dados, nesse tipo de função precisamos que nosso código espere que a resposta esteja disponível antes de executar a ação seguinte. Uma função assíncrona no Javascript é uma função que permite que outras partes do código sejam executadas, enquanto espera que outra operação seja exe