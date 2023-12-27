// millieseconds to date 

function milliesecondsToDate(millieseconds){
    const date = new Date(millieseconds)
    return date.toISOString().slice(0,19).replace('T','')
}

console.log(milliesecondsToDate(193000099999))