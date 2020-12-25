//apollo-serverモジュールを読み込む
const { ApolloServer } = require(`apollo-server`);

//スキーマの定義
const typeDefs = `
type Query{
  totalPhotos:Int!
}
type Mutation {
  postPhoto(name:String! description:String):Boolean!
}
`
//写真を格納するための配列を定義する。
const photos =[];

//リゾルバの定義
const resolvers = {
  Query: {
    //写真を格納した配列の長さを返す
    totalPhotos: () => photos.length
  },
  Mutation:{
    //第一引数はmutationと決まっているので
    //mutationの引数は第二引数に入れる必要がある。
    postPhoto(parent,args){
      photos.push(args)
      return true
    }
  }
}

//サーバーのインスタンスを作成
//その際、typeDefs(スキーマ)とリゾルバを引数にとる
const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => console.log(`Graphql Service runnning on ${url}`))