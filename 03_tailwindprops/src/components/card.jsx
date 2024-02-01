import React from 'react'

function Card ({username, btnText="Visit Me"}) {
    return (
        <figure class="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/20080174/pexels-photo-20080174/free-photo-of-a-hedgehog-is-held-in-a-person-s-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
        <div class="pt-6 text-center space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              {username}
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              {btnText}
            </div>
          </figcaption>
        </div>
      </figure>
    )
}

export default Card