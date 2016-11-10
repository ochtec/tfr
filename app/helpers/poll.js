import soap from 'easysoap'

// const url = '../config/weather.wsdl'

const url = 'https://webservice.s7.exacttarget.com/etframework.wsdl'
const requestArgs = {
  ZIP: '20176'
}

// export function loadSoap() {
//   return new Promise ((resolve, reject) => {
//     console.log('1212')
//       soap.createClient(url, (err, client) => {
//         let description = client.describe()
//         console.log(JSON.stringify(description))
//       })
//       console.log('done')
//   })
// }

export function loadSoap() {
  soap.createClient(url, (err, client) => {
    client.describe()
  })
}

export function getSoapResponse() {
  return loadSoap()
}

// export async function getSoapResponse() {
//   try {
//     console.log('test2')
//     return await loadSoap()
//   } catch (error) {
//       console.log(error)
//   }
// }
