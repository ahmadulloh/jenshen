import React, { useContext } from 'react'
import Container from '../Container/Container'
import './HeadBottom.scss'
import Button from '@mui/material/Button';

import headBottom from '../../Assets/Images/headerBottom.png'
import { Context } from '../../Context/Context';
import { Btn, Slider  } from '../../Data/data';

function HeadBottom() {
    const {lan} = useContext(Context)
  return (
    <div>
        <Container>
            <div className="head">
                <div className="head-left" >
                    {
                        Slider?.map((e)=> (
                            <div key={e.id}>
                                <p>{e[`natural`]}</p>
                                <b>{e[`title_${lan}`]}</b>
                            </div>
                        ))
                    }
                    <Button variant="contained" color="success">
                        {
                            Btn?.map((e)=>(
                                <a key={e.id} href={e.href}>
                                    {e[`title_${lan}`]}
                                </a>
                            ))
                        }
                    </Button>
                </div>
                <div className="head-right">
                    <img src={headBottom} alt="headBottom" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default HeadBottom