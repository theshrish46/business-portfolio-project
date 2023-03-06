import React from 'react';
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import vg from './../assets/2.webp';

const Home = () => {
  return (
    <>

      <div className='home'>
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className='home2'>
        <img src={vg} alt="Graphics" />

        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus commodi accusamus eum voluptate aut laborum ex culpa, doloribus, tempore corrupti, eveniet inventore magnam sit consequatur neque excepturi. Harum, autem doloremque.</p>
        </div>
      </div>

      <div className='home3' id='about'>
        <div>
          <h1>Who We Are</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nesciunt rem debitis eius. Ullam voluptatibus sit nostrum cum illo aspernatur incidunt, blanditiis aliquid itaque. Libero nobis suscipit quaerat repudiandae modi illo, veniam voluptate optio aut ratione inventore? Eveniet consequatur a voluptatibus laboriosam explicabo natus excepturi, maiores soluta, rem molestias aspernatur nam! Perspiciatis saepe voluptatem quidem omnis sint! Cumque, eum! Voluptate at neque omnis incidunt ipsa velit distinctio ipsam recusandae maiores. Autem eius inventore quam voluptas molestiae fuga labore! Sunt, fugit. Numquam, dolorum saepe minus, reprehenderit et laborum culpa molestiae amet necessitatibus possimus corporis similique fugiat tempora mollitia. Cumque, voluptatibus alias.</p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <h1>Brands</h1>

        <div>

          <article>

            <div style={{
              animationDelay: "0.3s",
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{
              animationDelay: "0.5s",
            }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{
              animationDelay: "0.7s",
            }}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div style={{
              animationDelay: "1s",
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home
