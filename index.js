//apollo-serverモジュールを読み込む
const { ApolloServer } = require(`apollo-server`);

const typeDefs = `
type Query{
  totalPhotos:Int!
}
`
const resolvers = {
  Query: {
    totalPhotos: () => 42
  }
}

//サーバーのインスタンスを作成
//その際、typeDefs(スキーマ)とリゾルバを引数にとる
const server =new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then (({url})=>console.log(`Graphql Service runnning on ${url}`))