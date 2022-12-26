import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import '../css/experience.css'
import SchoolIcon from '@mui/icons-material/School'

const Experience = () => {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3d405b'>
          <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          contentStyle={{ background: '##f2cc8f', color: '#81b29a' }}
          contentArrowStyle={{ borderRight: '7px solid  #81b29a' }}
          date = "2021 - Present"
          iconStyle={{ background: '#3d405b', color: '#fff' }}
          icon={<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>Universitas Siliwangi, Siliwangi Street</h3>
            <p>Computer Science</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          contentStyle={{ background: '##f2cc8f', color: '#81b29a' }}
          contentArrowStyle={{ borderRight: '7px solid  #81b29a' }}
          date = "2017 - 2020"
          iconStyle={{ background: '#3d405b', color: '#fff' }}
          icon={<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>SMAN 1 Singaparna, Perikanan Darat Street</h3>
            <p>Science</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          contentStyle={{ background: '##f2cc8f', color: '#81b29a' }}
          contentArrowStyle={{ borderRight: '7px solid  #81b29a' }}
          date = "2014 - 2017"
          iconStyle={{ background: '#3d405b', color: '#fff' }}
          icon={<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>MTsN 1 Tasikmalaya, Pahlawan Street</h3>
            <p>Computer Science</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience