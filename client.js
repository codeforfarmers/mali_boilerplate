const grpc = require('grpc')
const path = require('path')
const protoLoader = require('@grpc/proto-loader')

const PROTO_PATH = path.resolve(__dirname, './protos/hello.proto')
const pd = protoLoader.loadSync(PROTO_PATH)
const loaded = grpc.loadPackageDefinition(pd)
const hello_proto = loaded.helloworld;


const main = async () => {
    const client = new hello_proto.Greeter('localhost:50051', grpc.credentials.createInsecure());

    client.sayHello({ name: 'user' }, async (err, response) => {
        const res = await response;
        console.log('response', res);
        console.log('response error', err);
    });
};

main();

