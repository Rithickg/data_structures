// replace instances of char in string 

function useRegexReplace(str){
    return str.replace(/a/g, "A")
}

console.log(useRegexReplace("Learning Javascript"))

function useSplit(str){
   const strSplit = str.split("n");
   console.log(strSplit)
   const result = strSplit.join("M")
   return result
}

console.log(useSplit("Learning Javascript"))


  