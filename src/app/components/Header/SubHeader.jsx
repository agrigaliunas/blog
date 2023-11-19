import React from 'react'
import SocialMediaButton from '../Button/SocialMediaButton'

const SubHeader = () => {
  return (
    <div className='sub-header'>
       <SocialMediaButton socialMedia="Twitter" link="agustingriga"/>
       <SocialMediaButton socialMedia="Instagram" link="agustingriga"/>
       <SocialMediaButton socialMedia="Linkedin" link="in/agustingrigaliunas"/>
       <SocialMediaButton socialMedia="Youtube" link="channel/UCEd7nl-FRlvEu_eXfvZFmPw"/>
    </div>  )
}

export default SubHeader