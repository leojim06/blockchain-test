import Block from "./block"

class BlockChain {
    blockchain: Block[]
    constructor() {
        this.blockchain = [this.startGenesisBlock()]
    }

    startGenesisBlock(): Block {
        return new Block({})
    }

    obtainLastesBlock(): Block {
        return this.blockchain[this.blockchain.length - 1]
    }

    addNewBlock(newBlock: Block): void {
        newBlock.prevHash = this.obtainLastesBlock().hash
        newBlock.hash = newBlock.computeHash()
        this.blockchain.push(newBlock)
    }

    checkChainValidity(): boolean {
        for (let i = 1; i < this.blockchain.length; i++) {
            const currBlock = this.blockchain[i]
            const prevBlock = this.blockchain[i - 1]

            if (currBlock.hash !== currBlock.computeHash())
                return false

            if (currBlock.prevHash !== prevBlock.hash)
                return false
        }
        return true
    }
}

export default BlockChain