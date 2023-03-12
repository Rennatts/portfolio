import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax';
import { useEffect, useRef, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <p>LOGO</p>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <Link href="#about">About</Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="#experience">Experience</Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="#work">Work</Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}



export default function Home() {
  const imageRef = useRef<HTMLImageElement>(null);
  const [yPosition, setYPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollPosition = window.pageYOffset;
        setYPosition(scrollPosition);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className={styles.background_image_container}>
      <Header/>
      <div className={styles.topics_container}>
        <section id="home" className={styles.home}>
          <div className={styles.intro}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ 
                  display: "flex", 
                  justifyContent: "center", 
                  flexDirection: "row",
                  alignItems: "center", 
                  width: "200%", 
                  height: "100%", 
                }}
              >
                <motion.p
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.2 }}
                style={{ width: "75%", fontSize: "30px"}}
                animate={{
                  x: ["0%", "40%"],
                }}
                transition={{
                  duration: 2,
                  ease: "linear",
                  loop: Infinity,
                }}
                >
                  I'm RENATA MACHADO
                </motion.p>
                <motion.img
                  ref={imageRef}
                  src="/astronaut.png"
                  alt="My Image"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.2 }}
                  style={{
                    width: "35%",
                    position: "relative",
                    top: `${yPosition * 1.5}px`,
                  }}
                  animate={{
                    x: ["0%", "85%"],
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                    loop: Infinity,
                  }}
                  height={250}
                />
            </motion.div>
          </div>
          <div className={styles.description}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                width: "200%", 
                height: "100%", 
                fontSize: "25px",
              }}
            >
              <motion.p
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.2 }}
              style={{marginRight: "10px"}}
              >
                Full
              </motion.p>
              <motion.p
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.4 }}
              style={{marginRight: "10px"}}
              >
                Stack 
              </motion.p>
              <motion.p
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.6 }}
              >
                Developer
              </motion.p>
            </motion.div>
          </div>

        </section>
        {/* <section id="about" className={styles.about}>
          <h2>About</h2>
          <p>Some text about yourself.</p>
          <p>Some text about yourself.</p>
        </section> */}
        {/* <section id="experience">
          <h2>Experience</h2>
          <p>Some text about your experience.</p>
        </section>
        <section id="work">
          <h2>Work</h2>
          <p>Some text about your work.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Some text about how to contact you.</p>
        </section> */}
      </div>
    </div>
  )
}
