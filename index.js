

// =================================== COMPONENTES =============================================== //

import * as componenteHeader from './components/header.js'
import * as componenteHero from './components/hero.js'
import * as componenteSwiper from './components/swiper.js'


// =================================== FUNCOES =============================================== //

function controlarDarkMode(){

  const vdarkmode = JSON.parse(localStorage.getItem('darkmode').toLowerCase()) 
  const svgDarkMode = document.getElementById('svgDarkMode')
  const svgLightMode = document.getElementById('svgLightMode')

  //-----------------------------------------------------


  if(vdarkmode){
    document.querySelector('html').classList.add('dark')
    svgDarkMode.style.display='none'
    svgLightMode.style.display='flex'
  }
  else{
    document.querySelector('html').classList.remove('dark')
    svgDarkMode.style.display='flex'
    svgLightMode.style.display='none'
  }

  svgDarkMode.addEventListener('click',()=>{
    localStorage.setItem('darkmode',true)
    document.querySelector('html').classList.add('dark')
    svgDarkMode.style.display='none'
    svgLightMode.style.display='flex'
  })

  svgLightMode.addEventListener('click',()=>{
    localStorage.setItem('darkmode',false)
    document.querySelector('html').classList.remove('dark')
    svgLightMode.style.display='none'
    svgDarkMode.style.display='flex'
  })

  //-----------------------------------------------------
  
  //console.log('vdarkmode: '+vdarkmode)

}


// =================================== EXECUTAR =============================================== //


controlarDarkMode()
