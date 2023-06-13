
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import File from './Components/File'

import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"/>
    
    
     <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <Image src="/images/br1.png" width={2400} height={615} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    
                </div>
            </div>
            <div className="carousel-item">
                <Image src="/images/br2.png" width={2400} height={615} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">

                </div>
            </div>
            <div className="carousel-item">
                <Image src="/images/br3.png" width={2400} height={550} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">

                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

    <div className="d-flex justify-content-center align-items-center mt-5 p-5">
      <Link className='btn btn-outline-primary fs-4 mx-5' href="/broadcaster">Brodacaster</Link>
      <Link className='btn btn-outline-success fs-4 me-5' href="/receiver">Receiver</Link>
    </div> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous"></script>
    </>
  )
}
