import { Link } from 'react-router-dom'
import Nav from './Nav'

function Home() {
  return (
    <>
      <Nav />
      <div className='page' id='home-page'>
        <h1>Gabriel Rhodes 2021-2022 Portfolio</h1>
        <p>
          &emsp;&emsp;This site contains the work that I've completed this year.
          The Summary Of The Year sections will guide you through what I did
          over the year, while the Google Drive Folder contains digital scans of
          physical work respective to the subject, as well as any writings that
          I've typed out. You can access the Google Drive Folder containing all
          subjects up in the navigaton bar above.
        </p>
        <ul>
          <li>
            <h2>Calculus</h2>
            <Link to='/math'>Summary Of The Year</Link>
            <br />
            <a
              target='_blank'
              rel='noreferrer'
              href='https://drive.google.com/drive/folders/1vDGB2CPL2n-bp9LzLop6WoK1au2LplmF?usp=sharing'
            >
              Google Drive Folder
            </a>
          </li>
          <li>
            <h2>Physics</h2>
            <Link to='/physics'>Summary Of The Year</Link>
            <br />
            <a
              target='_blank'
              rel='noreferrer'
              href='https://drive.google.com/drive/folders/1wnGBmKdZ2VqFGXRPWJxWfZ1i2-x9Zlr8?usp=sharing'
            >
              Google Drive Folder
            </a>
          </li>
          <li>
            <h2>English</h2>
            <Link to='/english'>Summary Of The Year</Link>
            <br />
            <a
              target='_blank'
              rel='noreferrer'
              href='https://drive.google.com/drive/folders/1yO1zxmhuLBMAnk0V58lnRRXf6M7jjrVq?usp=sharing'
            >
              Google Drive Folder
            </a>
          </li>
          <li>
            <h2>American History</h2>
            <Link to='/history'>Summary Of The Year</Link>
            <br />
            <a
              target='_blank'
              rel='noreferrer'
              href='https://drive.google.com/drive/folders/1Gg5-SAcbcCOyyNnAUKSH_xHJWJjGLeKV?usp=sharing'
            >
              Google Drive Folder
            </a>
          </li>
          <li>
            <h2>Other Important Information</h2>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://drive.google.com/drive/folders/1f6vy4vq-nyI5SMqZNzgq80HWNqY4P98y?usp=sharing'
            >
              Google Drive Folder
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home
