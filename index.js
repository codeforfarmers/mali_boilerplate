import Mali from 'mali'
import path from 'path'
import { sayHello, sayHi } from './handlers/hello'

const PROTO_PATH = path.resolve(__dirname, './protos/hello.proto')

function main () {
  const app = new Mali(PROTO_PATH, 'Greeter')
  app.use({ sayHello, sayHi })
  app.start('127.0.0.1:50051')
}

main();