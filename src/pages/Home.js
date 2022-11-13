import React from 'react'
import './Home.css'

function Home() {
    return (
        <>
            <div className='home-container'>
               
                <div className='padding-top-120 flex justify-spacebtw'>
                    <div className='width-40pc'>
                        <p className='font-ml bold'>About Computer Science Society</p>
                        <p className='padding-top-8 padding-bottom-16'>The Computer Science Society of Mount Holyoke College is a group of student leaders who cultivate a supportive community of critically-thinking, impact-driven, team-playing computer science students on our women’s college campus. Our organization has taken on the tasks detailed in the mission because we are people who are committed to the growth and development of our community and department. We will tackle this mission by holding multiple events and programs.</p>
                        <button className='read-more-btn'>Read More</button>
                    </div>
                    <div style={{backgroundColor: 'red', width: '500px', color: 'pink',}}>
                        Pictures
                    </div>
                </div>


            </div>

        </>
    )
}

export default Home;