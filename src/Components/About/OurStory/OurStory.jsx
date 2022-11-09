import React, { useState, useEffect } from 'react';

const OurStory = () => {

    const [content, setContent] = useState(false);

    const activeClassContent = window.addEventListener('scroll', () => {
        if (window.scrollY > 220) {
            setContent(true)
        }
    })

    useEffect(() => {
        window.addEventListener('scroll', activeClassContent)
        return () => {
            window.removeEventListener('scroll', activeClassContent)
        }
    }, [])

    return (
        <>
            <div className={content ? 'transition-all duration-700 opacity-100 pt-16' : 'opacity-0' }>
                <div className="container">
                    <div className='flex flex-col text-center md:flex-row md:justify-between md:text-left items-center'>
                        <div className='mb-8 md:mb-0'>
                            <h1 className='text-5xl sm:text-6xl'>Our Story</h1>
                            <h5 className='text-second-color text-xl'>Why We Started It</h5>
                        </div>
                        <div className='md:w-[70%]'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, exercitationem esse expedita aspernatur incidunt ratione voluptatum sunt. Veniam nostrum minus, odio molestiae sunt temporibus repudiandae ducimus praesentium mollitia tempora, magnam necessitatibus itaque quo deserunt doloribus placeat enim fugiat quam at perspiciatis unde corporis veritatis voluptate. Placeat enim, vitae dolore dolores atque libero odio? Possimus mollitia quibusdam totam, expedita nulla minus numquam hic quidem, dolor, facere dolores harum dicta atque eaque distinctio aspernatur <br /> <br /> Officia, a eius porro suscipit non corrupti ipsam odio, cupiditate laudantium sapiente asperiores voluptates nihil? Tempora quae temporibus voluptates sapiente voluptatum, tenetur tempore porro ab est at quos. Quam voluptatem minus excepturi? Nulla recusandae facere laudantium eius quibusdam vero obcaecati ipsa, asperiores error reprehenderit dolor alias, molestiae repellendus ut tempora maiores temporibus? Esse, tenetur maiores nam eum maxime aut laboriosam exercitationem inventore, ipsa perspiciatis sint pariatur harum veritatis a ipsam quo cum nulla veniam aliquam repudiandae molestiae dignissimos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStory;