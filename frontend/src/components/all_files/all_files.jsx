import React from 'react';
import { useEffect } from 'react';
import server from '../../../server';
import CardTop from './cardTop_5';
import './all_files.css'


export default function All_Files({info}){
    console.log("info",info)
    
    return(
        <div className='alnaysis'>
        <div className='file_name'>
        <h1>
         {info.file_name}
        </h1>
        </div>
        <div className='file_text'>
        <h3>
        {info.file_text}
        </h3>
        </div>
        <div>
        <div className='top_values'>Top five Consiqutive :
        {
            info? info.file_meta_data.top5_consiqutive.map((i)=>{
                return (<span className='one_pair'>
                    <span className='inner_singel'>({i[0]} :</span><span className='inner_singel'>{i[1]}</span>
                    )</span>
                    )
            }):""
        }
        </div>
        <div className='top_values'>Top Five Bigram :
        {
            info? info.file_meta_data.top5_seq.map((i)=>{
                return (<span className='one_pair'>
                <span className='inner_singel'>({i[0]} :</span><span className='inner_singel'>{i[1]}</span>
                )</span>)
            }):""
        }
        <div className='freq_bigram'>
        <div>
        Freq Bigram (Json Format):
        </div>
        {
            JSON.stringify(info.file_meta_data.freq_bigram)
        }
        </div>
        <div className='freq_bigram'>
        <div>
        Freq Consiqutive (Json Format):
        </div>
        {
            JSON.stringify(info.file_meta_data.freq_consiqutive)
        }
        </div>
        </div>
        </div>
        </div>
        )
    }