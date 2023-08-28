import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <section class="flex items-center justify-center bg-pink-200 h-screen dark:bg-gray-900">
   
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <div class="blob"></div>
       <img src="./landing2.png" alt="pregnant girl"/>
        </div>   
        
        <div class="place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">em<span class= "text-pink-900">POWER</span><span class="font-light">her</span></h1>
            <p class="max-w-2xl mb-6 font-light text-pink-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Our mission is to provide a safe and empowering space where young mothers can access vital resources, gain knowledge, and connect with a community of like-minded individuals who understand the challenges they face. We do this through curated content, expert guidance, and peer support,</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <Link to="resources" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-pink-900 border border-pink-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Go to site
            </Link> 
        </div>


    </div>
</section>






  )
}

export default LandingPage