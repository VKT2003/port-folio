import React from 'react'
import styles from './Header.module.css'
import code from '../../../Assets/code.png'

const Header = () => {
    return (
        <div className={`${styles.header}`}>
            <div className={`${styles.left}`}>
                <p>I’m Vishal Tiwari <b>Front-end</b> Developer </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolorem magnam voluptas incidunt labore, asperiores, blanditiis placeat in, quod expedita repudiandae dolores veniam?</p>
                <button type="button" ><svg width="91" height="20" viewBox="0 0 91 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.85983 15.3706V3.73424H3.61551V8.79106H9.41665V3.73424H11.178V15.3706H9.41665V10.2967H3.61551V15.3706H1.85983ZM15.4905 3.73424V15.3706H13.7348V3.73424H15.4905ZM18.0473 15.3706V3.73424H22.1951C23.0966 3.73424 23.8447 3.88954 24.4394 4.20015C25.0379 4.51076 25.4848 4.94068 25.7803 5.48992C26.0757 6.03538 26.2235 6.66606 26.2235 7.38197C26.2235 8.09409 26.0738 8.72098 25.7746 9.26265C25.4791 9.80053 25.0322 10.2191 24.4337 10.5183C23.839 10.8176 23.0909 10.9672 22.1894 10.9672H19.0473V9.45583H22.0303C22.5985 9.45583 23.0606 9.37439 23.4166 9.21151C23.7765 9.04864 24.0398 8.81189 24.2064 8.50129C24.3731 8.19068 24.4564 7.81757 24.4564 7.38197C24.4564 6.94257 24.3712 6.56189 24.2007 6.23992C24.0341 5.91795 23.7708 5.67174 23.411 5.50129C23.0549 5.32704 22.5871 5.23992 22.0076 5.23992H19.803V15.3706H18.0473ZM23.7916 10.1206L26.6666 15.3706H24.6666L21.8485 10.1206H23.7916ZM28.3598 15.3706V3.73424H35.6553V5.24561H30.1155V8.79106H35.2746V10.2967H30.1155V13.8592H35.7235V15.3706H28.3598ZM42.2348 3.73424H44.3655L48.0701 12.7797H48.2064L51.911 3.73424H54.0416V15.3706H52.3712V6.95015H52.2632L48.8314 15.3536H47.4451L44.0132 6.94447H43.9053V15.3706H42.2348V3.73424ZM56.5942 15.3706V3.73424H63.8897V5.24561H58.3499V8.79106H63.509V10.2967H58.3499V13.8592H63.9578V15.3706H56.5942Z" fill="#2B2B2B" />
                    <g clip-path="url(#clip0_1604_538)">
                        <path d="M85.0502 8.70397L81.4742 5.12797L82.4169 4.1853L87.6022 9.37064L82.4169 14.556L81.4742 13.6133L85.0502 10.0373H76.9355V8.70397H85.0502Z" fill="#2B2B2B" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1604_538">
                            <rect width="16" height="16" fill="white" transform="translate(74.2689 1.37061)" />
                        </clipPath>
                    </defs>
                </svg>
                </button>
            </div>
            <img src={code} alt="code" className={`${styles.right}`} />
        </div>
    )
}

export default Header