import process from 'process';
import { writeFileSync } from 'fs'
const path = 'erros.json';

// Monitorar todos os errors ocorridos neste processo
process.on('uncaughtExceptionMonitor', (err,origin) => {
    let errorjson = JSON.stringify({
        stackTrace:  err.stack.toString(),
        origin: origin.toString()
    })
    // vai escrever na desgraça do arquivo erros.json
    // se for adicionar mais, coloca no nodemon pra ignorar no nodemon.json
    writeFileSync(path, errorjson)
})
// Tratamento do erro de rejeição
process.on('unhandledRejection', (reason, promise) => {
    console.log(reason)
})

const submit = () => new Promise( (resolve, reject) => {
    setTimeout( () => reject('Error de Rejeição de Promises não tratadas, não vamos usar, mas provavelmente vamos usar.'),1000 );
   //throw new Error('Error de teste')
});

//submit()

// vai lançar um error, e como ele não foi tratado com try catch, o stacktrace do erro vai ser escrito no arquivo
nonExistFunctiuon()

