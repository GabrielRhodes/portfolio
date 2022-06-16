import image from '../images/covidcalculus.png'
import Nav from './Nav'

function Math() {
  return (
    <>
      <Nav />
      <div className='page subject-page'>
        <h1>Calculus</h1>
        <h2>Grade: A</h2>
        <div>
          <h3>Topics</h3>
          <ul>
            <li>Trigonometry</li>
            <li>Limits</li>
            <li>Logorithms</li>
            <li>Derivative</li>
            <li>Integration</li>
            <li>Inflection</li>
          </ul>
        </div>
        <div>
          <h3>Resources Used</h3>
          <ul>
            <li>
              Saxon Calculus 2nd Edition by John H. Saxon Jr. and Frank Y.H.
              Wang
            </li>
          </ul>
        </div>
        <div>
          <h3>Application</h3>
          <p>
            &emsp;&emsp;I decided to try using integral calculus to predict the
            total number of COVID-19 cases from December 16th 2021, to January
            30th 2022. Using the dates December 16th, January 12th, and January
            30th, I managed to derive a quadratic equation which I then took the
            integral of to determine the area under the curve, which would give
            the predicted cases total. While the results were fairly off (30%),
            it did show how you can use one aspect of calculus to get answers to
            real world questions quickly.
          </p>
          <img src={image} alt='application-img' />
          <p>
            &emsp;&emsp;I also built a{' '}
            <a
              href='https://gabrielrhodes.github.io/data-grapher/'
              target='_blank'
              rel='noreferrer'
            >
              graphing software
            </a>{' '}
            that builds graphs from data. Here, I used trigonometry...a lot.
            When creating pie charts with svgs (scaleable vector graphics), you
            must calculate the angle of each individual sector, and also keep
            track of how much you need to rotate them. This ended up involving
            calculating the fraction of each datum compared to the total,
            converting it to radians (for keeping the rotations for each slice),
            and then converting the radians to actual points on the vector
            canvas. While not reaching into the more complex parts of
            trigonometry, it does give an example of real application in a very
            real problem of graphing differing data sets.
          </p>
        </div>
        <div>
          <h3>Reflection</h3>
          <p>
            &emsp;&emsp;Working through calculus allowed me to gain a better
            sense of what I know. I had knowledge of most topics discussed in
            the 53 chapters I went through, however in the beginning I lacked
            the awareness of several pitfalls. After a few careless mistakes, I
            was able to gain a better grasp for some of the common pitfalls to
            be aware of and made fewer simple errors. I gained more caution from
            these lessons, and have become better at math for it. The repetition
            in this book helped me to fill the gaps in what I knew or didn't
            know, giving me a better understanding of where exactly I place in
            math.
          </p>
        </div>
      </div>
    </>
  )
}

export default Math
