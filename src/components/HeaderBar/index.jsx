import './style.css'

export default ({children}) => {

      return (
            <header className="header_bar">
                  <section className="header_left_side">
                        {children}
                  </section>
                  
                  <section className="header_right_side">
                        <div className="header_icon">
                              <svg 
                                    width={26}
                                    fill="#666"
                                    className="header_icon_image"
                                    viewBox="0 0 24 24">
                                    <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                              </svg>
                        </div>

                        <div className="header_icon">
                              <img 
                                    className="account_picture_file header_icon_image"
                                    src="https://avatars.githubusercontent.com/u/64750883?s=400&u=2774e970120553b308577598f1d0d575353d1aa4&v=4" 
                                    alt="Account Picture"/>
                        </div>
                  </section>
            </header>
      )
}