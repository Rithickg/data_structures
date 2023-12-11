// Hash Table 

class HashTable{
    constructor(size = 10){
        this.size = size;
        this.table = new Array(size);
    }

    hash(key){
        let hashValue = 0;
        for(let i = 0; i < key.length; i++){
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    insert(key,value){
        const index = this.hash(key);
        if(!this.table[index]){
            this.table[index] = [];
        }
        this.table[index].push({key,value});
    }

    get(key){
        const index = this.hash(key);
        if(this.table[index]){
            for(const entry of this.table[index]){
                if(entry.key === key){
                    return entry.value
                }
            }
        }
        return undefined;
    }

    remove(key){
        const index = this.hash(key);
        if(this.table[index]){
            this.table[index] = this.table[index].filter((entry)=>entry.key !== key);
        }
    }
}


const hashTable = new HashTable();
console.log("hashTable",hashTable)

hashTable.insert("name","Ram");
hashTable.insert("age",20)
hashTable.insert('phone',9876478768)
console.log(hashTable.get('name'))

hashTable.remove('age');
console.log(hashTable.get('age'))

console.log(hashTable)