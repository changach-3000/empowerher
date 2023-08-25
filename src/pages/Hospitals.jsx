import React from 'react'

function Hospitals() {
  return (
 <section class="bg-pink-200 dark:bg-gray-900 h-screen">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 h-screen">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Hospitals</h2>
            <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">These are some of the hospitals that are close to you and within access that are assured to provide great care for you and for your child.</p>
        </div> 
        <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="data:image/jpeg;base64,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" alt="Bonnie Avatar"/>
                </a>
                <div class="p-5">
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Mercy General Hospital</a>
                    </h3>
                    <span class="text-gray-500 dark:text-gray-400">Nairobi</span>
                    <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">This hospital has a specialized care unit to fit your needs, especially as a teen mother.</p>
                    <ul class="flex space-x-4 sm:mt-0">
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div> 
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBiBX39Hz8Pvk8rXXXXRmT_GeEktqds4RqQ&usqp=CAU" alt="Jese Avatar"/>
                </a>
                <div class="p-5">
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Kiambu Level 5</a>
                    </h3>
                    <span class="text-gray-500 dark:text-gray-400">Kiambu</span>
                    <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">This hospital has a specialized care unit to fit your needs, especially as a teen mother.</p>
                    <ul class="flex space-x-4 sm:mt-0">
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div> 
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUKxtbDqKcGQ2LCqza27uqQCyhzdkmbYxsA&usqp=CAU" alt="Michael Avatar"/>
                </a>
                <div class="p-5">
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Nairobi Women's Hospital</a>
                    </h3>
                    <span class="text-gray-500 dark:text-gray-400">Nairobi</span>
                    <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">This hospital has a specialized care unit to fit your needs, especially as a teen mother.</p>
                    <ul class="flex space-x-4 sm:mt-0">
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div> 
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6Xz5KhecdxJCJYRn1k8L4pL1x9-L4eh_aw&usqp=CAU" alt="Sofia Avatar"/>
                </a>
                <div class="p-5">
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Kirinyaga Hospital</a>
                    </h3>
                    <span class="text-gray-500 dark:text-gray-400">Kirinyaga</span>
                    <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">This hospital has a specialized care unit to fit your needs, especially as a teen mother.</p>
                    <ul class="flex space-x-4 sm:mt-0">
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>  
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0FiSgDyvpLbmDa8kdBipq1w4BfasGBwzSDQ&usqp=CAU" alt="Sofia Avatar"/>
                </a>
                <div class="p-5">
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Kirinyaga Hospital</a>
                    </h3>
                    <span class="text-gray-500 dark:text-gray-400">Kirinyaga</span>
                    <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">This hospital has a specialized care unit to fit your needs, especially as a teen mother.</p>
                    <ul class="flex space-x-4 sm:mt-0">
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>  
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1FqUUid1g1oXLyb2sIyjCxKoIiazLWWRNA&usqp=CAU" alt="Sofia Avatar"/>
                </a>
                <div class="p-5">
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Kirinyaga Hospital</a>
                    </h3>
                    <span class="text-gray-500 dark:text-gray-400">Kirinyaga</span>
                    <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">This hospital has a specialized care unit to fit your needs, especially as a teen mother.</p>
                    <ul class="flex space-x-4 sm:mt-0">
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>  
           
           
        </div>  
    </div>
  </section>
  )
}

export default Hospitals