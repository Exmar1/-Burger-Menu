'use strict'

const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const close = document.querySelector('.close')
const overlay = document.querySelector('.overlay')

burger.addEventListener('click', function () {
	nav.classList.add('add')
	overlay.classList.remove('hidden')
})

close.addEventListener('click', function () {
	nav.classList.remove('add')
	overlay.classList.add('hidden')
})

overlay.addEventListener('click', function () {
	nav.classList.remove('add')
	overlay.classList.add('hidden')
})
