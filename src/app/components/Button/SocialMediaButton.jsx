import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YoutubeIcon from '@mui/icons-material/YouTube';

import Link from 'next/link';

function SocialMediaButton({socialMedia, link}) {
  return (
    <Link href={`https://www.${socialMedia}.com/${link}`}>
      <button className='flex flex-row justify-center items-center mx-3 text-white'>
          {socialMedia === "Linkedin" && <LinkedInIcon />}
          {socialMedia === "Twitter" && <TwitterIcon />}
          {socialMedia === "Instagram" && <InstagramIcon />}
          {socialMedia === "Youtube" && <YoutubeIcon />}
          <span className='flex justify-center items-center'>{socialMedia}</span>
      </button>
    </Link>
  )
}

export default SocialMediaButton