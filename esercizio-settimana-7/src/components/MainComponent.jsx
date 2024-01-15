import React from 'react'
import CarouselComponent from './CarouselComponent'

export default function MainComponent() {
  return (
    <main>
        <div class="row mt-5 mx-3">
            <div class="col">
                <p class="text-light fw-bold fs-4 ">Trending Now</p>
            </div>
        </div>
        <CarouselComponent />        
    </main>
  )
}
