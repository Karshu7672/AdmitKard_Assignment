const file_operations=({fileText})=>{
    const arr=fileText.split(" ")
    let freq_of_seq=new Array(arr.length).fill([]);
    let freq_of_consi=new Array(arr.length).fill([]);
    let freq_consiqutive={};
    let freq_bigram={};
    let  n= arr.length;
    for(let i=0 ;i<n;i++){
        if(arr[i]==""|| arr[i]==" "){
            continue;
        }
        if(freq_consiqutive[arr[i]]){
            freq_consiqutive[arr[i]]+=1;
        }
        else{
            freq_consiqutive[arr[i]]=1;
        }
        if(i<n-1){
            if( freq_bigram[arr[i]+" "+arr[i+1]]){
                freq_bigram[arr[i]+" "+arr[i+1]]+=1;
            }
            else{
                freq_bigram[arr[i]+" "+arr[i+1]]=1;
            }
        }
    }


    const top5_consiqutive = Object.entries(freq_consiqutive).sort((a, b) => b[1] - a[1]).slice(0,5);
    const top5_seq = Object.entries(freq_bigram).sort((a, b) => b[1] - a[1]).slice(0,5);
    freq_of_seq.filter(e=>e.length>0);
    freq_of_consi.filter(e=>e.length>0);
    // const top5_consiqutive=freq_of_seq.slice(-5)
    // const top5_seq=freq_of_consi.slice(-5)

    return {freq_bigram,freq_consiqutive,top5_consiqutive,top5_seq};

}

module.exports={file_operations}