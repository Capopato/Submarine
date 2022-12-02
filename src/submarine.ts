class Submarine{
    private str?: string
    private forward: number = 0
    private depth: number = 0
    private answer?: number

    fetchData = async () => {
        const result = await fetch('https://dev.api.mintycloud.nl/api/v1/challenges/input', {
            method: 'GET',
            headers: {Authorization:
                'Basic '}
        })
        const text = await result.text()
        this.str = text.toString()
    }

    workData = async () => {
        const res = await this.fetchData()
        const strSpl: string[] | undefined = this.str?.split('\n')

        const movArr: string[] | void = strSpl?.forEach(x => {
            const split: string[] = x.split(' ')
            if (split[0] == 'forward'){
                this.forward += Number(split[1])
            }
            else if (split[0] == 'up'){
                this.depth -= Number(split[1])
            }
            else if (split[0] == 'down'){
                this.depth += Number(split[1])
            }
            // What is the cleaner way to write these 'if' statements? 
            // With a .map or .filter function for example? 
        })
        this.answer = this.forward * this.depth
        console.log(this.forward)
        console.log(this.depth)
        console.log(this.answer)
        return this.answer
    }

    // answerr = () =>{ // Why does this method says undefined? And if I make it an async method it return double the values.
    //     console.log(this.answer)
    // }
}

let sub = new Submarine()
sub.fetchData()
sub.workData()
// sub.answerr()