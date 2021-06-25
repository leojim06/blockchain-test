import Block from "./block"

class BlockChain {
    private blockchain: Block[]
    constructor() {
        this.blockchain = [this.startGenesisBlock()]
    }

    startGenesisBlock = (): Block => new Block({})

    obtainLastesBlock = (): Block => this.blockchain[this.blockchain.length - 1]

    obtainBlockChain = (): Block[] => this.blockchain

    addNewBlock(newBlock: Block): void {
        newBlock.prevHash = this.obtainLastesBlock().hash
        newBlock.hash = newBlock.computeHash()
        this.blockchain.push(newBlock)
    }

    checkChainValidity(): boolean {
        this.blockchain.forEach((block, index) => {
            if (index > 0) {
                if (block.hash !== block.computeHash()) return false
                if (block.prevHash !== this.blockchain[index - 1].hash) return false
            }
        })
        return true
    }
}

export default BlockChain