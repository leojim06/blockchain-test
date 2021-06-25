import crypto from 'crypto';

class Block {
    private timestamp: number;
    private data: any;
    public prevHash: string;
    public hash: string;

    constructor(data: any, prevHash = "") {
        this.timestamp = Date.now()
        this.data = data
        this.prevHash = prevHash
        this.hash = this.computeHash()
    }

    computeHash() {
        let strBlock = this.prevHash + this.timestamp + JSON.stringify(this.data)
        return crypto.createHash("sha256").update(strBlock).digest("hex")
    }
}

export default Block