function PrimeiraFuncao(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log('Espera');
      resolve();
    }, 2000)
  })

}

async function SegundaFuncao(){
  console.log('Inicio');
  await PrimeiraFuncao();
  console.log('FIM')
}

SegundaFuncao();