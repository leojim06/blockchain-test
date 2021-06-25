import util from 'util';
import Block from "./blockchange/block";
import BlockChain from "./blockchange/blockchain";

let block1 = new Block({ from: "Joe", to: "Jane" })
let block2 = new Block({ from: "Jane", to: "Carl" })

let chain = new BlockChain()
chain.addNewBlock(block1)
chain.addNewBlock(block2)

console.log(util.inspect(chain, true, null, true))
console.log(`Validity: ${chain.checkChainValidity()}`)
console.log(`Last block: ${util.inspect(chain.obtainLastesBlock(), true, null, true)}`)