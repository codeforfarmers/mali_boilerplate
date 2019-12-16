export const sayHello = (ctx) => {
  ctx.res = { message: 'Hello ' + ctx.req.name }
}
  
export const sayHi  = (ctx) => {
  ctx.res = { message: 'Hi ' + ctx.req.name }
}